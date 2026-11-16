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
  particles = [];
  $("#cover").hidden = false;
  game.hidden = true;
  $("#overlay").hidden = true;
  $("#hud").hidden = true;
  $("#flightInfo").hidden = true;
  $("#bossSignal").hidden = true;
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
  checkpoint();
  journal();
  $("#ready").textContent = "VOO PAUSADO";
  overlay("CHECKPOINT · FASE " + pad(level.id), "Voo pausado", savedOK ? "Sua posição foi salva aos " + Math.floor(run.t) + " segundos." : "Seu voo está pausado nesta sessão.", [["Continuar voo", "resume"], ["Voltar ao início", "home"]]);
}
function resumeFlight() {
  if (mode !== "paused") return;
  mode = "flight";
  $("#overlay").hidden = true;
  $("#ready").textContent = "EM VOO";
  game.focus({ preventScroll: true });
  animate();
}
function endFlight(won) {
  if (mode !== "flight") return;
  mode = won ? "won" : "lost";
  cancelAnimationFrame(raf);
  keys.clear();
  $("#touch").hidden = true;
  $("#hud").hidden = true;
  $("#flightInfo").hidden = true;
  $("#bossSignal").hidden = true;
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
    save.last = { id, t: Math.floor(run.t), type: "fim" };
    selected = unlocked();
    writeSave();
    chime();
    overlay((run.ancient ? "DESAFIO ANCESTRAL" : "FASE " + pad(id)) + " · " + rank.toUpperCase(), id === 24 ? "Grande Ninho restaurado!" : "Missão concluída!", (id === 24 ? "O Eclipse caiu. As fases do mapa agora têm desafios ancestrais. " : "") + "+" + scales + " escamas · " + run.eggs.length + "/" + level.eggs + " ovos · " + run.babies.length + "/" + level.babies + " filhotes.", id === 24 ? [["Visitar ninho", "nest"], ["Ver mapa", "map"]] : [["Próxima fase", "next"], ["Visitar ninho", "nest"]]);
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
const upLabels = { atk: "Sopro de fogo", hp: "Escamas reforçadas", speed: "Asas velozes" }, upDesc = { atk: "Aumenta o dano de cada disparo.", hp: "Acrescenta dois pontos de vida.", speed: "Acelera o voo e reduz a recarga da esquiva." }, nestNames = ["", "Abrigo básico", "Incubadora e berçário", "Oficina de escamas", "Santuário elemental", "Grande Ninho"];
function nestUI() {
  const e = Object.entries(save.eggs), b = Object.values(save.babies), ready = e.filter(([, x]) => !x.hatched && x.left === 0).length;
  $("#areaTitle").textContent = "O ninho";
  let content = '<div class="box"><div class="kicker">NINHO · NÍVEL ' + save.nest + "</div><h3>" + nestNames[save.nest] + '</h3><div class="inv"><span>' + save.scales + " escamas</span><span>" + save.embers + " brasas</span><span>" + save.cores + " núcleos</span></div>";
  if (save.nest < 5) {
    let cost = save.nest * 5, cores = save.nest >= 3 ? 1 : 0;
    content += "<p>Próxima construção · " + nestNames[save.nest + 1] + '</p><button class="ghost" data-buy="nest" ' + (save.scales < cost || save.cores < cores ? "disabled" : "") + ">Construir · " + cost + " escamas" + (cores ? " + 1 núcleo" : "") + "</button>";
  }
  content += '</div><div class="grid">' + Object.keys(upLabels).map((key) => {
    let val = save.up[key], cost = 5 + val * 5, ember = val >= 2 ? 2 : 0;
    return '<div class="box"><div class="kicker">MELHORIA · ' + val + "/4</div><h3>" + upLabels[key] + "</h3><p>" + upDesc[key] + '</p><button class="ghost" data-buy="' + key + '" ' + (val >= 4 || save.scales < cost || save.embers < ember ? "disabled" : "") + ">" + (val >= 4 ? "Nível máximo" : "Melhorar · " + cost + " escamas" + (ember ? " + 2 brasas" : "")) + "</button></div>";
  }).join("") + '</div><div class="grid"><div class="box"><div class="kicker">OVOS</div><h3>Incubadora</h3><p>' + ready + ' prontos para nascer. A incubação avança ao concluir missões.</p><button class="ghost" data-act="hatch" ' + (!ready || save.nest < 2 ? "disabled" : "") + ">" + (save.nest < 2 ? "Requer ninho nível 2" : "Chocar ovos") + '</button></div><div class="box"><div class="kicker">FILHOTES · ' + b.length + "</div><h3>Berçário</h3><p>" + (b.length ? "Escolha o companheiro do próximo voo." : "Quebre as jaulas e toque nos filhotes para resgatá-los.") + "</p>" + [...new Set(b)].map((s) => '<button class="ghost" data-equip="' + s + '" ' + (s === save.companion || save.nest < 2 ? "disabled" : "") + ">" + s + (s === save.companion ? " ✓" : "") + "</button>").join(" ") + '</div><div class="box"><div class="kicker">CAMPANHA</div><h3>Dificuldade</h3><p>Vale a partir do próximo voo iniciado.</p><select aria-label="Dificuldade" id="difficulty" ' + (save.cp ? "disabled" : "") + ">" + ["Fácil", "Normal", "Difícil"].map((d) => "<option " + (save.difficulty === d ? "selected" : "") + ">" + d + "</option>").join("") + "</select></div></div>";
  leaveNest();
  $("#areaContent").innerHTML = '<div class="nest-preview"><div id="nestScene" tabindex="0" aria-label="Girar a maquete do ninho com as setas"></div><span>Arraste para girar</span></div>'+content;
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
    const n = save.nest, c = n >= 3 ? 1 : 0;
    if (n >= 5 || save.scales < n * 5 || save.cores < c) return;
    save.nest++;
    save.scales -= n * 5;
    save.cores -= c;
  } else {
    let v = save.up[key], cost = 5 + v * 5, ember = v >= 2 ? 2 : 0;
    if (v === void 0 || v >= 4 || save.scales < cost || save.embers < ember) return;
    save.scales -= cost;
    save.embers -= ember;
    save.up[key]++;
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
  if (d.hatchNext) { advanceHatchSequence(); return; }
  if (d.page) showPage(d.page);
  if (d.stage) askStage(+d.stage);
  if (d.confirmStage) {
    $("#dialog").close();
    startFlight(+d.confirmStage);
  }
  if (d.buy) buy(d.buy);
  if (d.equip && save.nest >= 2 && Object.values(save.babies).includes(d.equip)) {
    save.companion = d.equip;
    writeSave();
    nestUI();
  }
  switch (d.act) {
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
  $("#dialogContent").innerHTML = '<div class="kicker">GUIA DE VOO</div><h2>Controles</h2><dl><dt>Movimentar</dt><dd>WASD / Setas</dd><dt>Sopro de fogo</dt><dd>Segurar Espaço</dd><dt>Esquiva</dt><dd>Shift</dd><dt>Fúria carregada</dt><dd>F</dd><dt>Poder elemental</dt><dd>E · após fase 04</dd><dt>Pausar e salvar</dt><dd>P / Esc</dd></dl><p class="muted">Toque nos ovos para recolhê-los. Atire nas jaulas antes de se aproximar dos filhotes.</p><br>';
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
  $("#dialogContent").innerHTML = '<div class="kicker">16 NOV 2026 · V0.3</div><h2>Guardião das Cinzas</h2><p>O primeiro chefe agora apresenta três padrões de ataque com sinais visuais, preparação e janela de recuperação. O ninho ganhou uma sequência animada de eclosão.</p><br><p class="muted"><strong>Próximo marco</strong><br>Expandir as áreas de exploração, adicionar rotas alternativas e testar o balanceamento com jogadores.</p><br>'; 
  $("#dialog").showModal();
};
