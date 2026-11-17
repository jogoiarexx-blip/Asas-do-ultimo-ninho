# Checkpoint v0.7.5 · Chefes com aviso e barra de vida

Os seis chefes (fases 04, 08, 12, 16, 20 e 24) agora apresentam indicadores de nome, vida e etapas, avisos antes dos golpes e janelas de contra-ataque. O Guardião das Cinzas mantém seus três padrões exclusivos; os outros encontros passam por leque de tiros, explosão e faixa horizontal conforme perdem vida. As três dificuldades e os salvamentos existentes foram preservados.

Consulte [a auditoria](AUDITORIA_V0.7.5.md) e [as novidades](NOVIDADES_V0.7.5.md).

---

# Checkpoint v0.7.4 · Dragões na orientação correta e modo Normal reforçado

# Asas do Último Ninho · atualização 0.7.4

## Correções e melhorias
- Dragões inimigos (batedores, arqueiros, brutos, sentinelas e chefes) espelhados no eixo horizontal, em vez de rotacionados 180° no eixo vertical. A cabeça fica voltada para a esquerda, sem ocultar o ventre e sem inverter o eixo vertical; as asas continuam animadas.
- A correção está no código-fonte (`src/flight-view.js`) e no renderizador já compilado usado pelo GitHub Pages (`dist/vendor/flight-view.js`).
- Modo Normal reequilibrado: inimigos comuns e chefes com +22% de fator de vida (arredondado para cima), movimento 14% mais rápido, projéteis 18% mais rápidos e intervalo médio entre disparos reduzido de 3,1 s para 2,45 s.
- Modo Difícil aumentado proporcionalmente (vida x1,6, movimento x1,28, projéteis x1,32 e disparos a cada 1,95 s) para continuar mais exigente que o Normal. Modo Fácil mantém a base.
- Padrões dos chefes: projéteis mais rápidos, menos tempo de recuperação e telegráficos ainda visíveis. Indicador de etapa 1/2/3 para todos os chefes.
- Seis chefes já existentes e preservados: fases 4, 8, 12, 16, 20 e 24. Nenhuma fase ou chefe antigo removido.
- Compatibilidade preservada com os checkpoints e salvamentos v1 (`ultimoNinho.save.v1`) e com o campo de treinamento.
- HTML do deploy usa `?v=0.7.4` nos assets para evitar mistura de cache entre versões.

## Testes
Com Node.js: `node tests/campaign.cjs`, `node tests/exploration.cjs`, `node tests/companions.cjs`, `node tests/training.cjs`, `node tests/evolution.cjs` e `node tests/difficulty.cjs`.
O teste 3D `tests/scene.mjs` precisa que o pacote `three` esteja instalado; não foi executado no ambiente de preparação sem acesso à internet. O motor compilado foi modificado cirurgicamente, mantendo o restante do bundle.

---

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

## v0.7.6 — Asas mais vivas

# Asas do Último Ninho — v0.7.6 · Asas mais vivas

## Personagens e dragões 3D
- Armaduras leves por tipo: batedores, arqueiros, brutos e chefes ganharam placas, cristas e chifres distintos.
- Asas com detalhes adicionais na membrana; animação com batidas mais naturais, oscilação lateral e cauda articulada.
- Chefes usam animação intensificada e pulso visual na preparação do ataque, sem alterar direção correta dos modelos.

## Cenários
- **Vale das Cinzas:** torres e estandartes.
- **Floresta Luminescente:** troncos gigantes e copas altas.
- **Deserto de Vidro:** formações de cristais maiores.
- **Picos Congelados:** arcos de gelo e estalagmites.
- **Abismo Vulcânico:** espirais rochosas e vents de lava.
- **Fortaleza do Eclipse:** portais, pilares e runas.
- Os cenários têm seis camadas de paralaxe. As geometrias são geradas uma vez por fase e reaproveitadas durante o voo.

