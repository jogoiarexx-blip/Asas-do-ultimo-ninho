# Asas do Último Ninho — checkpoint de desenvolvimento 01

**Versão 0.1 jogável · 16 de novembro de 2026**

## Onde paramos

O ciclo de campanha está integrado. O jogador sai do ninho, combate, resgata ovos e filhotes, conclui uma missão, recebe materiais e pode melhorar o dragão antes do próximo voo. As 24 fases possuem pacotes individuais, em seis regiões. A quarta missão de cada região termina em um confronto próprio. A fase 24 restaura o Grande Ninho e libera a repetição com inimigos reforçados.

**Próximo marco — v0.2, polimento do Vale das Cinzas.** Começar pela fase 02, Ponte dos Esquecidos. O primeiro filhote já está preso em uma jaula funcional. Construir a travessia visual da ponte, sinalizar a jaula antes da entrada na tela e testar com jogadores se eles descobrem que precisam atirar e depois encostar no filhote. Em seguida, revisar as fases 01, 03 e 04 e a apresentação do nascimento no ninho.

## Estado por sistema

| Sistema | Disponível na v0.1 | Ainda previsto no GDD |
| --- | --- | --- |
| Voo e combate | Movimento em oito direções, tiro contínuo, esquiva, dano, energia, fúria, rajada elemental após o primeiro chefe | Remapeamento, sensibilidade, balanceamento com jogadores |
| Campanha | 24 sequências de eventos, seis paletas, obstáculos, raios, sentinelas, chefes regionais e final em três estágios | Cenários e encontros artesanais mais extensos, passagens secretas, desafios específicos por fase |
| Resgate | Ovos, jaulas destrutíveis, coleta por contato e identificação por missão para evitar duplicatas | Mais tipos de guardiões e animações de libertação |
| Ninho | Cinco níveis, incubação por missão, nascimento, berçário, um companheiro equipado, três melhorias com quatro níveis cada | Segundo espaço de companheiro, alimentação, campo de treinamento, árvore de habilidades completa e apresentação visual das construções |
| Progressão | Escamas, brasas, núcleos, medalhas, seis espécies e modo ancestral após a fase final | Ajustar custos, acrescentar desafios ancestrais inéditos e aprimorar transformações |
| Apresentação | Arte de capa, sprites animados, cenários em camadas, indicadores, sons sintetizados e controles por toque | Música regional, sequência animada de eclosão, contraste configurável e testes em aparelhos físicos |
| Carregamento | Fase ativa e próxima fase em cache. Reaproveitamento ao avançar e nova tentativa caso a preparação falhe | Perfil de memória e tempos de carregamento em máquinas de referência |

## Salvamento da partida

A entrada na missão cria um checkpoint. Ele é atualizado a cada oito segundos de voo, em resgates, ao pausar e ao sair da página quando o navegador permite. Guarda a posição, a vida, a energia, as recargas, os inimigos, os projéteis e o próximo evento. A vitória grava as recompensas e libera a próxima fase. Uma cópia da gravação anterior permite recuperar o progresso se a entrada principal estiver corrompida.

Para retomar, abra o mesmo jogo no mesmo navegador e perfil e escolha **Continuar voo**. As versões online e offline mantêm gravações separadas. Limpar os dados do navegador pode apagar a partida. O pacote de desenvolvimento não contém um progresso pessoal de jogador.

## Arquivos de continuidade

- `docs/GDD.md` contém o documento de design original.
- `dist/levels/02.json` define a fase indicada para o próximo marco.
- `dist/art.js` desenha dragões, filhotes, ovos, jaulas e cenários.
- `dist/flight.js` controla o voo, o combate e os encontros.
- `dist/save.js` controla o salvamento e o cache de fases.
- `dist/app.js` reúne a navegação, o ninho e a progressão.
- `tests/campaign.cjs` testa o ciclo da campanha. Execute `node tests/campaign.cjs` na pasta do projeto.

## Verificação deste marco

O teste automatizado percorreu as linhas de eventos e os seis chefes, confirmou o carregamento sequencial dos 24 pacotes, a retomada do estado de voo, a recuperação de cópia anterior, a coleta sem duplicação e a abertura do modo ancestral. O piloto de teste usa invulnerabilidade para verificar as transições. A dificuldade humana das 24 fases continua pendente de avaliação.

No navegador, a tela inicial, a entrada na primeira missão, a pausa, a reabertura da página e o botão de retomada foram conferidos.
