# Asas do Último Ninho · checkpoint 07

**Versão 0.7.0 · Trilhas de Evolução · 16 de novembro de 2026**

## Entrega

Árvore de atributos no ninho, organizada em ofensiva, proteção e mobilidade. As melhorias antigas foram preservadas; defesa, energia e recuperação acrescentam decisões de progressão. O GDD completo original permanece na pasta principal.

| Caminho | Melhorias | Níveis |
| --- | --- | --- |
| Ofensiva | Sopro de fogo → Reserva elemental | 4 + 4 |
| Proteção | Escamas reforçadas → Escudo de escamas | 4 + 3 |
| Mobilidade | Asas velozes → Fôlego ancestral | 4 + 3 |

As fichas mostram o atributo atual e o próximo, progresso de níveis, custo por recurso e requisitos cumpridos/pendentes. O resumo considera a dupla selecionada. Há requisitos entre caminhos: fôlego exige reserva elemental e asas velozes. O botão e a função de compra verificam as mesmas condições. Compras em nível máximo, com requisitos pendentes ou recursos insuficientes não gastam nada.

## Efeitos implementados

| Atributo | Efeito |
| --- | --- |
| Sopro | +1 de dano por nível; segundo projétil no nível 3, como nas versões anteriores |
| Vida | +2 de vida máxima por nível |
| Velocidade | +12% de deslocamento por nível; recarga da esquiva de 2,4 s até 1,8 s |
| Energia | +20 de capacidade por nível; máximo de 180 |
| Recuperação | +2 de energia por segundo por nível; soma com a base 7 + nível do ninho |
| Defesa | Escudo com 1 carga/16 s no nível 1, 1 carga/12 s no nível 2 e 2 cargas/10 s no nível 3 |

Cada carga de escudo absorve um impacto antes de reduzir vida, respeitando a invulnerabilidade e a esquiva existentes. A recarga por carga começa novamente após um bloqueio; um impacto que acerta a vida não reinicia esse relógio. No máximo de cargas, o relógio fica zerado. O HUD mostra cargas e a contagem de retorno. Uma aura aparece enquanto houver proteção.

Bloqueios não entram em `run.hits`, que continua contando ataques com perda de vida para as medalhas. `run.blocks` conta os bloqueios; o treino agora mostra os dois contadores separados. A vida virtual do treino continua sem cair abaixo de 1.

O custo e a recarga do poder E continuam 28 de energia e 0,7 s. A reserva aumenta a quantidade disponível e o fôlego reduz o intervalo necessário para recuperar energia; não liberam E antecipadamente na campanha. O treino mantém sua liberação temporária.

## Custos e requisitos

Os custos de sopro, vida e velocidade foram mantidos: 5/10/15/20 escamas, com 2 brasas nos níveis 3 e 4. Nenhum investimento antigo foi removido.

| Nova melhoria | Escamas por nível | Brasas por nível | Núcleos por nível |
| --- | --- | --- | --- |
| Escudo | 10 / 18 / 26 | 1 / 2 / 3 | 0 / 0 / 1 |
| Reserva | 12 / 19 / 26 / 33 | 1 / 1 / 2 / 2 | 0 / 0 / 1 / 1 |
| Fôlego | 14 / 22 / 30 | 2 / 3 / 4 | 0 / 0 / 1 |

- Escudo 1: ninho 2 e vida 1. Escudo 2: ninho 3 e vida 2. Escudo 3: ninho 4, vida 3 e fase 04 concluída.
- Reserva 1: ninho 3 e sopro 1. Reserva 2: ninho 3 e sopro 2. Reserva 3: ninho 4, sopro 2 e fase 04. Reserva 4: ninho 4, sopro 3 e fases 04 e 08.
- Fôlego 1/2: ninho 3, reserva no mesmo nível e asas 1. Fôlego 3: ninho 4, reserva 3, asas 1 e fase 04.

São três caminhos de atributos com seis melhorias; a árvore completa de ataques especiais, resistências elementais e transformações do GDD continua sendo escopo futuro. Não foram adicionados pontos de habilidade, novas moedas ou sistema de reembolso.

## Salvamento e treino

Mantida a chave `ultimoNinho.save.v1`. Os antigos níveis `atk`, `hp` e `speed` são preservados; `def`, `energy` e `regen` começam em zero. Valores dos níveis são normalizados aos limites conhecidos. Coleções, recursos, fases e exploração não mudam na migração.

Novos voos guardam `run.upgrades` e `run.stats`, com energia, regeneração, vida, dano, movimento e escudo daquele início. Comprar depois não altera os atributos de um voo salvo. `p.shield` e `p.shieldClock` preservam as cargas e a recarga no checkpoint. Checkpoints antigos sem esses campos são inicializados na retomada a partir das melhorias disponíveis, mantendo posição, tempo e resgates.

O campo usa os mesmos atributos e mostra a capacidade/recuperação da equipe. Recarregar restaura também o escudo e respeita a nova energia máxima. Zerar ou trocar o exercício usa as compras atuais, sem alterar a campanha.

## Arquivos principais

| Área | Arquivo |
| --- | --- |
| Definições, atributos, requisitos e compra | `dist/evolution.js` |
| Migração dos níveis | `dist/save.js` |
| Atributos por voo e escudo | `dist/flight.js` |
| Árvore e comparação no ninho | `dist/app.js`, `dist/style.css` |
| Recarga e contadores no treino | `dist/training.js` |
| Aura 3D | `src/creatures.js`, `src/flight-view.js` |
| Verificação de evolução | `tests/evolution.cjs` |

`evolution.js` carrega antes de `save.js`. Nenhum serviço, biblioteca ou recurso externo foi acrescentado. As 24 fases e o cache da próxima fase foram mantidos.

## Verificação executada

- `npm run build`: bundle recompilado para incluir a aura.
- `npm test`: campanha, exploração, dupla e campo de treinamento aprovados.
- Migração de arquivo antigo com três melhorias; custos exatos; requisitos de ninho, atributos e fases; limite máximo; insuficiência de núcleo sem desconto parcial.
- Ataques primário/duplo, poder elemental, fúria, velocidade e recarga da esquiva exercitados pela lógica real.
- Capacidade de 180 e recuperação de 17/s verificadas com um perfil de ninho 4/fôlego 3.
- Bloqueios, invulnerabilidade, dano após esgotamento, recarga por carga e relógio de checkpoint verificados.
- Atributos congelados no voo salvo, adoção das compras em novo voo e migração de checkpoint sem atributos.
- Recarga do escudo/energia no treino e preservação do progresso da campanha.
- Aura inspecionada pelo renderizador SVG com 2, 1 e 0 cargas. A vida permanece igual durante os bloqueios e o modelo sai da cena ao esgotar.
- Marcação da árvore gerada com perfis bloqueado, disponível e completo verificada quanto ao fechamento dos elementos HTML.
- A interface completa em navegador, CSS em dispositivos físicos, WebGL e balanceamento com jogadores continuam sem validação nesta versão. As verificações de SVG e lógica não substituem esses testes.

## Próximo marco sugerido

Ampliar a fase 03, Floresta das Brasas, com guardião intermediário e um resgate que use as novas habilidades. O checkpoint v0.6 foi preservado em `docs/CHECKPOINT_v0.6.md`.