## Efeitos de combate
- Novo arquivo `dist/fx.js` sem bibliotecas externas: rastros de disparos, partículas, traços da esquiva, aura de aviso dos chefes e indicação de contra-ataque.
- Camada 2D transparente que não intercepta cliques nem controles.
- Atualização de efeitos limitada a ~30 fps (menor com redução de movimento ativada).
- Sem alterações em vida, dano, colisões, recompensas ou salvamento.

## Compatibilidade e testes
- Mantidas 24 fases, seis chefes e os sistemas existentes.
- Arquivos de front-end usam a versão `?v=0.7.6` para evitar cache antigo.
- Incluído teste em Node do renderizador Three.js **compilado**, modelos 3D, 24 cenários, orçamento de polígonos e efeitos 2D.
- Testes lógicos em Node aprovados; o teste de cena importando o pacote externo `three` exige `npm ci` (executado no GitHub Actions).
- Navegação visual com Chromium ficou bloqueada neste ambiente e deverá ser conferida no GitHub Pages.


## v0.7.7 — Inteligência dos inimigos

# v0.7.7 — Inteligência dos inimigos

- **Batedores** perseguem o piloto em formação, mudam de altitude e podem desviar de projéteis próximos.
- **Arqueiros** anunciam os disparos, apontam para uma posição do jogador e travam a mira antes de atirar.
- **Brutos** usam ataques em investida: preparação visível, aceleração controlada e recuperação.
- **Sentinelas** mantêm faixas defensivas, anunciam ataques e disparam três projéteis em leque.
- Táticas calculadas com atualização espaçada e estado serializável (`e.ai`), compatível com checkpoints antigos.
- Avisos visuais leves para ataques comuns, sem novos downloads de modelos ou texturas.
- Glacial continua reduzindo a velocidade; modos Fácil, Normal e Difícil mantêm diferenças.
- Os seis chefes, 24 fases, resgates, Ninho e recompensas permanecem intactos.

## v0.7.8 — Os Seis Guardiões

# Asas do Último Ninho — v0.7.8 · Os Seis Guardiões

**Data:** 17 de novembro de 2026

## Novas mecânicas

- Cada um dos seis chefes possui ataque específico do seu reino: brasas lentas (fase 4), espinhos (fase 8), cristais diagonais (fase 12), projéteis gelados que drenam energia ao acertar (fase 16), lava (fase 20) e sombras cruzadas (fase 24).
- Dois núcleos brilhantes de armadura por chefe: alvos reais que recebem tiros e podem ser destruídos, com dano adicional no chefe, bônus de Fúria e enfraquecimento de alguns padrões.
- Ao atravessar os limiares de 66% e 33% da vida, o chefe faz uma transformação de curta duração; o modelo cresce e recebe efeitos visuais próprios.
- O HUD indica etapa, golpe atual e quantas peças de armadura permanecem intactas.
- O motor Three.js compilado foi atualizado para animar a transformação e ocultar a crista da armadura quando os dois núcleos forem quebrados.
- Novos efeitos leves por região, sem imagens extras ou dependências externas.

## Compatibilidade e testes

- Mantidas as 24 fases, seus seis chefes, os sistemas de salvamento, companheiros, Ninho e recompensas.
- Checkpoints antigos são compatíveis e recebem os novos núcleos de armadura no primeiro uso.
- Nove suítes de testes Node sem dependências externas foram executadas localmente e passaram, incluindo combate, progressão, IA, cenas compiladas e pontos de armadura. A suíte de cena que importa a biblioteca `three` exige `npm ci` no GitHub Actions.
- Validação visual no Chromium ficou bloqueada pelo ambiente, portanto a execução no GitHub Pages ainda precisa ser conferida.



## v0.7.9 — Relíquias dos Seis Guardiões

Adicionado o Relicário permanente com seis tesouros exclusivos, um por chefe. O primeiro espaço está disponível desde o início, o segundo no nível 4 do Ninho. Bônus distintos de ataque, cura, escudo, esquiva, dano elemental e Fúria. Recompensa única, migração de salvamentos antigos, proteção do checkpoint e dez suítes de testes locais concluídas. Consulte `NOVIDADES_V0.7.9.md`.
