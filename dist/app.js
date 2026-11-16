"use strict";
const $ = (s) => document.querySelector(s), pad = (n) => String(n).padStart(2, "0");
const svg = (paths) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7" aria-hidden="true">' + paths + "</svg>";
const speaker = '<path d="M3 9h4l5-4v14l-5-4H3z"/>';
$("#help").innerHTML = svg('<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h1m3 0h1m3 0h1m3 0h0M6 12h1m3 0h1m3 0h1m3 0h0M8 15h8"/>');
$("#expand").innerHTML = svg('<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>');
function soundUI() {
  $("#soundIcon").innerHTML = svg(speaker + (save.audio ? '<path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>' : '<path d="m16 9 5 6m0-6-5 6"/>'));
  $("#soundLabel").textContent = save.audio ? "Som ligado" : "Som desligado";
  $("#sound").setAttribute("aria-pressed", save.audio);
}
$("#sound").onclick = () => {
  save.audio = !save.audio;
  writeSave();
  soundUI();
  if (save.audio) chime();
};
let toastTimer = 0, page = "jogar", selected = save.cp?.id || unlocked();
function toast(msg) {
  $("#toast").textContent = msg;
  $("#toast").style.display = "block";
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("#toast").style.display = "none", 2600);
}
function tile(icon, label, title, sub) {
  return '<div class="card"><div class="tile ' + icon + '"><canvas width="20" height="20" data-icon="' + icon + '"></canvas></div><div><div class="kicker">' + label + "</div><strong>" + title + "</strong><small>" + sub + "</small></div></div>";
}
function journal() {
  const n = selected, done = cardCount(save.medals), last = save.last;
  $("#stageLabel").textContent = "Fase " + pad(n) + " · " + TITLES[n - 1] + "　/　" + REALMS[Math.floor((n - 1) / 4)];
  $("#journal").innerHTML = tile("map", "CAMPANHA", done + " de 24 fases", "Reino " + (Math.floor((n - 1) / 4) + 1) + " · " + REALMS[Math.floor((n - 1) / 4)]) + tile("egg", "RESGATES", cardCount(save.eggs) + " " + (cardCount(save.eggs) === 1 ? "ovo" : "ovos") + " · " + cardCount(save.babies) + " " + (cardCount(save.babies) === 1 ? "filhote" : "filhotes"), "Coleção do ninho") + tile("flag", "ÚLTIMO CHECKPOINT", last ? "Fase " + pad(last.id) + (last.type === "voo" ? " · " + last.t + " s" : " concluída") : "Início da jornada", last ? last.type === "voo" ? "Progresso de voo salvo" : "Retorno ao ninho" : "Vale das Cinzas");
  $("#launch span").textContent = save.cp ? "Continuar voo" : done ? "Iniciar fase " + pad(n) : "Iniciar aventura";
  paintIcons();
}
let closeNestView, hatchSequence = null, hatchTimer = 0;
function leaveNest(){closeNestView?.();closeNestView=null}
function showPage(name) {
  if (!["jogar", "mapa", "ninho"].includes(name)) return;
  if (mode === "loading") {
    requestId++;
    mode = "menu";
    home();
  }
  if (mode === "flight") pauseFlight();
  if(name!=="ninho")leaveNest();
  page = name;
  $("#jogar").hidden = name !== "jogar";
  $("#area").hidden = name === "jogar";
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.page === name));
  if (name === "jogar") journal();
  if (name === "mapa") mapUI();
  if (name === "ninho") nestUI();
}
function home() {
  cancelAnimationFrame(raf);
  keys.clear();
  mode = "menu";
  flightView?.release();
  run = null;
  $('#trainingPanel').hidden = true; $('#trainingSignal').hidden = true;
  particles = [];
  $("#cover").hidden = false;
  game.hidden = true;
  $("#overlay").hidden = true;
  $("#hud").hidden = true;
  $("#flightInfo").hidden = true;
  $("#bossSignal").hidden = true;
  $('#explorationMarkers').hidden = true;
  $("#touch").hidden = true;
  $("#ready").textContent = "PRONTO PARA VOAR";
  journal();
}
function overlay(k, title, desc, buttons) {
  $("#overlay").hidden = false;
  $("#overlay").innerHTML = '<div class="overlay-box"><div class="kicker">' + k + "</div><h2>" + title + "</h2><p>" + desc + '</p><div class="actions">' + buttons.map(([label, act], i) => '<button class="' + (i ? "ghost" : "gold") + '" data-act="' + act + '">' + label + "</button>").join("") + "</div></div>";
}
async function startFlight(id, resume = false) {
  if (id > unlocked() || id < 1) return;
  let ticket = ++requestId;
  cancelAnimationFrame(raf);
  mode = "loading";
  $("#trainingPanel").hidden = true; $("#trainingSignal").hidden = true;
  leaveNest();
  page = "jogar";
  $("#jogar").hidden = false;
  $("#area").hidden = true;
  document.querySelectorAll("nav button").forEach((b) => b.classList.toggle("active", b.dataset.page === "jogar"));
  $("#cover").hidden = true;
  game.hidden = false;
  $("#hud").hidden = true;
  $("#flightInfo").hidden = true;
  $("#bossSignal").hidden = true;
  $('#explorationMarkers').hidden = true;
  overlay("CAMPANHA", "Preparando voo…", TITLES[id - 1], []);
  let loaded;
  try {
    loaded = await getLevel(id);
  } catch {
    if (ticket !== requestId) return;
    home();
    toast("Não foi possível abrir a fase. Tente novamente.");
    return;
  }
  if (ticket !== requestId) return;
  try {
    flightView ??= new Ninho3D.FlightView(game);
    flightView.reset(loaded);
  } catch (err) {
    console.error(err);home();toast("Falha ao preparar a cena 3D. Reabra o jogo para tentar novamente.");return;
  }
  level = loaded;
  selected = id;
  run = resume && save.cp?.id === id ? JSON.parse(JSON.stringify(save.cp.run)) : freshRun();
  run.companions ??= [...activeCompanions()];
  initializeFlightBuild();
  mode = "flight";
  keys.clear();
  particles = [];
  $("#overlay").hidden = true;
  $("#hud").hidden = false;
  $("#flightInfo").hidden = false;
  $("#touch").hidden = false;
  $("#ready").textContent = "EM VOO";
  checkpoint();
  draw();
  game.focus({ preventScroll: true });
  animate();
}
function pauseFlight() {
  if (mode !== "flight") return;
  keys.clear();
  mode = "paused";
  cancelAnimationFrame(raf);
  if (isTraining()) {
    $('#ready').textContent = 'TREINO PAUSADO';
    overlay('CAMPO DE TREINAMENTO', 'Treino pausado', 'Seu voo da campanha continua guardado. O treino não concede recursos ou medalhas.', [['Continuar treino', 'resume'], ['Voltar ao ninho', 'trainingExit']]);
    return;
  }
  checkpoint();
  journal();
  $("#ready").textContent = "VOO PAUSADO";
  overlay("CHECKPOINT · FASE " + pad(level.id), "Voo pausado", savedOK ? "Sua posição foi salva aos " + Math.floor(run.t) + " segundos." : "Seu voo está pausado nesta sessão.", [["Continuar voo", "resume"], ["Voltar ao início", "home"]]);
}
function resumeFlight() {
  if (mode !== "paused") return;
  mode = "flight";
  $("#overlay").hidden = true;
  $("#ready").textContent = isTraining() ? "TREINAMENTO" : "EM VOO";
  game.focus({ preventScroll: true });
  animate();
}
function endFlight(won) {
  if (mode !== "flight") return;
  if (isTraining()) { leaveTraining(); return; }
  mode = won ? "won" : "lost";
  cancelAnimationFrame(raf);
  keys.clear();
  $("#touch").hidden = true;
  $("#hud").hidden = true;
  $("#flightInfo").hidden = true;
  $("#bossSignal").hidden = true;
  $('#explorationMarkers').hidden = true;
  let id = level.id;
  if (won) {
    const ranks = ["Bronze", "Prata", "Ouro"];
    let all = run.eggs.length === level.eggs && run.babies.length === level.babies;
    let rank = all && run.hits <= 2 && run.kills >= 2 ? "Ouro" : all || run.kills >= 4 ? "Prata" : "Bronze";
    if (ranks.indexOf(rank) > ranks.indexOf(save.medals[id])) save.medals[id] = rank;
    let scales = 8 + run.loot + run.eggs.length * 2 + (run.ancient ? 5 : 0);
    save.scales += scales;
    save.embers += level.boss ? 4 : 1;
    save.cores += level.boss ? 1 : 0;
    for (const egg of Object.values(save.eggs)) if (!egg.hatched) egg.left = Math.max(0, egg.left - 1);
    if (id === 24) {
      save.nest = 5;
      if (run.ancient) save.raids++;
    }
    save.cp = null;
    if (level.exploration) {
      save.exploration ??= { rewards: {}, routes: {} };
      const x = explorationState();
      save.exploration.routes[id + '-' + x.path] = true;
      if (x.route === 'secret') save.exploration.routes[id + '-secret'] = true;
    }
    save.last = { id, t: Math.floor(run.t), type: "fim" };
    selected = unlocked();
    writeSave();
    chime();
    const explorationSummary = level.exploration ? ' Rota: ' + level.exploration.names[run.exploration.path || 'main'] + (run.exploration.route === 'secret' ? ' + Câmara dos Ecos' : '') + ' · ' + run.exploration.rewards.length + ' tesouro(s) encontrado(s) · ' + run.exploration.bonus + ' escamas de exploração já guardadas.' : '';
    overlay((run.ancient ? "DESAFIO ANCESTRAL" : "FASE " + pad(id)) + " · " + rank.toUpperCase(), id === 24 ? "Grande Ninho restaurado!" : "Missão concluída!", (id === 24 ? "O Eclipse caiu. As fases do mapa agora têm desafios ancestrais. " : "") + "+" + scales + " escamas · " + run.eggs.length + "/" + level.eggs + " ovos · " + run.babies.length + "/" + level.babies + " filhotes." + explorationSummary, id === 24 ? [["Visitar ninho", "nest"], ["Ver mapa", "map"]] : [["Próxima fase", "next"], ["Visitar ninho", "nest"]]);
    $("#ready").textContent = "MISSÃO CONCLUÍDA";
  } else {
    note(150, 0.45, "triangle", 0.07, 0, 50);
    overlay("FASE " + pad(id), "Voo interrompido", "Os resgates já feitos estão no ninho.", [["Retomar checkpoint", "retry"], ["Reiniciar fase", "restart"], ["Voltar ao início", "home"]]);
    $("#ready").textContent = "VOO INTERROMPIDO";
  }
  journal();
}
function mapUI() {
  $("#areaTitle").textContent = "Mapa dos reinos";
  let limit = unlocked();
  $("#areaContent").innerHTML = REALMS.map((r, i) => '<div class="region"><div class="kicker">REINO ' + pad(i + 1) + "</div><h3>" + r + '</h3><div class="missions">' + TITLES.slice(i * 4, i * 4 + 4).map((name, j) => {
    let n = i * 4 + j + 1;
    return '<button class="choice" data-stage="' + n + '" ' + (n > limit ? "disabled" : "") + "><span>FASE " + pad(n) + " · " + (save.medals[24] ? "ANCESTRAL" : save.medals[n] || (n > limit ? "BLOQUEADA" : "DISPONÍVEL")) + "</span>" + name + "</button>";
  }).join("") + "</div></div>").join("");
}
const nestNames = ["", "Abrigo básico", "Incubadora e berçário", "Oficina de escamas", "Santuário elemental", "Grande Ninho"];
function statNumber(value) { return String(Number(value.toFixed(2))).replace('.', ','); }
function evolutionComparison(key, before, after) {
  const pair = (a, b, unit = '') => statNumber(a) + unit + ' → ' + statNumber(b) + unit;
  if (key === 'atk') return 'Dano do sopro: ' + pair(before.primary, after.primary);
  if (key === 'hp') return 'Vida máxima: ' + pair(before.hp, after.hp);
  if (key === 'energy') return 'Energia máxima: ' + pair(before.energyMax, after.energyMax);
  if (key === 'regen') return 'Energia por segundo: ' + pair(before.energyRegen, after.energyRegen);
  if (key === 'speed') return 'Velocidade: ' + pair(before.speed - 100, after.speed - 100, '%') + ' · Esquiva: ' + pair(before.dashCooldown, after.dashCooldown, ' s');
  return 'Cargas: ' + pair(before.shieldMax, after.shieldMax) + ' · Recarga: ' + (before.shieldMax ? pair(before.shieldDelay, after.shieldDelay, ' s') : statNumber(after.shieldDelay) + ' s');
}
function evolutionUI() {
  const current = dragonStats();
  const summary = [['VIDA', current.hp], ['SOPRO', current.primary], ['ESCUDO', current.shieldMax + ' carga(s)'], ['ENERGIA', current.energyMax], ['RECUPERAÇÃO', current.energyRegen + '/s'], ['VELOCIDADE', '+' + (current.speed - 100) + '%']];
  const branches = [['offense', 'Ofensiva', 'Sopro e reserva elemental', ['atk','energy']], ['defense', 'Proteção', 'Vida e escudo recarregável', ['hp','def']], ['mobility', 'Mobilidade', 'Asas e recuperação de energia', ['speed','regen']]];
  return '<section class="evolution"><div class="kicker">EVOLUÇÃO DO DRAGÃO</div><h3>Escolha como voar</h3><p class="muted">Combine os três caminhos. As compras valem ao iniciar outro voo ou reiniciar um exercício. O voo salvo mantém seus atributos.</p><div class="evolution-summary">' + summary.map(([label,value]) => '<div><span>' + label + '</span><strong>' + value + '</strong></div>').join('') + '</div><div class="evolution-branches">' + branches.map(([branch,title,sub,keys]) => '<section class="evolution-branch ' + branch + '"><div class="branch-title"><span>' + title + '</span><small>' + sub + '</small></div>' + keys.map(key => {
    const state = upgradeState(key), nextUp = { ...normalizeUpgrades(save.up), [key]: Math.min(state.next, state.info.max) }, next = dragonStats(nextUp);
    const costs = Object.entries(state.cost).filter(([,value]) => value).map(([resource,value]) => '<span>' + value + ' ' + ({scales:'escamas',embers:'brasas',cores:'núcleos'})[resource] + '</span>').join('');
    const requirements = state.maxed ? '' : state.requirements.length ? '<ul class="skill-requirements">' + state.requirements.map(text => '<li class="' + (state.missing.includes(text) ? '' : 'met') + '">' + (state.missing.includes(text) ? '◇ ' : '✓ ') + text + '</li>').join('') + '</ul>' : '<p class="skill-open">Disponível desde o abrigo inicial.</p>';
    const progress = Array.from({length:state.info.max},(_,i) => '<i class="' + (i < state.value ? 'learned' : '') + '"></i>').join('');
    return '<article class="evolution-skill ' + (state.maxed ? 'mastered' : '') + '"><div class="skill-level">NÍVEL ' + state.value + '/' + state.info.max + '</div><h4>' + state.info.name + '</h4><div class="skill-progress" aria-label="Nível ' + state.value + ' de ' + state.info.max + '">' + progress + '</div><p>' + state.info.desc + '</p><div class="skill-comparison">' + (state.maxed ? 'Evolução completa.' : evolutionComparison(key,current,next)) + '</div>' + requirements + (state.maxed ? '' : '<div class="skill-cost">' + costs + '</div>') + '<button class="' + (state.available ? 'gold' : 'ghost') + '" data-buy="' + key + '" ' + (!state.available ? 'disabled' : '') + '>' + (state.maxed ? 'Nível máximo' : state.missing.length ? 'Requisitos pendentes' : state.shortfall.length ? 'Recursos insuficientes' : 'Aprender nível ' + state.next) + '</button>' + (!state.maxed && state.shortfall.length ? '<small class="skill-shortfall">' + state.shortfall.join(' · ') + '</small>' : '') + '</article>';
  }).join('') + '</section>').join('') + '</div></section>';
}
function nurseryUI() {
  const team = activeCompanions(), capacity = companionSlots();
  const slots = [0, 1].map(i => '<div class="companion-slot ' + (team[i] ? 'equipped' : '') + '"><span>COMPANHEIRO ' + (i + 1) + '</span><strong>' + (team[i] || (i >= capacity ? 'Ninho nível ' + (i ? 3 : 2) : 'Espaço livre')) + '</strong>' + (team[i] ? '<button class="ghost" data-equip="' + team[i] + '">Retirar</button>' : '') + '</div>').join('');
  return '<section class="nursery"><div class="nursery-heading"><div><div class="kicker">BERÇÁRIO · ' + Object.values(save.babies).length + ' FILHOTES</div><h3>Quem voa com você?</h3></div><span>' + team.length + ' / ' + capacity + ' equipados</span></div><p class="muted">Cada espécie ocupa um espaço. O primeiro abre no ninho 2 e o segundo no ninho 3. As habilidades da dupla se combinam.' + (save.cp ? ' O voo salvo mantém a equipe anterior; as trocas valem ao iniciar outro voo.' : '') + '</p><div class="companion-slots">' + slots + '</div><div class="dragon-cards">' + Object.entries(DRAGONS).map(([name, info]) => {
    const count = Object.values(save.babies).filter(s => s === name).length;
    const eggs = Object.values(save.eggs).filter(e => e.species === name && !e.hatched).length;
    const equipped = team.includes(name), full = !equipped && team.length >= capacity;
    const label = equipped ? 'Retirar da equipe' : !count ? 'Ainda não resgatado' : !capacity ? 'Requer ninho 2' : full ? 'Equipe completa' : 'Levar no próximo voo';
    return '<article class="dragon-card ' + (count ? '' : 'undiscovered') + '" style="--dragon-color:' + info.color + '"><div class="dragon-portrait"><img src="portraits/' + info.model + '.svg" width="174" height="120" alt="Dragão ' + name + '" loading="lazy"><span>' + info.element + '</span></div><div class="dragon-card-body"><div class="kicker">' + info.role + '</div><h4>Dragão ' + name + '</h4><p>' + info.power + '</p><small>' + info.trait + ' · ' + info.home + '</small><div class="dragon-count">' + count + ' no berçário' + (eggs ? ' · ' + eggs + ' ovo(s) em incubação' : '') + '</div><button class="' + (equipped ? 'ghost' : 'gold') + '" data-equip="' + name + '" aria-pressed="' + equipped + '" ' + (!count || !capacity || full ? 'disabled' : '') + '>' + label + '</button></div></article>';
  }).join('') + '</div></section>';
}
function nestUI() {
  const e = Object.entries(save.eggs), b = Object.values(save.babies), ready = e.filter(([, x]) => !x.hatched && x.left === 0).length;
  $("#areaTitle").textContent = "O ninho";
  let content = '<div class="box"><div class="kicker">NINHO · NÍVEL ' + save.nest + "</div><h3>" + nestNames[save.nest] + '</h3><div class="inv"><span>' + save.scales + " escamas</span><span>" + save.embers + " brasas</span><span>" + save.cores + " núcleos</span></div>";
  if (save.nest < 5) {
    const price = nestUpgradeCost(save.nest);
    const lacking = save.scales < price.scales || save.cores < price.cores;
    const coreLabel = price.cores ? " + " + price.cores + (price.cores === 1 ? " núcleo" : " núcleos") : "";
    content += "<p>Próxima construção · " + nestNames[save.nest + 1] + '</p><button class="ghost" data-buy="nest" ' + (lacking ? "disabled" : "") + ">Construir · " + price.scales + " escamas" + coreLabel + "</button>" + (lacking ? '<small class="skill-shortfall">' + (save.scales < price.scales ? 'Faltam ' + (price.scales - save.scales) + ' escamas' : '') + (save.cores < price.cores ? (save.scales < price.scales ? ' · ' : '') + 'Faltam ' + (price.cores - save.cores) + ' núcleos' : '') + '</small>' : '');
  }
  content += '</div>' + evolutionUI() + '<div class="grid"><div class="box"><div class="kicker">OVOS</div><h3>Incubadora</h3><p>' + ready + ' prontos para nascer. A incubação avança ao concluir missões.</p><button class="ghost" data-act="hatch" ' + (!ready || save.nest < 2 ? "disabled" : "") + ">" + (save.nest < 2 ? "Requer ninho nível 2" : "Chocar ovos") + '</button></div><div class="box"><div class="kicker">FILHOTES · ' + b.length + "</div><h3>Berçário</h3><p>" + (b.length ? "Consulte as espécies e monte a equipe abaixo." : "Quebre as jaulas e toque nos filhotes para resgatá-los.") + "</p>" + '</div><div class="box"><div class="kicker">CAMPANHA</div><h3>Dificuldade</h3><p>Vale a partir do próximo voo iniciado.</p><select aria-label="Dificuldade" id="difficulty" ' + (save.cp ? "disabled" : "") + ">" + ["Fácil", "Normal", "Difícil"].map((d) => "<option " + (save.difficulty === d ? "selected" : "") + ">" + d + "</option>").join("") + "</select></div></div>";
  content += '<div class="box training-entry"><div><div class="kicker">NINHO · PRÁTICA</div><h3>Campo de treinamento</h3><p>Teste o sopro, os poderes e a dupla. Alvos fixos, mira em movimento e esquiva, sem gastar recursos. O voo da campanha continua guardado.</p></div><button class="gold" data-act="trainingStart" ' + (save.nest < 3 ? 'disabled' : '') + '>' + (save.nest < 3 ? 'Requer ninho nível 3' : 'Entrar no campo') + '</button></div>';
  content += nurseryUI();
  const discoveries = save.exploration || { rewards: {}, routes: {} };
  content += '<div class="box exploration-collection"><div class="kicker">EXPLORAÇÃO · FASE 02</div><h3>Memórias da ponte</h3><p>Conclua os caminhos e encontre os três tesouros únicos. Cada tesouro concede escamas uma vez.</p><div class="discovery-grid">' + [['upper','Ruínas superiores'],['lower','Desfiladeiro âmbar'],['main','Ponte central'],['secret','Câmara dos Ecos']].map(([key,label]) => '<span class="' + (discoveries.routes['2-'+key] ? 'found' : '') + '">' + (discoveries.routes['2-'+key] ? '✓ ' : '◇ ') + label + '</span>').join('') + '</div><div class="discovery-grid">' + [['ruinas','Tesouro das ruínas · 8 escamas'],['canion','Tesouro do desfiladeiro · 8 escamas'],['ecos','Relíquia dos Ecos · 20 escamas']].map(([key,label]) => '<span class="' + (discoveries.rewards['2-'+key] ? 'found' : '') + '">' + (discoveries.rewards['2-'+key] ? '✓ ' : '◇ ') + label + '</span>').join('') + '</div></div>';
  leaveNest();
  $("#areaContent").innerHTML = '<div class="nest-preview" data-nest-level="'+save.nest+'"><div class="nest-scene-caption"><span>NINHO '+save.nest+' / 5</span><strong>'+nestNames[save.nest]+'</strong></div><div id="nestScene" tabindex="0" aria-label="Girar a maquete do ninho com as setas"></div><span>Arraste para girar</span></div>'+content;
  if(typeof Ninho3D!=="undefined")closeNestView=Ninho3D.nestView($("#nestScene"),save);
}
function renderHatchStep() {
  if (!hatchSequence) return;
  const { eggs, index } = hatchSequence;
  const [id, egg] = eggs[index];
  clearTimeout(hatchTimer);
  $("#dialog").classList.add("hatch-dialog");
  $("#closeDialog").hidden = true;
  $("#dialogContent").innerHTML = '<div class="hatch-scene" id="hatchStage"><div class="hatch-aura"></div><div class="hatch-egg"><i></i></div><div class="hatch-baby">🐉</div></div><div class="kicker">ECLOSÃO · ' + (index + 1) + '/' + eggs.length + '</div><h2>O ovo está rachando...</h2><p>Uma nova vida da espécie ' + egg.species + ' está prestes a nascer.</p><div class="actions"><button class="gold" data-hatch-next="1" disabled>Aguardar eclosão</button></div>';
  $("#dialog").showModal();
  hatchTimer = setTimeout(() => {
    const scene = $("#hatchStage"), next = $("[data-hatch-next]");
    if (scene) scene.classList.add("ready");
    if (next) {
      next.disabled = false;
      next.textContent = index + 1 < eggs.length ? "Conhecer filhote · Próximo ovo" : "Conhecer filhote";
    }
  }, 1650);
}
function startHatchSequence() {
  if (save.nest < 2 || hatchSequence) return;
  const eggs = Object.entries(save.eggs).filter(([, egg]) => egg.left === 0 && !egg.hatched);
  if (!eggs.length) return toast("Ainda não há ovos prontos para nascer.");
  hatchSequence = { eggs, index: 0 };
  renderHatchStep();
}
function advanceHatchSequence() {
  if (!hatchSequence) return;
  clearTimeout(hatchTimer);
  const [id, egg] = hatchSequence.eggs[hatchSequence.index];
  egg.hatched = true;
  save.babies["ovo-" + id] = egg.species;
  writeSave();
  hatchSequence.index++;
  if (hatchSequence.index < hatchSequence.eggs.length) {
    renderHatchStep();
    return;
  }
  const total = hatchSequence.eggs.length;
  hatchSequence = null;
  $("#dialog").close();
  $("#dialog").classList.remove("hatch-dialog");
  $("#closeDialog").hidden = false;
  nestUI();
  chime();
  toast(total === 1 ? "Um novo dragão nasceu e chegou ao berçário!" : total + " novos dragões nasceram e chegaram ao berçário!");
}
function buy(key) {
  if (key === "nest") {
    const cost = nestUpgradeCost(save.nest);
    if (!cost || save.scales < cost.scales || save.cores < cost.cores) return;
    save.scales -= cost.scales;
    save.cores -= cost.cores;
    save.nest++;
  } else {
    if (!purchaseUpgrade(key)) return;
  }
  writeSave();
  nestUI();
  chime();
}
function askStage(id) {
  if (save.cp && save.cp.id !== id) {
    $("#dialogContent").innerHTML = "<h2>Começar outra fase?</h2><p>O novo voo substituirá o checkpoint da fase " + pad(save.cp.id) + '. Seus resgates e melhorias já estão guardados.</p><div class="actions"><button class="gold" data-confirm-stage="' + id + '">Começar fase ' + pad(id) + "</button></div>";
    $("#dialog").showModal();
    return;
  }
  startFlight(id, !!save.cp);
}
document.addEventListener("click", (ev) => {
  const b = ev.target.closest("button");
  if (!b) return;
  const d = b.dataset;
  if (d.trainingDrill) { changeTrainingDrill(d.trainingDrill); return; }
  if (d.hatchNext) { advanceHatchSequence(); return; }
  if (d.page) showPage(d.page);
  if (d.stage) askStage(+d.stage);
  if (d.confirmStage) {
    $("#dialog").close();
    startFlight(+d.confirmStage);
  }
  if (d.buy) buy(d.buy);
  if (d.equip) {
    const result = changeCompanion(d.equip);
    if (result === 'locked') return toast('Resgate ou choque um ovo desta espécie primeiro.');
    if (result === 'full') return toast(companionSlots() ? 'Equipe completa. Retire um companheiro para trocar.' : 'Construa o ninho nível 2 para equipar companheiros.');
    writeSave(); nestUI(); chime();
    toast(result === 'added' ? d.equip + ' entrou na equipe do próximo voo.' : d.equip + ' voltou ao berçário.');
  }
  switch (d.act) {
    case 'trainingStart': startTraining(); break;
    case 'trainingExit': leaveTraining(); break;
    case 'trainingRefill': refillTraining(); break;
    case 'trainingReset': if (isTraining()) changeTrainingDrill(run.training.drill); break;
    case "resume":
      resumeFlight();
      break;
    case "retry":
      startFlight(level.id, true);
      break;
    case "restart":
      startFlight(level.id);
      break;
    case "next":
      startFlight(Math.min(24, level.id + 1));
      break;
    case "home":
      selected = save.cp?.id || unlocked();
      home();
      break;
    case "nest":
      home();
      showPage("ninho");
      break;
    case "map":
      home();
      showPage("mapa");
      break;
    case "hatch":
      startHatchSequence();
      break;
  }
});
document.addEventListener("change", (ev) => {
  if (ev.target.id === "difficulty" && !save.cp) {
    save.difficulty = ev.target.value;
    writeSave();
  }
});
$("#launch").onclick = () => startFlight(save.cp?.id || selected, !!save.cp);
$("#pause").onclick = () => mode === "paused" ? resumeFlight() : pauseFlight();
$(".brand").onclick = (e) => {
  e.preventDefault();
  showPage("jogar");
};
$("#help").onclick = () => {
  if (mode === "flight") pauseFlight();
  $("#dialogContent").innerHTML = '<div class="kicker">GUIA DE VOO</div><h2>Controles</h2><dl><dt>Movimentar</dt><dd>WASD / Setas</dd><dt>Sopro de fogo</dt><dd>Segurar Espaço</dd><dt>Esquiva</dt><dd>Shift</dd><dt>Fúria carregada</dt><dd>F</dd><dt>Poder elemental</dt><dd>E · após fase 04</dd><dt>Pausar e salvar</dt><dd>P / Esc</dd></dl><p class="muted">Toque nos ovos para recolhê-los. Atire nas jaulas antes de se aproximar dos filhotes. Na fase 02, toque nos arcos para escolher uma rota. Quebre o selo com fogo e toque na entrada verde para encontrar a câmara secreta. No ninho, equipe até dois companheiros a partir do nível 3; suas habilidades funcionam juntas. Nesse nível, o campo de treinamento permite praticar sem alterar a campanha. O escudo absorve impactos e recarrega sozinho; acompanhe suas cargas no HUD.</p><br>';
  $("#dialog").showModal();
};
$("#closeDialog").onclick = () => $("#dialog").close();
$("#dialog").addEventListener("close", () => {
  if (!hatchSequence) return;
  clearTimeout(hatchTimer);
  hatchSequence = null;
  $("#closeDialog").hidden = false;
  $("#dialog").classList.remove("hatch-dialog");
});
$("#expand").onclick = async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await $(".console").requestFullscreen();
  } catch {
    toast("Tela cheia indisponível neste navegador.");
  }
};
const bindings = ["ArrowLeft", "ArrowUp", "ArrowDown", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD", "Space", "KeyF", "KeyE", "ShiftLeft", "ShiftRight"];
window.addEventListener("keydown", (e) => {
  if (page !== "jogar" || $("#dialog").open) return;
  if (["flight", "paused"].includes(mode) && ["KeyP", "Escape"].includes(e.code) && !e.repeat) {
    e.preventDefault();
    if (mode === "flight") pauseFlight();
    else resumeFlight();
    return;
  }
  if (mode === "flight" && bindings.includes(e.code)) {
    e.preventDefault();
    keys.add(e.code);
  }
});
window.addEventListener("keyup", (e) => keys.delete(e.code));
window.addEventListener("blur", () => {
  keys.clear();
  if (mode === "flight") pauseFlight();
});
document.addEventListener("visibilitychange", () => {
  if (document.hidden && mode === "flight") pauseFlight();
});
window.addEventListener("pagehide", checkpoint);
for (const b of document.querySelectorAll("[data-key]")) {
  b.onpointerdown = (e) => {
    e.preventDefault();
    b.setPointerCapture(e.pointerId);
    keys.add(b.dataset.key);
  };
  b.onpointerup = b.onpointercancel = b.onlostpointercapture = () => keys.delete(b.dataset.key);
}
soundUI();
journal();
$("#devlog").onclick = () => {
  if (mode === "flight") pauseFlight();
  $("#dialogContent").innerHTML = '<div class="kicker">16 NOV 2026 · V0.7.1</div><h2>Trilhas de Evolução</h2><p>O ninho agora apresenta três caminhos: ofensiva, proteção e mobilidade. As seis melhorias mostram níveis, custos, requisitos e o efeito antes/depois. A versão 0.7.1 aumentou progressivamente os preços das construções e das habilidades, valorizando a exploração e os resgates.</p><br><p>O escudo absorve impactos e recupera suas cargas. A reserva elemental aumenta a energia máxima; o fôlego ancestral acelera sua recuperação. Teste as melhorias no campo de treinamento.</p><br><p class="muted">Sopro, vida e velocidade adquiridos nas versões anteriores foram preservados. Cada voo guarda seus atributos no checkpoint; novas compras valem em outro voo ou ao reiniciar um exercício. O GDD completo continua no ZIP.</p><br>';
  $("#dialog").showModal();
};
