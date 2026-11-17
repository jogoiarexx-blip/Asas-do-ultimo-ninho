"use strict";
// Relíquias únicas dos seis chefes. Os atributos são aplicados APENAS aos novos voos.
const RELIC_DEFS = Object.freeze({
  '4':  { name: 'Coração de Cinzas', kind: 'ofensiva', icon: '✦', color: '#f6ae79', power: 'Sopro principal causa +1 de dano.', boss: 'Guardião das Cinzas' },
  '8':  { name: 'Semente Vital', kind: 'recuperação', icon: '❀', color: '#a9dfb1', power: 'Recupera 1 de vida a cada 30 segundos de voo.', boss: 'Rainha das Raízes' },
  '12': { name: 'Prisma Guardião', kind: 'proteção', icon: '◇', color: '#cdb8f2', power: 'Concede +1 carga de escudo, mesmo sem a melhoria de escudo.', boss: 'Colosso de Cristal' },
  '16': { name: 'Pluma Glacial', kind: 'mobilidade', icon: '❄', color: '#a5e6f4', power: 'Diminui em 0,25 s a recarga da esquiva.', boss: 'Dragão Ancestral do Gelo' },
  '20': { name: 'Núcleo Vulcânico', kind: 'elemental', icon: '✹', color: '#f49a7b', power: 'Ataque elemental (E) causa +2 de dano por projétil.', boss: 'Senhor das Chamas' },
  '24': { name: 'Fragmento do Eclipse', kind: 'fúria', icon: '☽', color: '#e3b3eb', power: 'A Fúria recarrega +0,7 por segundo.', boss: 'Senhor do Eclipse' }
});
const RELIC_IDS = Object.freeze(Object.keys(RELIC_DEFS));
function relicSlots(s) { return s.nest >= 4 ? 2 : 1; }
function normalizeRelics(s) {
  const old = s.relics && typeof s.relics === 'object' && !Array.isArray(s.relics) ? s.relics : {};
  s.relics = Object.fromEntries(RELIC_IDS.filter(id => old[id] === true || !!s.medals?.[id]).map(id => [id, true]));
  const equipped = Array.isArray(s.equippedRelics) ? s.equippedRelics : [];
  s.equippedRelics = [...new Set(equipped.map(String))].filter(id => s.relics[id] && Object.hasOwn(RELIC_DEFS, id)).slice(0, relicSlots(s));
  return s.equippedRelics;
}
function grantRelic(bossId, s = save) {
  const id = String(bossId);
  if (!Object.hasOwn(RELIC_DEFS, id) || s.relics?.[id]) return false;
  s.relics ??= {};
  s.relics[id] = true;
  normalizeRelics(s);
  return true;
}
function changeRelic(id, s = save) {
  id = String(id);
  normalizeRelics(s);
  if (!Object.hasOwn(RELIC_DEFS, id) || !s.relics[id]) return 'locked';
  const idx = s.equippedRelics.indexOf(id);
  if (idx >= 0) { s.equippedRelics.splice(idx, 1); return 'removed'; }
  if (s.equippedRelics.length >= relicSlots(s)) return 'full';
  s.equippedRelics.push(id);
  return 'added';
}
function equippedRelics(s = save) {
  return (Array.isArray(s.equippedRelics) ? s.equippedRelics : []).filter(id => s.relics?.[id] && Object.hasOwn(RELIC_DEFS,id)).slice(0, relicSlots(s));
}
