"use strict";
const UPGRADE_DEFS = {
  atk: { name: 'Sopro de fogo', max: 4, branch: 'offense', desc: 'Aumenta o dano. No nível 3, acrescenta um segundo projétil ao sopro.' },
  energy: { name: 'Reserva elemental', max: 4, branch: 'offense', desc: 'Acrescenta 20 de energia máxima por nível para encadear mais poderes.' },
  hp: { name: 'Escamas reforçadas', max: 4, branch: 'defense', desc: 'Acrescenta 2 pontos de vida máxima por nível.' },
  def: { name: 'Escudo de escamas', max: 3, branch: 'defense', desc: 'Absorve impactos com cargas que se recuperam durante o voo.' },
  speed: { name: 'Asas velozes', max: 4, branch: 'mobility', desc: 'Aumenta a velocidade em 12% por nível e reduz a recarga da esquiva.' },
  regen: { name: 'Fôlego ancestral', max: 3, branch: 'mobility', desc: 'Recupera mais 2 pontos de energia por segundo a cada nível.' }
};
function normalizeUpgrades(up = {}) {
  return Object.fromEntries(Object.entries(UPGRADE_DEFS).map(([key, info]) => [key, Number.isInteger(up[key]) ? Math.min(info.max, Math.max(0, up[key])) : 0]));
}
function dragonStats(up = save.up, team = activeCompanions(), nest = save.nest, difficulty = save.difficulty) {
  const v = normalizeUpgrades(up);
  return {
    hp: (difficulty === 'Fácil' ? 8 : difficulty === 'Difícil' ? 3 : 5) + v.hp * 2 + (team.includes('Cristalino') ? 2 : 0),
    primary: 1 + v.atk + (team.includes('Rubro') ? 1 : 0), secondary: 1 + v.atk,
    elemental: 4 + v.atk, fury: 10 + v.atk,
    speed: 100 + v.speed * 12, dashCooldown: 2.4 - v.speed * .15,
    energyMax: 100 + v.energy * 20, energyRegen: 7 + nest + v.regen * 2,
    shieldMax: v.def >= 3 ? 2 : v.def ? 1 : 0, shieldDelay: [0, 16, 12, 10][v.def]
  };
}
function upgradeCost(key, value) {
  if (['atk', 'hp', 'speed'].includes(key)) return { scales: 5 + value * 5, embers: value >= 2 ? 2 : 0, cores: 0 };
  if (key === 'def') return { scales: 10 + value * 8, embers: 1 + value, cores: value === 2 ? 1 : 0 };
  if (key === 'energy') return { scales: 12 + value * 7, embers: 1 + Math.floor(value / 2), cores: value >= 2 ? 1 : 0 };
  return { scales: 14 + value * 8, embers: 2 + value, cores: value === 2 ? 1 : 0 };
}
function upgradeState(key, s = save) {
  if (!Object.hasOwn(UPGRADE_DEFS, key)) return null;
  const info = UPGRADE_DEFS[key], up = normalizeUpgrades(s.up), value = up[key], next = value + 1;
  const cost = upgradeCost(key, value), requirements = [], missing = [];
  function need(ok, text) { requirements.push(text); if (!ok) missing.push(text); }
  if (key === 'def') {
    const nest = next === 1 ? 2 : next === 2 ? 3 : 4;
    need(s.nest >= nest, 'Ninho nível ' + nest); need(up.hp >= next, 'Escamas reforçadas nível ' + next);
    if (next === 3) need(!!s.medals[4], 'Concluir fase 04');
  }
  if (key === 'energy') {
    const nest = next >= 3 ? 4 : 3, attack = next === 1 ? 1 : next === 4 ? 3 : 2;
    need(s.nest >= nest, 'Ninho nível ' + nest); need(up.atk >= attack, 'Sopro de fogo nível ' + attack);
    if (next >= 3) need(!!s.medals[4], 'Concluir fase 04');
    if (next === 4) need(!!s.medals[8], 'Concluir fase 08');
  }
  if (key === 'regen') {
    need(s.nest >= (next === 3 ? 4 : 3), 'Ninho nível ' + (next === 3 ? 4 : 3));
    need(up.energy >= next, 'Reserva elemental nível ' + next);
    need(up.speed >= 1, 'Asas velozes nível 1');
    if (next === 3) need(!!s.medals[4], 'Concluir fase 04');
  }
  const resources = { scales: 'escamas', embers: 'brasas', cores: 'núcleos' };
  const shortfall = Object.entries(cost).filter(([key, amount]) => (s[key] || 0) < amount).map(([key, amount]) => 'Faltam ' + (amount - (s[key] || 0)) + ' ' + resources[key]);
  return { key, info, value, next, cost, requirements, missing, shortfall, maxed: value >= info.max, available: value < info.max && !missing.length && !shortfall.length };
}
function purchaseUpgrade(key) {
  const state = upgradeState(key);
  if (!state?.available) return false;
  save.up = normalizeUpgrades(save.up);
  for (const [resource, amount] of Object.entries(state.cost)) save[resource] -= amount;
  save.up[key]++;
  return true;
}
