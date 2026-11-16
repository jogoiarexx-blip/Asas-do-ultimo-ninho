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
function initializeFlightBuild() {
  run.upgrades ??= normalizeUpgrades(save.up);
  run.stats ??= dragonStats(run.upgrades, flightTeam());
  run.p.shield ??= run.stats.shieldMax; run.p.shieldClock ??= 0; run.blocks ??= 0;
}
function freshRun() {
  const companions = [...activeCompanions()], upgrades = normalizeUpgrades(save.up), stats = dragonStats(upgrades, companions);
  return { companions, upgrades, stats, t: 0, event: 0, p: { x: 85, y: 111, hp: stats.hp, inv: 1, dash: 0, cool: 0, fire: 0, energy: stats.energyMax, fury: 0, power: 0, shield: stats.shieldMax, shieldClock: 0 }, entities: [], bullets: [], shots: [], kills: 0, hits: 0, blocks: 0, loot: 0, bossSent: false, wonBoss: false, eggs: [], babies: [], beat: -1, ancient: !!save.medals[24] };
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
function strike(e, dmg) {
  if (e.dead || ['filhote', 'ovo', 'raio', 'rota', 'passagem', 'tesouro'].includes(e.kind)) return;
  const dealt = e.kind === 'boss' && level.id === 4 && e.state === 'recover' ? dmg * 1.4 : dmg;
  if (isTraining()) {
    run.training.damage += Math.min(Math.max(0, e.hp), dealt);
    run.training.damageStarted ??= run.t;
  }
  e.hp -= dealt;
  burst(e.x - 3, e.y, "#ffd39a", 3);
  if (e.hp > 0) return;
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
function bossAct(e, dt) {
  if (level.id === 4) {
    ashGuardianAct(e, dt);
    return;
  }
  e.x = Math.max(379, e.x - dt * 45);
  let reg = level.region, phase = e.hp / e.max < 0.33 ? 2 : e.hp / e.max < 0.66 ? 1 : 0;
  e.phase = phase; // Used by the boss HUD, save and difficulty tests.
  e.y = 105 + Math.sin(e.age * (0.7 + reg * 0.07)) * 48;
  e.cool -= dt;
  if (e.cool > 0 || e.x > 401) return;
  e.wave++;
  let speed = (save.difficulty === "Difícil" ? 116 : save.difficulty === "Fácil" ? 78 : 96) + reg * 3;
  switch (reg) {
    case 0:
      enemyFire(e, 3 + phase, 0.24, speed);
      break;
    case 1:
      enemyFire(e, 2 + phase, 0.33, speed);
      if (e.wave % 2 === 0) run.entities.push(entity("batedor", e.y + 20, -e.wave));
      break;
    case 2:
      enemyFire(e, 5, 0.21, speed - 12);
      break;
    case 3:
      enemyFire(e, phase === 0 ? 3 : 5, 0.32, speed + 12);
      break;
    case 4:
      enemyFire(e, 2, 0.5, speed);
      if (e.wave % 2 === 0) run.entities.push(entity("raio", run.p.y, -e.wave));
      break;
    case 5:
      enemyFire(e, 3 + phase * 2, 0.2, speed);
      if (phase > 0 && e.wave % 3 === 0) run.entities.push(entity("raio", run.p.y, -e.wave));
      if (phase === 2 && e.wave % 2 === 0) run.entities.push(entity("arqueiro", e.y + 15, -e.wave));
      break;
  }
  const cadence = (reg === 2 ? 2.8 : 2.5) - phase * 0.2;
  e.cool = save.difficulty === "Fácil" ? cadence + 0.55 : save.difficulty === "Difícil" ? cadence - 0.48 : cadence - 0.28;
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
  p.fury = Math.min(100, p.fury + dt * 0.8);
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
      let v = hostile(e) ? ((kind === "bruto" ? 34 : kind === "sentinela" ? 20 : 46) + level.region * 2) * encounterDifficulty().movement : kind === "filhote" ? 26 : 38;
      if (hasFlightCompanion('Glacial') && hostile(e)) v *= 0.79;
      e.x -= dt * v;
      if (hostile(e)) {
        e.y = bound(e.base + Math.sin(e.age * (kind === "batedor" ? 2 : 1.1)) * 14, 21, 204);
        e.cool -= dt;
        if (kind !== "batedor" && e.x < 446 && e.cool < 0) {
          enemyFire(e, kind === "sentinela" ? 3 : 1, 0.25, (58 + level.region * 4) * encounterDifficulty().shots);
          e.cool = encounterDifficulty().volleyCooldown;
        }
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
      hurt();
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
  setHud();
  const tip=document.querySelector('#flightTip'), text=missionTip();
  if(tip.textContent!==text)tip.textContent=text;
  const boss=run.entities.find(e=>e.kind==='boss'&&!e.dead);
  tip.classList.toggle('boss-recover',level.id===4&&boss?.state==='recover');
  const signal=document.querySelector('#bossSignal');
  if (signal) {
    const active=level.id===4 && boss && boss.state==='warning';
    signal.hidden=!active;
    if(active){
      signal.className='boss-signal '+boss.pattern;
      const aspect=game.clientHeight?game.clientWidth/game.clientHeight:480/222;
      const viewHeight=Math.max(222,480/aspect);
      const targetY=boss.pattern==='lane'?boss.aimY:boss.y;
      signal.style.top=(50+(targetY-111)/viewHeight*100)+'%';
      signal.style.left=(boss.pattern==='lane'?9:boss.x/480*100)+'%';
      signal.style.right=boss.pattern==='lane'?'14%':'auto';
      signal.style.width=boss.pattern==='lane'?'auto':boss.pattern==='fan'?'160px':'112px';
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
