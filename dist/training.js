"use strict";
const TRAINING_DRILLS = {
  targets: { name: 'Alvos fixos', hint: 'Mire e segure Espaço · E: elemental · F: fúria.' },
  moving: { name: 'Mira em movimento', hint: 'Siga o alvo · Ajuste a altura e atire.' },
  dodge: { name: 'Esquiva', hint: 'Cruze os projéteis com Shift para registrar uma esquiva.' }
};
function trainingLevel() {
  return { id: 0, name: 'Campo de treinamento', realm: 'Ninho · prática livre', region: 0, training: true, duration: 999999, events: [], eggs: 0, babies: 0, boss: false };
}
function freshTraining(drill) {
  const session = freshRun();
  session.ancient = false;
  session.p.fury = 100;
  session.training = { drill, damage: 0, damageStarted: null, dodges: 0, nextVolley: 2, warning: null, respawn: {}, note: '', noteUntil: 0 };
  return session;
}
function startTraining(drill = 'targets') {
  if (save.nest < 3) { toast('Construa o ninho nível 3 para abrir o campo de treinamento.'); return false; }
  if (!Object.hasOwn(TRAINING_DRILLS, drill)) return false;
  if (mode === 'flight' && !isTraining()) pauseFlight();
  requestId++;
  cancelAnimationFrame(raf); keys.clear(); leaveNest();
  page = 'jogar';
  $('#jogar').hidden = false; $('#area').hidden = true;
  document.querySelectorAll('nav button').forEach(b => b.classList.toggle('active', b.dataset.page === 'jogar'));
  level = trainingLevel(); run = freshTraining(drill); particles = [];
  try {
    flightView ??= new Ninho3D.FlightView(game);
    flightView.reset(level);
  } catch (err) {
    console.error(err); home(); toast('Não foi possível preparar o campo de treinamento.'); return false;
  }
  mode = 'flight';
  $('#cover').hidden = true; game.hidden = false; $('#overlay').hidden = true;
  $('#hud').hidden = false; $('#flightInfo').hidden = false; $('#touch').hidden = false;
  $('#trainingPanel').hidden = false; $('#bossSignal').hidden = true;
  $('#ready').textContent = 'TREINAMENTO';
  trainingTick(); draw(); game.focus({preventScroll:true}); animate();
  return true;
}
function changeTrainingDrill(drill) {
  if (!isTraining() || !Object.hasOwn(TRAINING_DRILLS, drill) || !['flight', 'paused'].includes(mode)) return;
  cancelAnimationFrame(raf); keys.clear(); particles = [];
  run = freshTraining(drill); mode = 'flight'; $('#overlay').hidden = true;
  $('#ready').textContent = 'TREINAMENTO';
  trainingTick(); draw(); game.focus({preventScroll:true}); animate();
}
function refillTraining() {
  if (!isTraining() || !['flight', 'paused'].includes(mode)) return;
  run.p.energy = flightStats().energyMax; run.p.fury = 100; run.p.hp = flightStats().hp;
  run.p.shield = flightStats().shieldMax; run.p.shieldClock = 0;
  run.p.power = 0; run.p.cool = 0; run.p.inv = 1;
  run.training.note = 'Vida, escudo, energia, fúria e esquiva restaurados.'; run.training.noteUntil = run.t + 3;
  draw();
}
function leaveTraining() {
  if (!isTraining()) return;
  home(); showPage('ninho'); toast('Treino encerrado. Seu progresso da campanha continua guardado.');
}
function trainingTick() {
  const state = run.training, count = state.drill === 'targets' ? 3 : 1;
  for (let slot = 0; slot < count; slot++) {
    if (run.entities.some(e => !e.dead && e.kind === 'alvo' && e.slot === slot)) continue;
    if (state.respawn[slot] === undefined) state.respawn[slot] = run.t;
    if (run.t < state.respawn[slot]) continue;
    const y = count === 3 ? 68 + slot * 52 : 113;
    run.entities.push({ ...entity('alvo', y, slot), x: count === 3 ? 370 + slot * 14 : 389, slot });
    state.respawn[slot] = run.t + 1;
  }
  if (state.drill !== 'dodge') return;
  if (state.warning) {
    if (run.t < state.warning.fireAt) return;
    for (const offset of [-9, 0, 9]) run.bullets.push({ x: 469, y: state.warning.y + offset, vx: -85, vy: 0, training: true });
    state.warning = null; state.nextVolley = run.t + 3.5;
  } else if (run.t >= state.nextVolley) {
    state.warning = { y: bound(run.p.y, 33, 195), fireAt: run.t + 0.9 };
  }
}
function trainingTip() {
  const state = run.training;
  if (state.noteUntil > run.t) return state.note;
  if (state.warning) return 'Rajada anunciada · Prepare a esquiva ou mude de altura.';
  return TRAINING_DRILLS[state.drill].hint;
}
function drawTraining() {
  const active = isTraining() && !!run?.training;
  $('#trainingPanel').hidden = !active;
  const signal = $('#trainingSignal');
  signal.hidden = !active || !run.training.warning;
  if (!active) return;
  const state = run.training;
  $('#trainingTeam').textContent = (flightTeam().length ? flightTeam().join(' + ') : 'Sem companheiros equipados') + ' · Energia ' + flightStats().energyMax + ' · Recarga ' + flightStats().energyRegen + '/s' + (flightStats().shieldMax ? ' · Escudo ' + run.p.shield + '/' + flightStats().shieldMax : '');
  const elapsed = Math.floor(run.t), dps = state.damageStarted === null ? '0.0' : (state.damage / Math.max(1, run.t - state.damageStarted)).toFixed(1);
  const stats = [['TEMPO', Math.floor(elapsed / 60) + ':' + String(elapsed % 60).padStart(2, '0')], ['ALVOS', run.kills], ['DANO', Math.round(state.damage)], ['DANO / S', dps], ['IMPACTOS', run.hits], ['BLOQUEIOS', run.blocks || 0], ['ESQUIVAS COM SHIFT', state.dodges]];
  const markup = stats.map(([label, value]) => '<div><span>' + label + '</span><strong>' + value + '</strong></div>').join('');
  if ($('#trainingStats').innerHTML !== markup) $('#trainingStats').innerHTML = markup;
  document.querySelectorAll('[data-training-drill]').forEach(b => {
    const selected = b.dataset.trainingDrill === state.drill;
    b.setAttribute('aria-pressed', selected); b.classList.toggle('selected', selected);
  });
  $('#routeName').textContent = TRAINING_DRILLS[state.drill].name + ' · sem limite de tempo';
  $('#routeProgress').value = 0;
  const markers = $('#explorationMarkers');
  const aspect = game.clientHeight ? game.clientWidth / game.clientHeight : 480 / 222;
  const width = Math.max(480, 222 * aspect), height = Math.max(222, 480 / aspect);
  const labels = run.entities.filter(e => e.kind === 'alvo' && !e.dead).map(e => {
    const y = e.y + (game.clientWidth < 620 && e.y < 100 ? 35 : -22);
    return '<span class="explore-marker training-target-label" style="left:' + (50 + (e.x - 240) / width * 100) + '%;top:' + (50 + (y - 111) / height * 100) + '%">ALVO ' + (e.slot + 1) + ' · ' + Math.max(0, Math.ceil(e.hp)) + '/' + e.max + '</span>';
  }).join('');
  markers.hidden = false;
  if (markers.innerHTML !== labels) markers.innerHTML = labels;
  if (state.warning) {
    const aspect = game.clientHeight ? game.clientWidth / game.clientHeight : 480 / 222;
    const height = Math.max(222, 480 / aspect);
    signal.style.top = (50 + (state.warning.y - 111) / height * 100) + '%';
  }
}
