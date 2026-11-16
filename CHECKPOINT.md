# Asas do Último Ninho · checkpoint 06

**Versão 0.6.0 · Asas em Treinamento · 16 de novembro de 2026**

## Entrega

Campo de treinamento acessível pelo ninho nível 3, usando os mesmos controles, ataques, esquiva, parâmetros de melhoria e companheiros da campanha. O GDD completo continua na pasta principal do ZIP.

| Exercício | Comportamento |
| --- | --- |
| Alvos fixos | Três alvos em alturas diferentes, com 30 de vida cada |
| Mira em movimento | Um alvo que oscila verticalmente; o Glacial reduz sua velocidade |
| Esquiva | Um alvo e rajadas de treino com sinalização prévia de 0,9 segundo |

Alvos reaparecem um segundo depois da destruição. Sua vida aparece junto ao alvo. O campo não tem limite de tempo, recompensas ou transição de fase. A vida de treino nunca fica abaixo de 1.

O painel mostra tempo, alvos destruídos, dano efetivo aplicado, dano por segundo, impactos e projéteis cruzados com Shift. O dano inclui as habilidades da dupla. O cálculo por segundo usa o intervalo desde o primeiro dano, com piso de 1 segundo; não é um benchmark de desempenho de hardware. A esquiva é contada por projétil cruzado durante a investida; sair da faixa sem Shift evita o impacto, mas não incrementa esse contador.

### Controles e ações

- Setas/WASD, Espaço, E, F, Shift e P/Esc seguem o comportamento de voo.
- E fica liberado somente dentro da prática, mesmo antes da fase 04. Não é um desbloqueio persistente.
- Recarregar poderes restaura vida, energia, fúria e recargas, preservando as estatísticas.
- Zerar exercício reinicia a sessão. Trocar de exercício também zera os números e usa a dupla atualmente equipada.
- Voltar ao ninho encerra a sessão sem substituir o checkpoint da campanha.
- O HUD de treino mostra vida, energia e fúria. No celular, o título e a equipe ficam no painel abaixo para deixar os alvos visíveis.
- O ninho recebeu um alvo decorativo no nível 3, indicando a instalação aberta.

## Separação da campanha

O treino usa um descritor local de arena (`level.training`) e estado temporário (`run.training`). Não solicita uma fase nova nem altera os ponteiros do cache atual/próxima fase. Não existe fase 00 salva.

As rotas de gravação e recompensa têm proteção explícita:

- `checkpoint()` retorna durante o treino.
- Resgate de ovos/filhotes e tesouros não gravam em prática.
- Concluir um treino não concede medalhas, escamas, brasas ou núcleos.
- A incubação e as rotas descobertas não avançam no treino.
- Os alvos não geram loot.
- A vida de treino não permite derrota ou gasto de recursos.
- Pausar, recarregar, trocar exercício, sair e fechar a página não serializam a arena sobre o voo da campanha.

Uma partida de campanha já em voo é pausada e salva antes de abrir o treino. Se já estava salva, o conteúdo do salvamento e do backup permanece igual durante a sessão. A equipe usada na arena é uma cópia da seleção do berçário; a equipe da campanha continua no seu próprio checkpoint.

## Organização

| Área | Arquivo |
| --- | --- |
| Arena, exercícios, interface e sessão | `dist/training.js` |
| Proteções de gravação/recompensa e combate compartilhado | `dist/flight.js`, `dist/app.js` |
| Painel, sinalização e botões | `dist/index.html`, `dist/style.css` |
| Modelo do alvo | `src/creatures.js` |
| Campo com cenário parado | `src/landscape.js` |
| Alvo da instalação no ninho | `src/nest.js` |
| Verificação de isolamento e exercícios | `tests/training.cjs` |

`training.js` é carregado depois de `flight.js` e antes de `app.js`. O bundle da cena foi recompilado. Não foram adicionadas bibliotecas, serviços ou recursos externos. A arena mantém no máximo três alvos e remove projéteis fora do campo; os contadores são numéricos, sem guardar histórico de cada disparo.

## Verificação executada

- `npm run build`: bundle recompilado.
- `npm test`: campanha de 24 fases, chefes, resgates, eclosão, exploração e dupla aprovados.
- Novo teste de treinamento: acesso no nível 3; tiros reais; reaparecimento dos alvos; poder temporário E; fúria; recarga; pausa; alvo móvel; avisos e rajadas; Shift; vida mínima; ausência de recompensas e preservação do salvamento/backup.
- Sessão simulada de 300 segundos, com alvos e projéteis limitados, sem terminar a campanha ou alterar medalhas.
- Retomada exata da posição e tempo de um checkpoint após o treino.
- Cena de campo parada, alvo 3D com posições válidas e instalação do ninho verificados.
- Inspeção das três cenas pelo renderizador SVG em 1200×555 e dos alvos fixos em 390×223. A lógica real da sessão e o renderizador da cena foram usados juntos nessa inspeção.
- Não houve validação completa de CSS, interação de navegador, WebGL ou dispositivos físicos nesta versão. A inspeção SVG e os testes de lógica não substituem esses testes.

## Próximo marco sugerido

Árvore de evolução com defesa, energia e recuperação, incluindo custos, pré-requisitos e comparação antes/depois no ninho. O campo de treinamento pode servir para medir os efeitos das novas melhorias. O checkpoint v0.5 está em `docs/CHECKPOINT_v0.5.md`.
