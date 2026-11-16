# Asas do Último Ninho · checkpoint 05

**Versão 0.5.0 · O Ninho Desperta · 16 de novembro de 2026**

## Entrega

Evolução do ninho e coleção de filhotes, com dois companheiros funcionais. Campanha e estrutura de carregamento da v0.4 preservadas. O GDD completo permanece na pasta principal do ZIP em `GDD_Asas_do_Ultimo_Ninho.md`.

### Cinco níveis visuais

| Nível | Construções visíveis |
| --- | --- |
| 1 | Ilha flutuante e abrigo de galhos incompleto |
| 2 | Incubadora coberta, ovos e camas do berçário |
| 3 | Oficina com bigorna, ilha maior e poleiro duplo |
| 4 | Santuário com colunas e cristal elemental |
| 5 | Torres, bandeiras, cristais e perímetro do Grande Ninho |

Filhotes conhecidos aparecem na maquete com movimento ambiente e asas animadas. A população visual é limitada a seis espécies em WebGL e três no renderizador SVG para controlar o custo; a coleção completa permanece salva. A maquete pode ser girada por arraste e por teclado.

As construções representam o nível do ninho e os sistemas já disponíveis. A oficina continua ligada às melhorias existentes; não foi criado um sistema novo de receitas. Campo de treinamento, alimentação, crescimento individual dos filhotes e árvore completa de habilidades seguem como marcos futuros.

### Berçário e dupla de companheiros

- Fichas das seis espécies com elemento, função, habilidade, personalidade e quantidade de filhotes/ovos.
- Retratos SVG produzidos a partir dos próprios modelos 3D, sem rede ou novas bibliotecas em tempo de execução.
- Primeiro espaço no ninho 2, segundo no ninho 3. Nenhuma espécie pode ocupar os dois espaços.
- Botões para levar e retirar companheiros. Espécies não resgatadas continuam bloqueadas.
- Os dois filhotes aparecem em voo, com cores e modelos da espécie correta.
- A equipe aparece no HUD. Cada voo salva sua própria seleção no checkpoint.
- Trocar a equipe no berçário prepara outro voo, preservando a equipe de uma partida em andamento.

| Espécie | Efeito implementado |
| --- | --- |
| Rubro | +1 no dano do sopro principal |
| Verde | +1 de vida a cada 15 segundos, até o máximo do voo |
| Cristalino | +2 de vida máxima ao iniciar o voo |
| Glacial | -21% no deslocamento de inimigos comuns; não altera chefes ou projéteis |
| Tempestade | 2 de dano em até dois inimigos a cada 5 segundos |
| Sombrio | 3 de dano em até dois inimigos a cada 5 segundos |

Habilidades de espécies diferentes funcionam em conjunto. Tempestade e Sombrio aplicam seus próprios pulsos, ignorando alvos já derrotados.

## Salvamento

Mantida a chave `ultimoNinho.save.v1` e todas as coleções, recursos, medalhas e exploração. O antigo campo `companion` é migrado para `companions`, limitado aos espaços e espécies possuídas. O primeiro nome continua espelhado em `companion` por compatibilidade. Entradas desconhecidas e repetidas são removidas na leitura/gravação.

`run.companions` registra a equipe do voo. Checkpoints antigos sem esse campo recebem a equipe migrada na retomada. A vida máxima e os efeitos do combate consultam a equipe do voo, e não uma seleção posterior do berçário. O arquivo de progresso continua dependente da origem do navegador: substituir os arquivos na mesma pasta/endereço preserva o acesso ao salvamento existente.

## Código e recursos

| Área | Arquivo |
| --- | --- |
| Dados das espécies | `dist/dragons.js` |
| Migração e seleção da equipe | `dist/save.js` |
| Efeitos combinados e equipe do voo | `dist/flight.js` |
| Berçário, fichas e ações | `dist/app.js`, `dist/style.css` |
| Modelos do ninho | `src/nest.js` |
| Dupla em voo e maquete | `src/flight-view.js` |
| Retratos | `dist/portraits/*.svg`, `tools/generate_portraits.mjs` |

O script `dragons.js` carrega antes de `save.js`. Os seis retratos são recursos estáticos compartilhados; não carregam fases adicionais. Cenários e modelos do ninho são liberados ao sair da tela. O cache continua mantendo a fase atual e a próxima.

## Verificação executada

- `npm run portraits`: seis retratos gerados a partir dos modelos.
- `npm run build`: bundle recompilado dos fontes.
- `npm test`: campanha de 24 fases, cache, resgates, chefes, eclosão, exploração, recompensas únicas e retomada aprovados.
- Novo `tests/companions.cjs`: migração de um companheiro, dois espaços, limites, posse de espécie, retirada, seis habilidades, efeitos combinados, snapshot por voo e retomada de checkpoint antigo.
- `tests/scene.mjs`: cinco níveis do ninho, construções progressivas, população limitada, modelos válidos e eventos de descarte de todas as geometrias.
- Inspeção das cenas pelo renderizador SVG: níveis 1–5 em 900×330, ninho 5 em 350×300, dois companheiros em voo e retrato individual.
- A limitação de inicialização de Chromium do ambiente continua impedindo a validação completa de interface e WebGL. Não houve teste de dispositivos físicos, FPS de GPU ou balanceamento com jogadores. A inspeção SVG não substitui essas verificações.

## Próximo marco sugerido

Campo de treinamento no ninho para testar a dupla, o sopro, a esquiva e os poderes sem arriscar a campanha. Depois, evoluir defesa/energia/recuperação e a árvore de habilidades. O checkpoint v0.4 foi preservado em `docs/CHECKPOINT_v0.4.md`.
