# Asas do Último Ninho · checkpoint 04

**Versão 0.4.0 · Caminhos dos Esquecidos · 16 de novembro de 2026**

## Entrega

Protótipo completo de exploração na fase 02. A linha do tempo passou de 42 para aproximadamente 110 segundos (105 de conteúdo + 5 de saída). As outras 23 fases mantêm sua duração. Não há mundo aberto: a travessia continua horizontal, com escolhas de caminho que alteram encontros e cenário.

- Trecho original preservado, inclusive posição e ordem dos primeiros 12 eventos e identificadores dos resgates.
- Dois arcos de escolha aos 33–43 s: Ruínas superiores ou Desfiladeiro âmbar. Permanecer fora mantém a Ponte central.
- Encontros de arqueiros nas ruínas, brutos no desfiladeiro e ondas próprias na ponte central.
- Tesouro exclusivo de cada rota lateral: 8 escamas na primeira coleta.
- Entrada selada aos 63–76 s: romper com fogo, depois atravessar por contato. Fechar sem entrar mantém a rota escolhida.
- Câmara dos Ecos com cenário escuro, arcos antigos, cristais, sentinela e Relíquia dos Ecos (20 escamas).
- Convergência aos 90 s e novo ovo/jaula. Total da fase: 2 ovos e 2 filhotes.
- Indicadores de rota e selo acompanham a projeção ortográfica; HUD compacto no celular.
- Coleção de tesouros e rotas no ninho; resumo da exploração ao vencer.

Os caminhos mudam cenário e encontros; as formações de fundo são decorativas. Os obstáculos de combate continuam sendo as entidades barreira.

## Compatibilidade e retomada

Mantida `ultimoNinho.save.v1`. `save.exploration` guarda recompensas únicas e caminhos vencidos. Campos ausentes são inicializados para salvamentos antigos. `run.exploration` guarda caminho, temporizadores de avisos, criação dos arcos e recompensas do voo. Entidades de selo/passagem são serializadas com o checkpoint existente. Os 12 eventos originais de fase 02 mantêm seus índices, evitando invalidar checkpoints de v0.3.

Tesouros pagam imediatamente e apenas uma vez por identificador; replay, morte e retomada não duplicam as escamas. São independentes do prêmio normal de conclusão. Rotas só são registradas na coleção ao vencer.

O armazenamento depende da origem do navegador. A atualização deve substituir os arquivos na mesma pasta/endereço para reutilizar o progresso. Nenhum salvamento de teste acompanha o pacote.

## Carregamento e recursos

As 24 fases e o cache atual/próxima continuam presentes. JSON HTTP e pacotes `levels-local` foram regenerados e comparados. Os eventos exclusivos de outras rotas são consumidos sem criar entidades. O cenário ativo acrescenta um par de malhas reutilizadas; ao trocar a rota, as geometrias anteriores são descartadas. Não há carregamento antecipado de todos os reinos.

## Verificação executada

- `npm run build`: bundle Three.js recompilado a partir dos fontes.
- `npm test`: 24 fases, cache, combate, chefes, resgates, eclosão e progressão aprovados.
- Novo teste `tests/exploration.cjs`: três caminhos completos; movimentos reais até os arcos; selo rompido com projéteis; contato na entrada aberta; expiração; tesouros únicos; checkpoint antigo e retomada; 24 pacotes offline iguais aos JSON.
- Leitura offline por scripts simulada: apenas fase 02 e pré-cache 03 são solicitados.
- `tests/scene.mjs`: todas as cenas e novos modelos, rotas normal/reduzida, posições finitas e descarte.
- `node --check`: interface, lógica de voo, salvamento e bundle aprovados.
- Inspeção visual de cenas SVG renderizadas em 1200×555 e 390×223. Medição indicativa do renderizador SVG em Node: cerca de 11–20 ms por atualização nas primeiras amostras; não equivale a FPS de navegador ou GPU real.
- A inicialização de Chromium foi bloqueada pelo ambiente (socket do processo). A interface completa, WebGL e os controles em dispositivos reais ainda precisam de validação manual. Não houve teste com jogadores nem validação completa do balanceamento.

## Arquivos principais

| Área | Arquivo |
| --- | --- |
| Rotas, selo, recompensas e dicas | `dist/flight.js` |
| Coleção e conclusão | `dist/app.js`, `dist/save.js` |
| Marcadores e HUD compacto | `dist/index.html`, `dist/style.css` |
| Linha do tempo e configuração | `dist/levels/02.json`, `dist/levels-local/02.js` |
| Modelos e cenário | `src/creatures.js`, `src/flight-view.js`, `src/landscape.js` |
| Testes | `tests/campaign.cjs`, `tests/exploration.cjs`, `tests/scene.mjs` |

## Próximo marco sugerido

Validar ritmo e legibilidade com jogadores, ajustar os encontros da fase 02 e então levar escolhas de exploração para uma fase do segundo reino. O checkpoint anterior está preservado em `docs/CHECKPOINT_v0.3.md`.
