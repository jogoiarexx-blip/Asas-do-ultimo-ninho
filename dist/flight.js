"use strict";
const keys = new Set();
const game = document.querySelector("#game");
let flightView;
let mode = "menu", level = null, run = null, raf = 0, stamp = 0, particles = [], lastHUD = "", lastPhase = "", requestId = 0;
const bound = (v, a, b) => Math.min(b, Math.max(a, v));
const isTraining = () => !!level?.training;
const health = (team = activeCompanions()) => dragonStats(save.up, team).hp;
function flightTeam() { return run?.companions || activeCompanions(); }
function hasFlightCompanion(name) { return flightTeam().includes(name); }
function flightStats() { return run?.stats || dragonStats(run?.upgrades || save.up, flightTeam()); }
function flightUpgrades() { return run?.upgrades || save.up; }
function hasFlightRelic(id) { return !!run?.relics?.includes(String(id)); }
function initializeFlightBuild() {
  run.upgrades ??= normalizeUpgrades(save.up);
  // A checkpoint from earlier versions must not silently receive equipment mid-flight.
  run.relics ??= run.stats ? [] : [...equippedRelics()];
  run.stats ??= dragonStats(run.upgrades, flightTeam(), save.nest, save.difficulty, run.relics);
  run.p.shield ??= run.stats.shieldMax; run.p.shieldClock ??= 0; run.blocks ??= 0;
}
function freshRun() {
  const companions = [...activeCompanions()], upgrades = normalizeUpgrades(save.up), relics = [...equippedRelics()], stats = dragonStats(upgrades, companions, save.nest, save.difficulty, relics);
  return { companions, upgrades, relics, stats, t: 0, event: 0, p: { x: 85, y: 111, hp: stats.hp, inv: 1, dash: 0, cool: 0, fire: 0, energy: stats.energyMax, fury: 0, power: 0, shield: stats.shieldMax, shieldClock: 0 }, entities: [], bullets: [], shots: [], kills: 0, hits: 0, blocks: 0, loot: 0, bossSent: false, wonBoss: false, eggs: [], babies: [], beat: -1, ancient: !!save.medals[24] };
}
// Optional, serializable state: old checkpoints acquire exploration without a reset.
function explorationState() {
  if (!level.exploration) return null;
  return run.exploration ??= { route: null, path: null, gatesSent: false, secretSent: false, rewards: [], bonus: 0, notice: '', noticeUntil: 0 };
}
function explorationNotice(text) {
  const x = explorationState();
  x.notice = text; x.noticeUntil = run.t + 4;
}
function chooseRoute(route) {
  const x = explorationState();
  if (!x || x.route === route) return;
  x.route = route;
  if (route !== 'secret') x.path = route;
  for (const e of run.entities) if (e.kind === 'rota' || e.kind === 'passagem' || e.kind === 'selo') e.dead = true;
  explorationNotice(route === 'secret' ? 'Passagem descoberta · Câmara dos Ecos!' : 'Caminho escolhido · ' + level.exploration.names[route]);
  chime(); checkpoint();
}
function explorationTick() {
  const x = explorationState();
  if (!x) return;
  const { choice, secret } = level.exploration;
  if (!x.gatesSent && run.t >= choice.opens) {
    x.gatesSent = true;
    if (run.t < choice.closes && !x.route) {
      for (const [route, y] of [['upper', choice.upperY], ['lower', choice.lowerY]]) {
        run.entities.push({ ...entity('rota', y, 'route-' + route), x: choice.x, route, expires: choice.closes });
      }
    }
  }
  if (!x.route && run.t >= choice.closes) chooseRoute('main');
  if (!x.secretSent && run.t >= secret.opens) {
    x.secretSent = true;
    if (run.t < secret.closes) run.entities.push({ ...entity('selo', secret.y, 'secret-seal'), x: secret.x, expires: secret.closes });
  }
}
function collectTreasure(e) {
  if (isTraining()) return;
  const x = explorationState(), reward = level.exploration.rewards[e.reward];
  if (!x || !reward) return;
  save.exploration ??= { rewards: {}, routes: {} };
  const id = level.id + '-' + e.reward;
  const first = !save.exploration.rewards[id];
  if (first) {
    save.exploration.rewards[id] = true;
    save.scales += reward.scales;
    x.bonus += reward.scales;
  }
  if (!x.rewards.includes(e.reward)) x.rewards.push(e.reward);
  e.dead = true;
  explorationNotice(first ? reward.name + ' · +' + reward.scales + ' escamas guardadas no ninho!' : reward.name + ' · Já registrada na coleção.');
  burst(e.x, e.y, '#9ef5d4', 22); chime(); checkpoint();
}
function checkpoint() {
  if (isTraining()) return;
  if (!run || !level || !["flight", "paused"].includes(mode)) return;
  save.cp = { id: level.id, run: JSON.parse(JSON.stringify(run)) };
  save.last = { id: level.id, t: Math.floor(run.t), type: "voo" };
  writeSave();
  journal();
}
function setHud() {
  const p = run.p;
  const meter = (kind, label, icon, value, max) => {
    const amount = Math.max(0, Math.min(100, max ? Math.round(value / max * 100) : 100));
    return '<div class="meter-card ' + kind + '" aria-label="' + label + ': ' + value + ' de ' + max + '">' +
      '<div class="meter-head"><span class="meter-label"><i>' + icon + '</i>' + label + '</span><strong>' + value + '<small>/' + max + '</small></strong></div>' +
      '<div class="meter-track"><i style="width:' + amount + '%"></i></div></div>';
  };
  const realm = level.realm || REALMS[Math.floor((level.id - 1) / 4)];
  const team = flightTeam();
  const phase = '<span class="phase-kicker">' + (isTraining() ? 'TREINO' : 'FASE ' + String(level.id).padStart(2, '0')) + ' <i>·</i> ' + realm + '</span><strong>' + level.name + '</strong>' + (team.length ? '<small class="team-hud">' + team.join(' + ') + '</small>' : '') + (flightStats().shieldMax && p.shield < flightStats().shieldMax ? '<small class="shield-return">Escudo em ' + Math.max(0, Math.ceil(flightStats().shieldDelay - p.shieldClock)) + ' s</small>' : '');
  document.querySelector('#hud').classList.toggle('practice', isTraining());
  const meters = meter('health', 'VIDA', '♥', p.hp, flightStats().hp) +
    meter('energy', 'ENERGIA', 'ϟ', Math.floor(p.energy), flightStats().energyMax) +
    meter('fury', 'FÚRIA', '✦', Math.round(p.fury), 100) +
    (flightStats().shieldMax ? meter('shield', 'ESCUDO', '◇', p.shield, flightStats().shieldMax) : '') +
    (isTraining() ? '' : meter('eggs', 'OVOS', '◈', run.eggs.length, level.eggs) +
    (level.babies ? meter('babies', 'FILHOTES', '♧', run.babies.length, level.babies) : ''));
  if (phase !== lastPhase) {
    document.querySelector('#hudPhase').innerHTML = phase;
    lastPhase = phase;
  }
  if (meters !== lastHUD) {
    document.querySelector('#meters').innerHTML = meters;
    lastHUD = meters;
  }
}
function burst(x, y, col, n = 12) {
  for (let i = 0; i < n; i++) {
    let a = i * Math.PI * 2 / n;
    particles.push({ x, y, vx: Math.cos(a) * (14 + Math.random() * 24), vy: Math.sin(a) * 27, life: 0.32, col });
  }
}
function encounterDifficulty() {
  // One shared tuning curve for enemy resilience, movement and projectile pace.
  if (save.difficulty === "Fácil") return { armor: 1, movement: 1, shots: 1, volleyCooldown: 4.2 };
  if (save.difficulty === "Difícil") return { armor: 1.6, movement: 1.28, shots: 1.32, volleyCooldown: 1.95 };
  // Normal is now a meaningful challenge without removing dodge / telegraph windows.
  return { armor: 1.22, movement: 1.14, shots: 1.18, volleyCooldown: 2.45 };
}
function entity(kind, y, index) {
  const hp = { alvo: 30, rota: 1, passagem: 1, tesouro: 1, selo: 8, ovo: 1, jaula: 2, filhote: 1, barreira: 7, batedor: 1, arqueiro: 2, bruto: 4, sentinela: 7, boss: level.id === 4 ? 34 : 20 + level.region * 6, raio: 1 }[kind];
  const scaled = ["batedor", "arqueiro", "bruto", "sentinela", "boss"].includes(kind) ? Math.ceil(hp * encounterDifficulty().armor) : hp;
  const totalHp = scaled + (run.ancient && ["boss", "arqueiro", "bruto"].includes(kind) ? 2 : 0);
  return { kind, y, base: y, x: kind === "raio" ? 0 : 503, age: 0, hp: totalHp, max: totalHp, cool: 2.1, serial: index, wave: 0 };
}
function hostile(e) {
  return ["alvo", "batedor", "arqueiro", "bruto", "sentinela", "boss"].includes(e.kind);
}
function awardItem(e) {
  if (isTraining()) return;
  const id = level.id + "-" + e.serial, s = species[level.region];
  if (e.kind === "ovo") {
    if (!run.eggs.includes(id)) run.eggs.push(id);
    if (!save.eggs[id]) save.eggs[id] = { species: s, left: 1, hatched: false };
  } else {
    if (!run.babies.includes(id)) run.babies.push(id);
    if (!save.babies[id]) save.babies[id] = s;
  }
  if(e.kind==="filhote")run.rescueTime=run.t;
  e.dead = true;
  burst(e.x, e.y, "#ffda8a");
  chime();
  checkpoint();
}
function hurt() {
  const p = run.p;
  if (p.inv > 0 || p.dash > 0) return;
  if (p.shield > 0) {
    p.shield--; p.shieldClock = 0; p.inv = 1.5; run.blocks = (run.blocks || 0) + 1;
    p.fury = Math.min(100, p.fury + 13); burst(p.x, p.y, '#a4e5f4', 18);
    note(440, .12, 'triangle', .04, 0, 700); return;
  }
  p.hp = isTraining() ? Math.max(1, p.hp - 1) : p.hp - 1;
  p.inv = 1.5;
  run.hits++;
  p.fury = Math.min(100, p.fury + 13);
  burst(p.x, p.y, "#ffa77c");
  note(120, 0.19, "sawtooth", 0.04, 0, 45);
  if (p.hp <= 0) endFlight(false);
}
// v0.7.8: six boss identities, two breakable armor cores and readable phase transformations.
const BOSS_PROFILES = Object.freeze({
  4: { name:'Guardião das Cinzas', color:'#ffb36d', attacks:['Rajada de brasas','Leque incandescente','Explosão de cinzas'], feature:'Minas de brasa' },
  8: { name:'Rainha das Raízes', color:'#b6e1a0', attacks:['Sementes espinhosas','Vinhas em expansão','Esporos ancestrais'], feature:'Espinhos que cercam o piloto' },
  12:{ name:'Colosso de Cristal', color:'#d9c6ff', attacks:['Lanças prismáticas','Refração cortante','Estilhaços cruzados'], feature:'Estilhaços diagonais' },
  16:{ name:'Dragão Ancestral do Gelo', color:'#a5e9ff', attacks:['Sopro glacial','Nevasca concentrada','Lanças congelantes'], feature:'Projéteis gelados' },
  20:{ name:'Senhor das Chamas', color:'#ff9675', attacks:['Bombas de lava','Erupção vulcânica','Coroa de fogo'], feature:'Lava em trajetórias curvas' },
  24:{ name:'Senhor do Eclipse', color:'#e0a5e5', attacks:['Sombras errantes','Ecos do vazio','Convergência do eclipse'], feature:'Sombras cruzadas' }
});
function bossPhase(e) { return e.hp / e.max < .33 ? 2 : e.hp / e.max < .66 ? 1 : 0; }
function ensureBossArmor(e) {
  if (e.kind !== 'boss' || e.dead) return;
  if (!Array.isArray(e.parts)) {
    const life = Math.max(3, Math.ceil(e.max * .13));
    e.parts = [{id:'upper', hp:life, max:life, offsetY:-21, broken:false},
               {id:'lower', hp:life, max:life, offsetY: 21, broken:false}];
  }
  // Old saves from v0.7.7 enter with the same boss HP and receive intact armor.
  e.phase ??= bossPhase(e);
  e.wave ??= 0;
}
function startBossTransform(e,previousPhase) {
  const next = bossPhase(e);
  if (next <= previousPhase || e.dead) return;
  e.phase = next;
  e.state = 'transform';
  e.transformLeft = .9;
  e.telegraphLeft = 0;
  e.cool = 1.05;
  burst(e.x, e.y, BOSS_PROFILES[level.id]?.color || '#fff1cc', 26);
  note(180 + next * 100, .22, 'triangle', .035, 0, 650);
}
function transformingBoss(e,dt) {
  if (e.state !== 'transform') return false;
  e.transformLeft = Math.max(0, (e.transformLeft || 0) - dt);
  if (e.transformLeft === 0) { e.state = 'idle'; e.cool = .75; }
  return true;
}
function strikeBossArmor(e,part,dmg) {
  if (!part || part.broken || e.dead) return false;
  ensureBossArmor(e);
  const before = bossPhase(e);
  part.hp = Math.max(0,part.hp-dmg);
  burst(e.x-17,e.y+part.offsetY,BOSS_PROFILES[level.id]?.color || '#ffddb8',5);
  if (part.hp <= 0) {
    part.broken = true;
    const prize = Math.max(1,Math.ceil(e.max * .075));
    e.hp -= prize;
    run.p.fury = Math.min(100,run.p.fury+9);
    burst(e.x-17,e.y+part.offsetY,'#fff0c7',26);
    note(310,.16,'triangle',.04,0,770);
    if(e.hp <= 0) strike(e,Math.max(1,-e.hp+1));
    else startBossTransform(e,before);
  }
  return true;
}
function livingBossArmor(e) { return (e.parts || []).filter(part=>!part.broken).length; }
function addBossBullet(e,vx,vy,offsetY=0,kind='special') {
  if(run.bullets.length>=90) return;
  run.bullets.push({x:e.x-15,y:bound(e.y+offsetY,19,203),vx,vy,kind});
}
// Extra attacks only fire after the telegraph; each realm has a separate pattern.
function realmBossVolley(e,phase,speed,aimY) {
  const armor = livingBossArmor(e);
  const wave = e.wave || 0;
  if (run.bullets.length > 82) return;
  switch (level.id) {
    case 4: // Cinders travel slower and leave open corridors for dodging.
      if (phase > 0) for(const dy of [-27,27].slice(0,armor)) addBossBullet(e,-speed*.56,0,dy,'ember');
      break;
    case 8: // Roots close in from both sides without targeting a moving player after warning.
      for(const sign of [-1,1].slice(0,1+(armor>0))) addBossBullet(e,-speed*.71,sign*24,sign*12,'thorn');
      break;
    case 12: // Refracted crystal shards cross after the main salvo.
      for(const sign of [-1,1]) addBossBullet(e,-speed*(.7+.08*phase),sign*(20+phase*5),sign*22,'crystal');
      break;
    case 16: // Frozen projectiles drain a little energy when they actually hit.
      for(const offset of [0,phase>0?20:-20].slice(0,armor||1)) addBossBullet(e,-speed*.82,0,offset,'frost');
      break;
    case 20: // Lava rises and falls; phase three adds a third curved fireball.
      for(let i=0;i<(armor>0&&phase===2?3:2);i++) addBossBullet(e,-speed*(.62+i*.08),(i%2?30:-30),i*14-14,'lava');
      break;
    case 24: // Shadow crossfire: two converging projectiles from different heights.
      for(const sign of [-1,1]) addBossBullet(e,-speed*(.75+.08*phase),-sign*(22+phase*5),sign*26,'shadow');
      break;
  }
}
function strike(e, dmg) {
  if (e.dead || ['filhote', 'ovo', 'raio', 'rota', 'passagem', 'tesouro'].includes(e.kind)) return;
  const dealt = e.kind === 'boss' && e.state === 'recover' ? dmg * (level.id === 4 ? 1.4 : 1.2) : dmg;
  if (isTraining()) {
    run.training.damage += Math.min(Math.max(0, e.hp), dealt);
    run.training.damageStarted ??= run.t;
  }
  const previousPhase = e.kind === 'boss' ? bossPhase(e) : -1;
  e.hp -= dealt;
  burst(e.x - 3, e.y, "#ffd39a", 3);
  if (e.hp > 0) { if(e.kind === 'boss') startBossTransform(e,previousPhase); return; }
  if (e.kind === 'selo') {
    e.kind = 'passagem'; e.hp = 1;
    explorationNotice('Selo rompido · Encoste no arco verde antes que a passagem se feche.');
    burst(e.x, e.y, '#9ef5d4', 25); checkpoint(); return;
  }
  if (isTraining() && e.kind === 'alvo') {
    e.dead = true; run.kills++; run.training.respawn[e.slot] = run.t + 1;
    burst(e.x, e.y, '#bce8ce', 14); return;
  }
  if (e.kind === "jaula") {
    e.kind = "filhote";
    e.hp = 1;
    burst(e.x, e.y, "#98d6ad");
    return;
  }
  e.dead = true;
  if (hostile(e)) {
    run.kills++;
    run.loot += e.kind === "boss" ? 6 : 1;
    run.p.fury = Math.min(100, run.p.fury + 9);
    if (e.kind === "boss") run.wonBoss = true;
  }
  burst(e.x, e.y, "#f5a078");
  note(138, 0.08, "triangle", 0.018, 0, 55);
}
function enemyFireAt(e, targetX, targetY, n = 1, spread = 0.2, velocity = 75) {
  const a = Math.atan2(targetY - e.y, targetX - e.x);
  for (let i = 0; i < n; i++) {
    let angle = a + (i - (n - 1) / 2) * spread;
    run.bullets.push({ x: e.x - 8, y: e.y, vx: Math.cos(angle) * velocity, vy: Math.sin(angle) * velocity });
  }
  note(180, 0.06, "sine", 0.02);
}
function enemyFire(e, n = 1, spread = 0.2, velocity = 75) {
  enemyFireAt(e, run.p.x, run.p.y, n, spread, velocity);
}
function ashGuardianAct(e, dt) {
  ensureBossArmor(e);
  if (transformingBoss(e,dt)) return;
  e.state ??= "idle";
  e.cool ??= 1.15;
  e.x = Math.max(379, e.x - dt * 45);
  e.phase = e.hp / e.max < 0.33 ? 2 : e.hp / e.max < 0.66 ? 1 : 0;
  e.y = 105 + Math.sin(e.age * 0.72) * 36;

  if (e.state === "warning") {
    e.telegraphLeft = Math.max(0, (e.telegraphLeft || 0) - dt);
    if (e.telegraphLeft <= 0) {
      const speed = save.difficulty === "Difícil" ? 124 : save.difficulty === "Fácil" ? 82 : 108;
      if (e.pattern === "lane") {
        for (const offset of [-10, 0, 10]) run.bullets.push({ x: e.x - 15, y: e.aimY + offset, vx: -speed, vy: 0 });
        note(155, 0.2, "sawtooth", 0.045, 0, 62);
      } else if (e.pattern === "fan") {
        enemyFireAt(e, e.aimX, e.aimY, 5, 0.27, speed - 5);
      } else {
        enemyFireAt(e, e.aimX, e.aimY, 7, 0.19, speed + 5);
      }
      realmBossVolley(e,e.phase,speed,e.aimY);
      e.state = "recover";
      e.recover = 1.15;
      e.telegraphLeft = 0;
    }
    return;
  }

  if (e.state === "recover") {
    e.recover = Math.max(0, (e.recover || 0) - dt);
    if (e.recover <= 0) {
      e.state = "idle";
      const rest = e.phase === 2 ? 1.25 : 1.55;
      e.cool = save.difficulty === "Fácil" ? rest + 0.3 : save.difficulty === "Difícil" ? Math.max(0.8, rest - 0.26) : Math.max(1, rest - 0.15);
    }
    return;
  }

  e.cool -= dt;
  if (e.cool <= 0 && e.x <= 401) {
    e.pattern = ["lane", "fan", "burst"][e.phase];
    e.aimY = bound(run.p.y, 26, 198);
    e.aimX = Math.min(run.p.x, e.x - 40);
    const warning = e.phase === 2 ? 0.82 : 1.02;
    e.telegraphLeft = save.difficulty === "Fácil" ? warning + 0.22 : save.difficulty === "Difícil" ? Math.max(0.58, warning - 0.23) : Math.max(0.7, warning - 0.1);
    e.state = "warning";
    e.wave++;
    note(e.phase === 2 ? 205 : 170, 0.18, "triangle", 0.045, 0, e.phase === 2 ? 510 : 330);
  }
}
// All six bosses share a readable, checkpoint-safe warning -> volley -> recovery cycle.
// Their projectile patterns and summons still differ by realm.
function bossAct(e, dt) {
  ensureBossArmor(e);
  if (level.id === 4) { ashGuardianAct(e, dt); return; }
  if (transformingBoss(e,dt)) return;
  const region = level.region;
  e.x = Math.max(379, e.x - dt * 45);
  e.phase = e.hp / e.max < 0.33 ? 2 : e.hp / e.max < 0.66 ? 1 : 0;
  e.y = 105 + Math.sin(e.age * (0.7 + region * 0.07)) * 48;
  e.state ??= 'idle';
  if (e.state === 'warning') {
    e.telegraphLeft = Math.max(0, (e.telegraphLeft || 0) - dt);
    if (e.telegraphLeft > 0) return;
    const phase = e.phase;
    const speed = (save.difficulty === 'Difícil' ? 116 : save.difficulty === 'Fácil' ? 78 : 96) + region * 3;
    // A fixed aim point lets the player react instead of being tracked after dodging.
    const aimX = e.aimX ?? run.p.x, aimY = e.aimY ?? run.p.y;
    if (e.pattern === 'lane') {
      // Parallel projectiles match the bright horizontal warning line.
      const count = Math.max(3,(phase === 2 ? 5 : 3) - (2 - livingBossArmor(e)));
      for (let i = 0; i < count; i++) run.bullets.push({
        x: e.x - 15, y: bound(aimY + (i - (count - 1) / 2) * 9, 18, 205),
        vx: -speed, vy: 0
      });
    } else if (e.pattern === 'burst') {
      enemyFireAt(e, aimX, aimY, phase === 2 ? 7 : 5, phase === 2 ? .25 : .3, speed);
    } else {
      const shotCount = [3, 4, 5][phase] + (region === 5 ? 2 : 0);
      enemyFireAt(e, aimX, aimY, shotCount, region === 1 ? .31 : .22, speed);
    }
    realmBossVolley(e,phase,speed,aimY);
    // Region-specific reinforcements make each boss distinct.
    if (region === 1 && e.wave % 2 === 0 && livingBossArmor(e) > 0) run.entities.push(entity('batedor', bound(e.y + 20, 22, 202), -e.wave));
    if (region === 4 && e.wave % 2 === 0) run.entities.push(entity('raio', aimY, -e.wave));
    if (region === 5 && livingBossArmor(e) > 0) {
      if (phase > 0 && e.wave % 3 === 0) run.entities.push(entity('raio', aimY, -e.wave));
      if (phase === 2 && e.wave % 2 === 0) run.entities.push(entity('arqueiro', bound(e.y + 15, 22, 202), -e.wave));
    }
    e.state = 'recover';
    e.recover = save.difficulty === 'Difícil' ? .25 : .38;
    e.telegraphLeft = 0;
    return;
  }
  if (e.state === 'recover') {
    e.recover = Math.max(0, (e.recover || 0) - dt);
    if (e.recover > 0) return;
    e.state = 'idle';
    // Preserve the Normal challenge while adding a fair reaction window.
    e.cool = (save.difficulty === 'Fácil' ? 2.25 : save.difficulty === 'Difícil' ? 1.15 : 1.5) - e.phase * .14;
    return;
  }
  e.cool -= dt;
  if (e.cool > 0 || e.x > 401) return;
  e.state = 'warning';
  e.pattern = e.phase === 2 ? 'lane' : e.phase === 1 ? 'burst' : 'fan';
  e.aimX = Math.min(run.p.x, e.x - 40);
  e.aimY = bound(run.p.y, 26, 198);
  e.telegraphLeft = (save.difficulty === 'Fácil' ? .98 : save.difficulty === 'Difícil' ? .58 : .74) - e.phase * .045;
  e.wave = (e.wave || 0) + 1;
  note(170 + e.phase * 32, .14, 'triangle', .036, 0, 370);
}
// v0.7.7 - deterministic, serializable enemy tactics, compatible with old checkpoints.
// No timers outside the game loop and no per-enemy DOM operations.
const ENEMY_TYPES = new Set(['batedor', 'arqueiro', 'bruto', 'sentinela']);
function enemyTactic(e, dt) {
  if (!ENEMY_TYPES.has(e.kind)) return;
  const kind = e.kind, p = run.p, difficulty = encounterDifficulty();
  const serial = Number.isFinite(+e.serial) ? Math.abs(+e.serial) : 0;
  const wing = serial % 3 - 1;
  // Restore checkpoints made before tactics were implemented without changing the save format.
  const ai = e.ai ??= {
    state: 'approach', think: 0, aimY: e.base, aimX: p.x, targetY: e.base,
    dodge: 0, dodgeDir: 1, windup: 0, charge: 0, recover: 0
  };
  ai.think -= dt;
  if (ai.think <= 0) {
    ai.think = 0.17 + serial % 4 * 0.035; // stagger target acquisition across enemies
    const offset = wing * (kind === 'sentinela' ? 21 : 28);
    // Formation lanes follow the player with bounded tracking: no instantaneous teleport.
    ai.targetY = bound(p.y * 0.65 + e.base * 0.35 + offset, 27, 197);
    if (kind === 'batedor' && ai.dodge <= 0 && (run.shots || []).some(shot =>
      shot.x < e.x && e.x - shot.x < 92 && Math.abs(shot.y - e.y) < 16)) {
      ai.dodge = .44;
      ai.dodgeDir = e.y >= p.y ? 1 : -1;
    }
  }
  let speed = (kind === 'bruto' ? 34 : kind === 'sentinela' ? 20 : 46) + level.region * 2;
  speed *= difficulty.movement;
  if (hasFlightCompanion('Glacial')) speed *= .79;
  let altitude = ai.targetY;
  if (kind === 'batedor') {
    ai.dodge = Math.max(0, ai.dodge - dt);
    if (ai.dodge > 0) altitude = bound(altitude + ai.dodgeDir * 35, 23, 204);
    // Scouts are fast at changing altitude and remain vulnerable to timing.
    altitude += Math.sin(e.age * 2.4 + serial * .7) * 8;
    e.y = bound(e.y + bound(altitude - e.y, -60 * dt, 60 * dt), 21, 204);
  } else if (kind === 'bruto') {
    if (ai.state === 'windup') {
      ai.windup = Math.max(0, ai.windup - dt);
      if (ai.windup === 0) { ai.state = 'charge'; ai.charge = .58; }
    } else if (ai.state === 'charge') {
      speed *= 2.5;
      ai.charge = Math.max(0, ai.charge - dt);
      if (ai.charge === 0) { ai.state = 'recover'; ai.recover = .55; e.cool = 2.8; }
    } else if (ai.state === 'recover') {
      ai.recover = Math.max(0, ai.recover - dt);
      if (ai.recover === 0) ai.state = 'approach';
    } else {
      e.cool -= dt;
      if (e.x < 402 && e.x > p.x + 65 && e.cool <= 0 && Math.abs(p.y - e.y) < 75) {
        ai.state = 'windup'; ai.windup = save.difficulty === 'Fácil' ? .85 : save.difficulty === 'Difícil' ? .49 : .66;
        ai.aimY = bound(p.y, 25, 200); ai.aimX = p.x;
      }
    }
    if (ai.state === 'windup' || ai.state === 'charge') altitude = ai.aimY; // commit to the warned lane
    e.y = bound(e.y + bound(altitude - e.y, -26 * dt, 26 * dt), 21, 204);
  } else {
    // Archers and sentinels hold lanes to give the player time to see their next attack.
    const turn = kind === 'arqueiro' ? 29 : 21;
    if (ai.state === 'windup') {
      ai.windup = Math.max(0, ai.windup - dt);
      if (ai.windup === 0) {
        // Aim is locked at the start of the visual warning; a dodge can avoid it.
        if (run.bullets.length < 100) {
          enemyFireAt(e, ai.aimX, ai.aimY, kind === 'sentinela' ? 3 : 1,
            kind === 'sentinela' ? .25 : .18, (58 + level.region * 4) * difficulty.shots);
        }
        ai.state = 'recover'; ai.recover = .28;
        e.cool = kind === 'sentinela' ? difficulty.volleyCooldown + .5 : difficulty.volleyCooldown;
      }
    } else if (ai.state === 'recover') {
      ai.recover = Math.max(0, ai.recover - dt);
      if (ai.recover === 0) ai.state = 'approach';
    } else {
      e.cool -= dt;
      if (e.x < 446 && e.cool <= 0) {
        ai.state = 'windup';
        ai.windup = save.difficulty === 'Fácil' ? .85 : save.difficulty === 'Difícil' ? .47 : .63;
        ai.aimY = bound(p.y, 22, 202); ai.aimX = p.x;
      }
    }
    if (ai.state === 'windup') altitude = ai.aimY;
    e.y = bound(e.y + bound(altitude - e.y, -turn * dt, turn * dt), 21, 204);
  }
  // Enemy flight keeps advancing: no stationary, unkillable accumulation at the right edge.
  e.x -= dt * speed;
}
function update(dt) {
  const p = run.p;
  run.t += dt;
  for (const key of ["inv", "dash", "cool", "fire", "power"]) p[key] = Math.max(0, p[key] - dt);
  const stats = flightStats();
  p.energy = Math.min(stats.energyMax, p.energy + dt * stats.energyRegen);
  if (stats.shieldMax && p.shield < stats.shieldMax) {
    p.shieldClock += dt;
    while (p.shield < stats.shieldMax && p.shieldClock >= stats.shieldDelay) { p.shield++; p.shieldClock -= stats.shieldDelay; }
    if (p.shield === stats.shieldMax) p.shieldClock = 0;
  }
  p.fury = Math.min(100, p.fury + dt * (stats.furyRegen ?? .8));
  const axis = (a, b, c, d) => Number(keys.has(a) || keys.has(b)) - Number(keys.has(c) || keys.has(d));
  let dx = axis("ArrowRight", "KeyD", "ArrowLeft", "KeyA"), dy = axis("ArrowDown", "KeyS", "ArrowUp", "KeyW");
  let l = Math.max(1, Math.hypot(dx, dy)), speed = stats.speed;
  if ((keys.has("ShiftLeft") || keys.has("ShiftRight")) && !p.cool) {
    p.dash = 0.31;
    p.inv = Math.max(p.inv, 0.38);
    p.cool = stats.dashCooldown;
    note(350, 0.13, "triangle", 0.05, 0, 850);
    if (!dx && !dy) p.dashForward = true;
    else p.dashForward = false;
  }
  if (p.dash > 0) {
    speed *= 2.5;
    if (p.dashForward && !dx && !dy) dx = 1;
    burst(p.x - 9, p.y, "#dbbe88", 1);
  }
  p.x = bound(p.x + dx / l * dt * speed, 18, 461);
  p.y = bound(p.y + dy / l * dt * speed + (level.id === 13 ? Math.sin(run.t * 1.3) * dt * 12 : 0), 22, 208);
  explorationTick();
  if (isTraining()) trainingTick();
  if (keys.has("Space") && !p.fire) {
    p.fire = 0.22;
    run.shots.push({ x: p.x + 13, y: p.y, v: 244, vy: 0, d: stats.primary });
    if (flightUpgrades().atk >= 3) run.shots.push({ x: p.x + 10, y: p.y - 4, v: 240, vy: -9, d: stats.secondary });
    note(290, 0.065, "triangle", 0.026, 0, 108);
  }
  if (keys.has("KeyE") && (save.medals[4] || isTraining()) && p.energy >= 28 && !p.power) {
    p.energy -= 28;
    p.power = 0.7;
    for (let i = -1; i < 2; i++) run.shots.push({ x: p.x + 14, y: p.y, v: 210, vy: i * 35, d: stats.elemental, special: true });
    note(420, 0.2, "sawtooth", 0.035, 0, 80);
  }
  if (keys.has("KeyF") && p.fury >= 99.9) {
    p.fury = 0;
    for (const e of run.entities) if (hostile(e)) strike(e, stats.fury);
    run.bullets = [];
    burst(p.x, p.y, "#fff0a8", 40);
    chime();
  }
  let beat = Math.floor(run.t / 5);
  if (beat !== run.beat) {
    run.beat = beat;
    if (beat && hasFlightCompanion('Verde') && beat % 3 === 0) p.hp = Math.min(stats.hp, p.hp + 1);
    if (beat && beat % 6 === 0 && hasFlightRelic('8')) p.hp = Math.min(stats.hp, p.hp + 1);
    if (beat) for (const name of flightTeam()) if (['Tempestade', 'Sombrio'].includes(name)) {
      for (const e of run.entities.filter(e => !e.dead && hostile(e)).slice(0, 2)) strike(e, name === 'Sombrio' ? 3 : 2);
    }
  }
  while (run.event < level.events.length && level.events[run.event][0] <= run.t) {
    let idx = run.event, [, k, y, route, reward] = level.events[run.event++];
    if (route && explorationState()?.route !== route) continue;
    run.entities.push({ ...entity(k, y, idx), reward });
  }
  if (level.boss && !run.bossSent && run.t >= level.duration) {
    run.bossSent = true;
    run.entities.push(entity("boss", 92, 999));
  }
  for (const e of run.entities) {
    if (e.dead) continue;
    e.age += dt;
    let kind = e.kind;
    if (['rota', 'selo', 'passagem'].includes(kind)) {
      if (run.t >= e.expires) { e.dead = true; continue; }
      if (Math.abs(e.x - p.x) < 23 && Math.abs(e.y - p.y) < 18) {
        if (kind === 'rota') chooseRoute(e.route);
        if (kind === 'passagem') chooseRoute('secret');
      }
      continue;
    }
    if (kind === 'alvo') {
      e.y = run.training.drill === 'moving' ? 113 + Math.sin(run.t * 1.35 * (hasFlightCompanion('Glacial') ? .79 : 1)) * 64 : e.base;
      continue;
    }
    if (kind === "boss") bossAct(e, dt);
    else if (kind === "raio") {
      if (e.age > 2.2) e.dead = true;
      else if (e.age >= 1.8 && Math.abs(e.y - p.y) < 8) hurt();
    } else {
      if (ENEMY_TYPES.has(kind)) {
        enemyTactic(e, dt);
      } else {
        // Mission props, traps and prisoners retain their original trajectories.
        const v = kind === 'filhote' ? 26 : 38;
        e.x -= dt * v;
      }
    }
    if (mode !== "flight") return;
    if (kind === "raio") continue;
    let big = kind === "boss", distX = Math.abs(e.x - p.x), distY = Math.abs(e.y - p.y);
    if (distX < (big ? 29 : kind === "ovo" || kind === "filhote" ? 20 : 12) && distY < (big ? 17 : kind === "barreira" ? 20 : 13)) {
      if (kind === 'tesouro') collectTreasure(e);
      else if (kind === "ovo" || kind === "filhote") awardItem(e);
      else hurt();
    }
    if (mode !== "flight") return;
    if (e.x < -35) e.dead = true;
  }
  for (const s of run.shots) {
    s.x += s.v * dt;
    s.y += s.vy * dt;
    for (const e of run.entities) {
      if (e.dead || ["raio", "ovo", "filhote", "rota", "passagem", "tesouro"].includes(e.kind)) continue;
      if (e.kind === 'boss') {
        ensureBossArmor(e);
        const weakspot = e.parts.find(part=>!part.broken &&
          Math.abs((e.x-17)-s.x)<12 && Math.abs((e.y+part.offsetY)-s.y)<11);
        if (weakspot) { strikeBossArmor(e,weakspot,s.d); s.dead=true; break; }
      }
      if (Math.abs(e.x - s.x) < (e.kind === "boss" ? 31 : 12) && Math.abs(e.y - s.y) < (e.kind === "boss" ? 19 : e.kind === "barreira" ? 23 : 9)) {
        strike(e, s.d);
        s.dead = true;
        break;
      }
    }
  }
  for (const b of run.bullets) {
    b.x += b.vx * dt;
    b.y += b.vy * dt;
    if (Math.hypot(b.x - p.x, b.y - p.y) < 7) {
      b.dead = true;
      if (isTraining() && b.training && p.dash > 0) {
        run.training.dodges++; run.training.note = 'Esquiva bem cronometrada!'; run.training.noteUntil = run.t + 2;
      }
      const vulnerable = p.inv <= 0 && p.dash <= 0;
      hurt();
      if (vulnerable && b.kind === 'frost') p.energy = Math.max(0,p.energy-9);
      if (mode !== "flight") return;
    }
  }
  run.shots = run.shots.filter((s) => !s.dead && s.x < 490);
  run.entities = run.entities.filter((e) => !e.dead);
  run.bullets = run.bullets.filter((b) => !b.dead && b.x > 0 && b.x < 490 && b.y > 0 && b.y < 224);
  if (!isTraining() && (level.boss ? run.wonBoss : run.t > level.duration + 5)) {
    endFlight(true);
    return;
  }
  if (Math.floor((run.t - dt) / 8) !== Math.floor(run.t / 8)) checkpoint();
}
function missionTip() {
  if (isTraining()) return trainingTip();
  if (level.exploration) {
    const x = explorationState(), { choice, secret } = level.exploration;
    if (run.t < x.noticeUntil) return x.notice;
    if (run.t >= choice.opens - 5 && run.t < choice.opens) return 'A ponte se divide adiante · Prepare-se para escolher uma rota.';
    if (!x.route && run.t >= choice.opens && run.t < choice.closes) return 'Toque num arco: AZUL acima = ruínas · ÂMBAR abaixo = desfiladeiro · Centro = ponte.';
    const entrance = run.entities.find(e => !e.dead && ['selo', 'passagem'].includes(e.kind));
    if (entrance?.kind === 'selo') return 'Selo rachado · Atire pela esquerda e atravesse o arco verde. ' + Math.ceil(secret.closes - run.t) + ' s';
    if (entrance?.kind === 'passagem') return 'Entrada aberta · Encoste no arco verde para entrar na Câmara dos Ecos!';
    if (run.t >= secret.opens - 5 && run.t < secret.opens) return 'Marcas antigas na rocha · Há uma entrada escondida adiante.';
    if (run.t >= 90) return 'Travessia final · As rotas se encontram. Resgate o ovo e liberte a última jaula.';
    if (x.route === 'secret') return 'Câmara dos Ecos · Procure a relíquia verde e desvie dos guardiões.';
    if (x.route === 'upper') return 'Ruínas superiores · Arqueiros guardam o tesouro azul.';
    if (x.route === 'lower') return 'Desfiladeiro âmbar · Brutos protegem o tesouro dourado.';
  }
  if (level.id === 4) {
    const boss = run.entities.find(e => e.kind === "boss" && !e.dead);
    if (boss?.state === 'transform') return 'O Guardião evoluiu! Ataque os pontos brilhantes nas asas para quebrar a armadura.';
    if (boss?.state === "warning") {
      if (boss.pattern === "lane") return "Guardião prepara a rajada linear · Suba ou desça para sair da faixa iluminada.";
      if (boss.pattern === "fan") return "Guardião prepara o leque de cinzas · Mude de altitude e use a esquiva.";
      if (boss.pattern === "burst") return "Núcleo em sobrecarga · Desvie na diagonal entre as brasas.";
    }
    if (boss?.state === "recover") return "Guardião exposto · Ataque agora para causar dano ampliado!";
    if (boss?.phase === 1) return "Segunda etapa · O guardião abriu as asas e ampliou o leque.";
    if (boss?.phase === 2) return "Última etapa · A explosão de brasas é mais rápida.";
    if (run.bossSent) return "Guardião das Cinzas · Observe a preparação antes de cada ataque.";
  }
  if (level.boss && run.bossSent && level.id !== 4) {
    const boss = run.entities.find(e => e.kind === 'boss' && !e.dead);
    if (boss?.state === 'transform') return 'TRANSFORMAÇÃO · O chefe está mudando de forma! Prepare sua defesa.';
    if (boss?.state === 'warning') return (BOSS_PROFILES[level.id]?.attacks[boss.phase] || 'Ataque especial') + ' · Mire nos dois pontos brilhantes da armadura para enfraquecê-lo!';
    if (boss?.state === 'recover') return 'Chefão exposto · Aproveite para atacar enquanto ele recupera o fôlego.';
    if (boss) return 'ETAPA ' + ((boss.phase ?? 0) + 1) + '/3 · Reaja ao aviso luminoso e use sua Fúria no momento certo.';
  }
  if(level.id===2){
    const rescue=run.entities.find(e=>!e.dead && (e.kind==='jaula'||e.kind==='filhote'));
    if(rescue?.kind==='jaula')return 'Jaula à vista · Mire na altura do filhote e dispare.';
    if(rescue?.kind==='filhote')return 'Jaula aberta · Encoste no filhote verde!';
    if(run.babies.length && run.t<(run.rescueTime??-10)+3)return 'Filhote a salvo no ninho!';
    if(run.t>=9 && run.t<13)return 'Sinal à frente · Uma jaula se aproxima pelo alto.';
  }
  return run.t<5.5 ? level.hint : '';
}
function draw() {
  if (!run || !level) return;
  flightView.update(level,run,save,particles);
  window.drawFlightEffects?.(run,level,particles,game);
  setHud();
  const tip=document.querySelector('#flightTip'), text=missionTip();
  if(tip.textContent!==text)tip.textContent=text;
  const boss=run.entities.find(e=>e.kind==='boss'&&!e.dead);
  tip.classList.toggle('boss-recover',!!boss&&boss.state==='recover');
  const warningSignal = document.querySelector('#bossSignal');
  if (warningSignal) {
    const warning = !!boss && boss.state === 'warning';
    warningSignal.hidden = !warning;
    if (warning) {
      warningSignal.className = 'boss-signal ' + (boss.pattern || 'fan');
      const aspect = game.clientHeight ? game.clientWidth / game.clientHeight : 480 / 222;
      const viewHeight = Math.max(222, 480 / aspect);
      const targetY = boss.pattern === 'lane' ? boss.aimY : boss.y;
      warningSignal.style.top = (50 + (targetY - 111) / viewHeight * 100) + '%';
      warningSignal.style.left = (boss.pattern === 'lane' ? 9 : boss.x / 480 * 100) + '%';
      warningSignal.style.right = boss.pattern === 'lane' ? '14%' : 'auto';
      warningSignal.style.width = boss.pattern === 'lane' ? 'auto' : boss.pattern === 'fan' ? '160px' : '112px';
    }
  }
  const bossHealth = document.querySelector('#bossHealth');
  if (bossHealth) {
    bossHealth.hidden = !boss;
    if (boss) {
      const names = {4:'Guardião das Cinzas',8:'Rainha das Raízes',12:'Colosso de Cristal',16:'Dragão Ancestral do Gelo',20:'Senhor das Chamas',24:'Senhor do Eclipse'};
      const ratio = bound(boss.hp / boss.max, 0, 1);
      const percent = Math.round(ratio * 100);
      const profile = BOSS_PROFILES[level.id];
      const status = boss.state === 'transform' ? 'TRANSFORMAÇÃO!' : boss.state === 'warning' ? profile?.attacks[boss.phase] || 'PREPARE A ESQUIVA' : boss.state === 'recover' ? 'ABERTURA PARA ATACAR' : 'CONFRONTO';
      document.querySelector('#bossHealthName').textContent = names[level.id] || 'Chefe';
      document.querySelector('#bossHealthStage').textContent = 'ETAPA ' + ((boss.phase ?? 0) + 1) + '/3 · ' + status + ' · ARMADURA ' + livingBossArmor(boss) + '/2';
      document.querySelector('#bossHealthFill').style.width = percent + '%';
      bossHealth.setAttribute('aria-label', (names[level.id] || 'Chefe') + ', etapa ' + ((boss.phase ?? 0) + 1) + ', ' + percent + '% de vida');
      bossHealth.classList.toggle('warning', boss.state === 'warning');
      bossHealth.classList.toggle('recover', boss.state === 'recover');
      bossHealth.classList.toggle('transform', boss.state === 'transform');
    }
  }
  const progress=document.querySelector('#routeProgress');
  progress.value=boss ? Math.round(100*boss.hp/boss.max) : Math.min(100,Math.round(100*run.t/(level.duration+(level.boss?0:5))));
  const exp = explorationState();
  document.querySelector('#routeName').textContent=boss ? (level.id===24?'Senhor do Eclipse · Etapa '+(boss.phase+1):level.id===4?'Guardião das Cinzas · Etapa '+(boss.phase+1):level.name+' · Etapa '+(boss.phase+1)) : (exp ? (run.t >= 90 ? 'Travessia final' : level.exploration.names[exp.route] || 'Ponte dos Esquecidos') : 'Percurso') + ' · '+progress.value+'%';
  drawExploration();
  drawTraining();
}
function drawExploration() {
  const host = document.querySelector('#explorationMarkers');
  if (!host) return;
  if (!level.exploration) { host.hidden = true; return; }
  host.hidden = false;
  const aspect = game.clientHeight ? game.clientWidth / game.clientHeight : 480 / 222;
  const width = Math.max(480, 222 * aspect), height = Math.max(222, 480 / aspect);
  // Labels share the orthographic camera's projection on desktop and mobile.
  const markup = run.entities.filter(e => !e.dead && ['rota', 'selo', 'passagem', 'tesouro'].includes(e.kind)).map(e => {
    const text = e.kind === 'rota' ? level.exploration.names[e.route] : e.kind === 'selo' ? 'SELO · ' + Math.ceil(e.hp) + '/8' : e.kind === 'passagem' ? 'ENTRAR · CÂMARA DOS ECOS' : level.exploration.rewards[e.reward].name;
    const labelY = e.y + (game.clientWidth < 620 && e.y < 100 ? 35 : -21);
    return '<span class="explore-marker ' + (e.route || e.kind) + '" style="left:' + (50 + (e.x - 240) / width * 100) + '%;top:' + (50 + (labelY - 111) / height * 100) + '%">' + text + '</span>';
  }).join('');
  if (host.innerHTML !== markup) host.innerHTML = markup;
}
function loop(now) {
  if (mode !== "flight") return;
  const dt = Math.max(0, Math.min(.18, (now - stamp) / 1000));
  stamp = now;
  const steps=Math.max(1,Math.ceil(dt/.025));
  for(let i=0;i<steps && mode==='flight';i++)update(dt/steps);
  if (mode !== "flight") return;
  for (const a of particles) {
    a.life -= dt;
    a.x += a.vx * dt;
    a.y += a.vy * dt;
  }
  particles = particles.filter((a) => a.life > 0);
  draw();
  raf = requestAnimationFrame(loop);
}
function animate() {
  cancelAnimationFrame(raf);
  stamp = performance.now();
  raf = requestAnimationFrame(loop);
}
