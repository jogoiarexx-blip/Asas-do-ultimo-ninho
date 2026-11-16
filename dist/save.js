"use strict";
const SAVEKEY = "ultimoNinho.save.v1", BACKUP = SAVEKEY + ".backup";
const freshSave = () => ({ v: 1, medals: {}, scales: 0, embers: 0, cores: 0, eggs: {}, babies: {}, companion: null, up: { atk: 0, hp: 0, speed: 0 }, nest: 1, cp: null, last: null, audio: false, difficulty: "Normal", raids: 0 });
function usable(s) {
  return s?.v === 1 && s.up && s.medals && s.eggs && s.babies && Number.isInteger(s.nest) && (!s.cp || s.cp.id >= 1 && s.cp.id <= 24 && s.cp.run?.p && Array.isArray(s.cp.run.entities) && Array.isArray(s.cp.run.bullets));
}
function loadSave() {
  for (const key of [SAVEKEY, BACKUP]) try {
    let s = JSON.parse(localStorage.getItem(key));
    if (usable(s)) return { ...freshSave(), ...s };
  } catch {
  }
  return freshSave();
}
let save = loadSave(), savedOK = true;
function writeSave() {
  try {
    const old = localStorage.getItem(SAVEKEY);
    if (old && usable(JSON.parse(old))) localStorage.setItem(BACKUP, old);
  } catch {
  }
  try {
    localStorage.setItem(SAVEKEY, JSON.stringify(save));
    savedOK = true;
  } catch {
    savedOK = false;
  }
  const s = document.getElementById("storageState");
  if (s) s.textContent = savedOK ? "SALVAMENTO LOCAL" : "SALVAMENTO INDISPONÍVEL";
}
function unlocked() {
  let n = 1;
  while (n < 24 && save.medals[n]) n++;
  return n;
}
function cardCount(obj) {
  return Object.keys(obj).length;
}
const species = ["Rubro", "Verde", "Cristalino", "Glacial", "Tempestade", "Sombrio"];
const cache = { current: null, next: null, epoch: 0 };
async function readLevel(id) {
  if (location.protocol === "file:") return readLocalLevel(id);
  const r = await fetch("levels/" + String(id).padStart(2, "0") + ".json");
  if (!r.ok) throw Error("fase");
  return r.json();
}
async function getLevel(id) {
  const epoch = ++cache.epoch;
  let level = cache.current?.id === id ? cache.current : null;
  if (!level) level = cache.next?.id === id ? await cache.next.promise.catch(() => null) : null;
  if (!level) level = await readLevel(id);
  if (epoch !== cache.epoch) throw Error("cancelado");
  cache.current = level;
  cache.next = null;
  if (id < 24) {
    const p = readLevel(id + 1);
    p.catch(() => {
    });
    cache.next = { id: id + 1, promise: p };
  }
  return level;
}
let audioCtx;
function note(hz, duration = 0.09, type = "square", gain = 0.025, delay = 0, end = hz) {
  if (!save.audio) return;
  try {
    audioCtx ??= new AudioContext();
    audioCtx.resume().catch(() => {
    });
    const t = audioCtx.currentTime + delay, o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(hz, t);
    o.frequency.exponentialRampToValueAtTime(Math.max(10, end), t + duration);
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(1e-3, t + duration);
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start(t);
    o.stop(t + duration);
  } catch {
  }
}
function chime() {
  [392, 494, 587, 784].forEach((f, i) => note(f, 0.16, "triangle", 0.09, 0.09 * i));
}
const pendingLocal = /* @__PURE__ */ new Map();
function readLocalLevel(id) {
  if (pendingLocal.has(id)) return pendingLocal.get(id).promise;
  let ok, fail;
  const promise = new Promise((resolve, reject) => {
    ok = resolve;
    fail = reject;
  });
  const script = document.createElement("script");
  script.src = "levels-local/" + String(id).padStart(2, "0") + ".js";
  pendingLocal.set(id, { promise, ok });
  script.onload = () => {
    pendingLocal.delete(id);
    script.remove();
  };
  script.onerror = () => {
    pendingLocal.delete(id);
    script.remove();
    fail(new Error("Arquivo da fase indisponível"));
  };
  document.head.append(script);
  return promise;
}
function registerLocalLevel(level) {
  pendingLocal.get(level.id)?.ok(level);
}
