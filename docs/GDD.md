# ASAS DO ÚLTIMO NINHO
## Game Design Document (GDD) — Versão 1.0

**Documento:** Game Design Document  
**Gênero:** Shoot ’em Up / Ação / Aventura  
**Perspectiva:** 2D com rolagem lateral  
**Modo:** Single-player  
**Estrutura:** Campanha com 24 fases, regiões desbloqueáveis e evolução permanente  
**Plataforma:** Arquitetura preparada para PC, com possibilidade de adaptação para outras plataformas.

---

# 1. VISÃO GERAL DO JOGO

## 1.1 Conceito

Asas do Último Ninho é um jogo de ação no qual o jogador controla um dragão que precisa sobreviver a um mundo dominado por criaturas hostis e reconstruir a população de dragões.

O mundo foi devastado por uma força misteriosa chamada Eclipse. Os ninhos foram destruídos, os ovos foram espalhados e os dragões recém-nascidos estão sendo capturados.

O jogador começa com um pequeno dragão, ainda com habilidades limitadas.

Durante a campanha, deverá:

- Enfrentar criaturas inimigas.
- Derrotar chefes de fase.
- Resgatar ovos de dragões.
- Salvar dragões bebês.
- Encontrar materiais raros.
- Melhorar seu próprio dragão.
- Construir e ampliar seu ninho.
- Desbloquear novas habilidades.
- Descobrir novas espécies de dragões.
- Recuperar territórios dominados pelo Eclipse.

O objetivo final é reconstruir o Grande Ninho e derrotar a criatura responsável pela destruição dos reinos.

## 1.2 Pilares do jogo

1. **Combate:** movimentação fluida, ataques, poderes especiais e batalhas contra chefes.
2. **Resgate:** encontrar ovos e dragões bebês durante as fases.
3. **Evolução:** melhorar o dragão por meio de atributos, habilidades e transformações.
4. **Construção:** desenvolver o ninho como uma base permanente.
5. **Exploração:** descobrir regiões, segredos, recompensas e espécies raras.
6. **Desempenho:** carregar somente os recursos necessários para a fase atual, antecipando o carregamento da próxima.

---

# 2. HISTÓRIA E UNIVERSO

## 2.1 História

Há muito tempo, os dragões protegiam o equilíbrio dos seis reinos.

Cada espécie possuía um elemento natural: fogo, gelo, eletricidade, natureza, cristal ou sombra.

Uma entidade conhecida como Eclipse iniciou uma guerra contra os dragões, destruindo seus ninhos e roubando seus ovos.

Poucos dragões sobreviveram.

O protagonista é encontrado em um antigo abrigo, protegido por um último dragão guardião.

Ao despertar, recebe uma missão: encontrar os ovos perdidos, salvar os filhotes e reconstruir o Grande Ninho.

Durante a aventura, descobrirá que o Eclipse está utilizando a energia dos ovos para criar criaturas corrompidas.

## 2.2 Personagens principais

**Dragão protagonista**

É controlado diretamente pelo jogador. Começa pequeno e evolui conforme a campanha avança.

**Dragão Guardião**

Personagem responsável por apresentar o universo e ensinar as primeiras mecânicas.

**Dragões bebês**

São encontrados durante as fases. Cada um possui uma espécie, personalidade e habilidade especial.

**Senhor do Eclipse**

Principal antagonista. Comanda as criaturas que invadiram os reinos.

---

# 3. MECÂNICAS PRINCIPAIS

## 3.1 Movimentação

O dragão deverá possuir movimentação fluida.

Controles planejados:

- Mover para frente e para trás.
- Subir e descer.
- Movimentar-se diagonalmente.
- Acelerar.
- Desviar de ataques.
- Executar uma investida especial.

A movimentação precisa ser responsiva e não pode deixar o jogador preso em obstáculos.

O personagem deverá respeitar os limites da área jogável, com colisões consistentes.

## 3.2 Sistema de combate

O jogador terá diferentes formas de ataque.

**Ataque primário — Sopro de fogo**

- Disparo contínuo.
- Dano básico.
- Consumo reduzido de energia ou sem consumo.
- Evolução de alcance e potência.

**Ataque secundário — Poder elemental**

Desbloqueado conforme a progressão.

Exemplos:

- Bola de fogo.
- Rajada de gelo.
- Relâmpago.
- Explosão de energia.
- Projéteis de cristal.

**Ataque especial — Fúria do Dragão**

Habilidade de grande impacto, carregada durante o combate.

Pode atingir vários inimigos simultaneamente.

**Esquiva**

Permite desviar de projéteis e ataques dos chefes.

Deverá possuir um pequeno período de recarga para evitar uso ilimitado.

---

# 4. SISTEMA DE EVOLUÇÃO DO DRAGÃO

A evolução será um dos sistemas mais importantes.

O dragão começa pequeno, com pouca resistência e ataques limitados.

Conforme o jogador avança, poderá melhorar seus atributos e desbloquear novas formas.

## 4.1 Atributos

| Atributo | Função |
|---|---|
| Vida | Aumenta a resistência |
| Ataque | Aumenta o dano |
| Defesa | Reduz dano recebido |
| Velocidade | Melhora movimentação |
| Energia | Aumenta poderes especiais |
| Recuperação | Melhora regeneração de energia |

Cada atributo terá níveis de evolução.

## 4.2 Árvore de habilidades

A evolução será dividida em três caminhos.

**Caminho ofensivo**
- Sopro de fogo aprimorado.
- Projéteis múltiplos.
- Explosão de fogo.
- Ataque perfurante.
- Fúria elemental.

**Caminho defensivo**
- Escamas reforçadas.
- Escudo energético.
- Maior quantidade de vida.
- Resistência elemental.
- Recuperação aprimorada.

**Caminho de mobilidade**
- Maior velocidade.
- Investida aérea.
- Esquiva aprimorada.
- Redução do tempo de recarga.
- Voo acelerado.

O jogador poderá combinar habilidades dos três caminhos.

## 4.3 Transformações visuais

A evolução também deverá modificar a aparência do dragão.

Exemplos:

- Chifres maiores.
- Asas mais desenvolvidas.
- Escamas mais detalhadas.
- Cauda com espinhos.
- Olhos luminosos.
- Efeitos elementais.
- Novas animações de voo.
- Aparência de dragão adulto.

As transformações deverão ser desbloqueadas por marcos de progressão, e não apenas pela compra de atributos.

---

# 5. SISTEMA DE OVOS E RESGATE

## 5.1 Resgate de ovos

Durante as fases, o jogador encontrará ovos escondidos, presos em estruturas ou protegidos por inimigos.

Para resgatar um ovo, poderá ser necessário:

- Destruir uma estrutura.
- Derrotar um guardião.
- Abrir uma passagem.
- Encontrar uma área secreta.
- Completar um pequeno desafio.

Cada ovo resgatado será enviado automaticamente ao ninho.

O jogador deverá conseguir visualizar quantos ovos encontrou e quantos ainda existem na fase. Quando um ovo estiver incubado, a eclosão deve ser apresentada como uma sequência animada antes de o filhote entrar no berçário.

## 5.2 Tipos de ovos

Ovos terão espécies e características diferentes.

| Espécie | Elemento | Característica |
|---|---|---|
| Dragão Rubro | Fogo | Ataque |
| Dragão Glacial | Gelo | Lentidão dos inimigos |
| Dragão Tempestade | Elétrico | Ataque em cadeia |
| Dragão Verde | Natureza | Recuperação |
| Dragão Cristalino | Cristal | Defesa |
| Dragão Sombrio | Sombra | Dano especial |

Os ovos raros deverão aparecer em locais específicos e em desafios mais difíceis.

Não haverá necessidade de depender exclusivamente de sorte para conseguir espécies importantes.

## 5.3 Incubação

Os ovos resgatados serão armazenados na área de incubação do ninho.

Cada ovo terá:

- Nome da espécie.
- Elemento.
- Raridade.
- Tempo de incubação por missões.
- Características do filhote.
- Habilidade que poderá desenvolver.

A incubação avançará conforme o jogador concluir fases.

Não será necessário deixar o jogo aberto esperando um cronômetro real.

## 5.4 Nascimento

Quando o ovo estiver pronto, o jogador poderá iniciar a animação de nascimento.

A sequência deverá apresentar:

1. O ovo começando a brilhar.
2. Pequenas rachaduras.
3. Movimento dentro da casca.
4. Abertura do ovo.
5. Nascimento do dragão bebê.
6. Apresentação do nome e da espécie.

O dragão recém-nascido será registrado permanentemente no ninho.

---

# 6. RESGATE DE DRAGÕES BEBÊS

Nem todos os dragões serão encontrados dentro de ovos.

Alguns estarão presos em jaulas, escondidos em cavernas ou protegidos por inimigos.

O jogador deverá resgatá-los diretamente.

Após o resgate, eles serão encaminhados ao berçário.

## 6.1 Berçário

Local destinado aos dragões bebês.

Funcionalidades:

- Visualizar todos os filhotes.
- Consultar suas espécies.
- Acompanhar seu crescimento.
- Alimentar os dragões.
- Desbloquear habilidades.
- Escolher dragões companheiros.

## 6.2 Sistema de companheiros

Alguns dragões poderão acompanhar o protagonista durante as fases.

Cada companheiro terá uma habilidade própria.

Exemplos:

- Dragão de fogo: aumenta o dano.
- Dragão de gelo: desacelera inimigos.
- Dragão elétrico: atinge inimigos próximos.
- Dragão verde: oferece recuperação.
- Dragão cristalino: concede proteção temporária.

O jogador poderá equipar até dois companheiros, conforme desbloqueia os espaços.

Os demais permanecerão no ninho.

---

# 7. O NINHO — BASE PRINCIPAL

O ninho será o centro de progressão do jogo.

Não será apenas um cenário decorativo.

Todas as melhorias importantes acontecerão nesse local.

## 7.1 Estrutura inicial

O jogador começa com um ninho pequeno e parcialmente destruído.

Ele deverá reconstruir as instalações utilizando materiais encontrados nas fases.

## 7.2 Instalações

**1. Plataforma de Evolução**

Local onde o dragão protagonista recebe melhorias.

Permite aumentar:
- Ataque.
- Vida.
- Defesa.
- Velocidade.
- Energia.
- Habilidades especiais.

**2. Incubadora**

Local onde os ovos são armazenados e incubados.

**3. Berçário**

Local onde os dragões bebês ficam após serem resgatados.

**4. Campo de Treinamento**

Permite testar ataques, movimentação e habilidades.

**5. Oficina de Escamas**

Permite criar melhorias utilizando materiais encontrados nas fases.

**6. Mapa dos Reinos**

Apresenta as regiões disponíveis, fases concluídas e áreas ainda bloqueadas.

**7. Santuário Elemental**

Desbloqueia melhorias especiais e evoluções elementais.

## 7.3 Expansão do ninho

O ninho terá cinco níveis principais de desenvolvimento.

| Nível | Desenvolvimento |
|---|---|
| Ninho 1 | Abrigo básico |
| Ninho 2 | Incubadora e berçário |
| Ninho 3 | Oficina e treinamento |
| Ninho 4 | Santuário elemental |
| Ninho 5 | Grande Ninho restaurado |

Cada nível deverá apresentar mudanças visuais perceptíveis.

Novas construções, mais dragões circulando, animações ambientais e novos espaços serão adicionados.

## 7.4 Recursos necessários

O jogador encontrará três recursos principais:

- **Escamas:** utilizadas nas melhorias básicas.
- **Brasas:** utilizadas na evolução elemental e na oficina.
- **Núcleos antigos:** utilizados em evoluções especiais e construções avançadas.

Os recursos deverão ter utilização clara, sem excesso de moedas diferentes.

---

# 8. ESTRUTURA DA CAMPANHA — 24 FASES

A campanha será dividida em seis grandes regiões, cada uma contendo quatro fases.

Cada região terá identidade visual, inimigos, obstáculos e um chefe próprio.

## REGIÃO 1 — VALE DAS CINZAS

**Fase 01 — O Primeiro Voo**

- Apresentação dos controles.
- Primeiro combate.
- Tutorial de movimentação.
- Primeiro ovo resgatável.
- Apresentação do ninho.

**Fase 02 — Ponte dos Esquecidos**

- Inimigos voadores.
- Estruturas destruíveis.
- Obstáculos móveis.
- Primeiro dragão bebê para resgate.

**Fase 03 — Floresta das Brasas**

- Vegetação queimada.
- Inimigos terrestres e aéreos.
- Primeiros materiais raros.
- Guardião intermediário.

**Fase 04 — Guardião das Cinzas**

- Primeira batalha de chefe.
- Ataques em diferentes direções.
- Resgate de ovos protegidos.
- Desbloqueio da primeira grande melhoria.
- Três padrões sinalizados: rajada linear, leque de cinzas e explosão de brasas.
- Cada padrão tem preparação, ataque e recuperação; o Guardião fica mais vulnerável na recuperação.

Chefe: Guardião das Cinzas.

## REGIÃO 2 — FLORESTA LUMINESCENTE

**Fase 05 — Caminho das Raízes**

- Vegetação viva.
- Inimigos camuflados.
- Passagens secretas.

**Fase 06 — Lago das Luzes**

- Áreas aquáticas.
- Criaturas voadoras.
- Ovos escondidos em cavernas.

**Fase 07 — Santuário Perdido**

- Estruturas antigas.
- Desafios de combate.
- Resgate de dois dragões bebês.

**Fase 08 — A Rainha das Raízes**

- Chefe com ataques de vegetação.
- Invocação de criaturas.
- Desbloqueio do elemento natureza.

Chefe: Rainha das Raízes.

## REGIÃO 3 — DESERTO DE VIDRO

**Fase 09 — Dunas Ardentes**

- Tempestades de areia.
- Inimigos velozes.
- Ataques de longo alcance.

**Fase 10 — Ruínas do Sol**

- Estruturas antigas.
- Armadilhas.
- Ovos raros.

**Fase 11 — Cânion dos Ossos**

- Inimigos maiores.
- Corredores estreitos.
- Guardião intermediário.

**Fase 12 — Colosso de Cristal**

- Chefe com armadura resistente.
- Pontos vulneráveis.
- Desbloqueio do elemento cristal.

Chefe: Colosso de Cristal.

## REGIÃO 4 — PICOS CONGELADOS

**Fase 13 — Montanhas do Silêncio**

- Ventos fortes.
- Obstáculos naturais.
- Inimigos de gelo.

**Fase 14 — Cavernas Congeladas**

- Corredores subterrâneos.
- Cristais energéticos.
- Dragões bebês congelados.

**Fase 15 — Ponte da Tempestade**

- Relâmpagos.
- Plataformas móveis.
- Combate aéreo intenso.

**Fase 16 — Dragão Ancestral do Gelo**

- Chefe com ataques de congelamento.
- Múltiplas etapas de combate.
- Desbloqueio da habilidade glacial.

Chefe: Dragão Ancestral do Gelo.

## REGIÃO 5 — ABISMO VULCÂNICO

**Fase 17 — Entrada do Abismo**

- Lava.
- Inimigos resistentes.
- Novos materiais.

**Fase 18 — Rio de Magma**

- Obstáculos em movimento.
- Áreas de dano contínuo.
- Resgate de ovos protegidos.

**Fase 19 — Forja dos Dragões**

- Instalação inimiga.
- Dragões aprisionados.
- Destruição de estruturas.

**Fase 20 — Senhor das Chamas**

- Chefe de grande porte.
- Ataques de área.
- Desbloqueio da evolução avançada.

Chefe: Senhor das Chamas.

## REGIÃO 6 — FORTALEZA DO ECLIPSE

**Fase 21 — Portões da Escuridão**

- Inimigos corrompidos.
- Armadilhas.
- Combate de alta dificuldade.

**Fase 22 — Prisão dos Dragões**

- Resgate de diversos filhotes.
- Libertação de ovos raros.
- Desafios opcionais.

**Fase 23 — Coração do Eclipse**

- Inimigos especiais.
- Guardiões finais.
- Preparação para o último confronto.

**Fase 24 — O Último Ninho**

- Batalha final.
- Três etapas de combate.
- Derrota do Senhor do Eclipse.
- Libertação dos dragões.
- Restauração do Grande Ninho.

Chefe final: Senhor do Eclipse.

Após a conclusão, será desbloqueado o modo Desafios Ancestrais, com inimigos mais fortes, recompensas especiais e possibilidade de aprimorar ainda mais o dragão.

---

# 9. ESTRUTURA DAS FASES

Cada fase deverá possuir:

1. Área de entrada.
2. Apresentação do ambiente.
3. Primeira sequência de inimigos.
4. Área de exploração.
5. Oportunidade de resgate.
6. Segunda sequência de inimigos.
7. Desafio especial ou guardião.
8. Recompensa.
9. Saída ou batalha contra chefe.

Nem todas as fases precisam seguir exatamente essa estrutura.

Algumas poderão priorizar combate, outras exploração e outras resgates.

## 9.1 Sistema de avaliação

Ao concluir uma fase, o jogador receberá uma classificação.

- Bronze: conclusão.
- Prata: boa performance.
- Ouro: desempenho excelente.

A classificação considerará:

- Tempo.
- Dano recebido.
- Inimigos derrotados.
- Ovos resgatados.
- Dragões bebês encontrados.
- Segredos descobertos.

A avaliação não deverá impedir o avanço da campanha.

---

# 10. INIMIGOS E CHEFES

Os inimigos serão divididos em categorias.

**Inimigos básicos**
- Criaturas voadoras.
- Pequenos monstros.
- Criaturas terrestres.
- Projéteis vivos.

**Inimigos especiais**
- Guardiões de ovos.
- Dragões corrompidos.
- Criaturas blindadas.
- Inimigos que lançam ataques em área.

**Chefes**
Cada região terá um chefe com comportamento próprio.

Os chefes deverão apresentar:
- Barra de vida.
- Animações exclusivas.
- Ataques identificáveis.
- Pontos vulneráveis.
- Mudança de comportamento durante a luta.
- Animação de derrota.

Os ataques precisam possuir sinais visuais para que o jogador consiga reagir. A primeira implementação dessa regra está na fase 04: faixa horizontal para a rajada linear, linhas convergentes para o leque e anel pulsante para a explosão de brasas. O padrão deverá continuar legível sem depender exclusivamente de texto.

---

# 11. SISTEMA DE RECOMPENSAS

Ao derrotar inimigos e concluir objetivos, o jogador receberá recompensas.

Possíveis recompensas:

- Escamas.
- Brasas.
- Núcleos antigos.
- Ovos.
- Dragões bebês.
- Novas habilidades.
- Melhorias visuais.
- Acesso a novas regiões.

Também existirão recompensas por exploração.

O jogador poderá encontrar áreas secretas e baús escondidos.

---

# 12. INTERFACE DO JOGO

A interface durante as fases deverá apresentar:

- Barra de vida.
- Barra de energia.
- Indicador do ataque especial.
- Quantidade de ovos encontrados.
- Quantidade de dragões resgatados.
- Objetivo atual.
- Indicador de chefe.
- Quantidade de recursos obtidos.

A interface deverá ser limpa e não ocupar uma área excessiva da tela.

## 12.1 Menu principal

Opções:

- Continuar.
- Novo jogo.
- Seleção de fases.
- Coleção de dragões.
- Configurações.
- Créditos.

## 12.2 Menu do ninho

Opções:

- Melhorar dragão.
- Incubar ovos.
- Visitar berçário.
- Treinar.
- Construir instalações.
- Consultar mapa.
- Iniciar próxima fase.

---

# 13. SISTEMA INTELIGENTE DE CARREGAMENTO

## 13.1 Objetivo

O jogo não deverá carregar todas as fases simultaneamente.

O sistema deverá carregar somente os recursos necessários para a fase atual e preparar antecipadamente a próxima fase utilizando cache.

Essa arquitetura é fundamental para reduzir o consumo de memória, evitar carregamentos desnecessários e permitir expansão futura da campanha.

## 13.2 Modelo de carregamento

O sistema terá três grupos de recursos.

**Grupo A — Recursos permanentes**

Carregados durante a execução do jogo:

- Gerenciador principal.
- Sistema de controles.
- Áudio básico.
- Interface principal.
- Sistema de salvamento.
- Recursos compartilhados do protagonista.

**Grupo B — Recursos da fase atual**

Carregados quando o jogador entra na fase:

- Cenário.
- Texturas.
- Inimigos.
- Obstáculos.
- Animações específicas.
- Música da região.
- Chefe.
- Objetos de resgate.
- Efeitos especiais.

**Grupo C — Cache da próxima fase**

Carregado em segundo plano:

- Cenário seguinte.
- Texturas necessárias.
- Inimigos previstos.
- Objetos exclusivos.
- Música da próxima fase.
- Recursos essenciais do chefe, quando aplicável.

## 13.3 Funcionamento inteligente

Exemplo:

O jogador está na fase 01.

O sistema deverá:

1. Carregar os recursos permanentes.
2. Carregar integralmente a fase 01.
3. Iniciar o jogo.
4. Em segundo plano, preparar os recursos da fase 02.
5. Armazenar os recursos preparados no cache.
6. Ao concluir a fase 01, verificar se a fase 02 está pronta.
7. Se estiver, utilizar os recursos já preparados.
8. Se não estiver, completar o carregamento de forma assíncrona.
9. Depois de ativar a fase 02, liberar os recursos exclusivos da fase 01.

O mesmo processo se repetirá durante toda a campanha.

## 13.4 Regras de cache

- Manter apenas a fase atual e a próxima fase como conteúdo prioritário.
- Não carregar as 24 fases de uma vez.
- Evitar duplicação de texturas e arquivos compartilhados.
- Utilizar carregamento assíncrono.
- Respeitar o limite de memória de cada plataforma.
- Cancelar o pré-carregamento quando o jogador mudar de rota.
- Liberar recursos antigos quando não forem mais necessários.
- Priorizar a continuidade da fase atual em caso de falta de memória.

## 13.5 Gerenciamento de memória

O sistema deverá possuir um gerenciador de memória.

Quando o consumo estiver elevado:

1. Interromper pré-carregamentos não essenciais.
2. Liberar recursos opcionais da próxima fase.
3. Descartar recursos que não estejam em utilização.
4. Preservar os recursos essenciais da fase atual.
5. Retomar o pré-carregamento quando houver memória disponível.

Nenhum recurso poderá ser removido enquanto estiver sendo utilizado pela fase atual.

## 13.6 Transição entre fases

A transição deverá seguir esta sequência:

1. Salvar o progresso.
2. Finalizar a fase atual.
3. Verificar o cache da próxima fase.
4. Preparar os recursos restantes, se necessário.
5. Carregar a próxima fase.
6. Posicionar o jogador.
7. Ativar os sistemas de jogo.
8. Iniciar a nova fase.
9. Liberar os recursos exclusivos da fase anterior.

A transição deverá utilizar uma animação visual ou tela de passagem.

## 13.7 Situações especiais

O sistema deverá considerar:

- Jogador reiniciando a fase.
- Jogador retornando ao ninho.
- Jogador entrando em uma fase já concluída.
- Falha no carregamento do cache.
- Falta de memória.
- Mudança de configurações gráficas.
- Interrupção inesperada do jogo.

O cache será sempre reconstruível. Ele nunca deverá ser a única fonte dos dados de progresso.

---

# 14. SISTEMA DE SALVAMENTO

O progresso deverá ser salvo automaticamente.

Dados persistentes:

- Fase desbloqueada.
- Fases concluídas.
- Recursos coletados.
- Ovos resgatados.
- Dragões desbloqueados.
- Melhorias adquiridas.
- Nível do ninho.
- Instalações construídas.
- Habilidades desbloqueadas.
- Melhor classificação por fase.

O salvamento deverá acontecer em momentos seguros, como:

- Após concluir uma fase.
- Após realizar melhorias.
- Após resgatar recompensas.
- Após concluir uma construção.
- Antes de iniciar uma transição importante.

O sistema deverá utilizar gravação segura para reduzir o risco de corrupção do arquivo de progresso.

---

# 15. DIREÇÃO ARTÍSTICA

O visual deverá transmitir fantasia, aventura e evolução.

Cada região terá identidade própria.

Elementos visuais importantes:

- Dragões detalhados.
- Asas animadas.
- Efeitos elementais.
- Ovos com brilho.
- Filhotes com animações próprias.
- Cenários com profundidade.
- Chefes de grande porte.
- Ambientes com iluminação dinâmica.

O ninho deverá evoluir visualmente conforme as construções forem desbloqueadas.

---

# 16. ÁUDIO

O áudio será dividido em:

- Música de exploração.
- Música de combate.
- Música de chefes.
- Efeitos de ataques.
- Sons de movimentação.
- Sons de resgate.
- Sons de nascimento dos filhotes.
- Sons ambientais do ninho.

Cada região deverá possuir identidade sonora.

O nascimento de um dragão bebê deverá ter uma sequência sonora própria.

---

# 17. DIFICULDADE E ACESSIBILIDADE

O jogo terá três dificuldades:

**Fácil**
- Mais resistência.
- Inimigos menos agressivos.
- Maior margem para esquiva.

**Normal**
- Equilíbrio entre combate e progressão.

**Difícil**
- Inimigos mais resistentes.
- Ataques mais rápidos.
- Menos margem para erros.

Opções adicionais:

- Ajuste de volume.
- Configuração de controles.
- Remapeamento de teclas.
- Ajuste de sensibilidade.
- Opções de contraste.
- Indicadores visuais de ataques perigosos.

---

# 18. ARQUITETURA TÉCNICA

O projeto deverá ser organizado em sistemas independentes.

Módulos principais:

1. GameManager.
2. PlayerController.
3. DragonCombatSystem.
4. DragonEvolutionSystem.
5. EggRescueSystem.
6. BabyDragonSystem.
7. NestManagementSystem.
8. InventorySystem.
9. EnemyManager.
10. BossManager.
11. LevelManager.
12. SaveSystem.
13. AssetLoadingManager.
14. CacheManager.
15. AudioManager.
16. UIManager.

Os módulos deverão possuir responsabilidades separadas.

A evolução do dragão não deverá depender diretamente do sistema de carregamento das fases.

O resgate de ovos deverá funcionar independentemente da interface visual.

O sistema de cache deverá utilizar identificadores de recursos e referências controladas para impedir carregamentos duplicados.

## 18.1 Organização de conteúdo

Estrutura lógica sugerida:

- Core/
- Player/
- Dragons/
- Enemies/
- Bosses/
- Levels/
- Nest/
- Eggs/
- BabyDragons/
- UI/
- Audio/
- VFX/
- Systems/
- SaveData/
- Assets/

Cada fase deverá possuir seu próprio pacote de recursos, com dependências compartilhadas identificadas.

---

# 19. DESEMPENHO E OTIMIZAÇÃO

Metas iniciais:

- Buscar 60 FPS nas plataformas de referência.
- Evitar quedas perceptíveis durante o combate.
- Evitar carregamento de fases desnecessárias.
- Reduzir duplicação de recursos.
- Utilizar carregamento assíncrono.
- Controlar quantidade de inimigos simultâneos.
- Otimizar partículas e efeitos visuais.
- Liberar recursos após o encerramento das fases.

O desempenho deverá ser medido em equipamentos de referência antes de estabelecer limites definitivos de memória e tempo de carregamento.

---

# 20. ESCOPO DE DESENVOLVIMENTO

A produção será dividida em etapas.

**ETAPA 1 — Fundação**
- Projeto inicial.
- Movimentação do dragão.
- Sistema de câmera.
- Ataque básico.
- Primeiro inimigo.
- Primeira fase jogável.

**ETAPA 2 — Combate**
- Novos inimigos.
- Projéteis.
- Esquiva.
- Vida e dano.
- Primeiro chefe.

**ETAPA 3 — Resgate**
- Sistema de ovos.
- Resgate de filhotes.
- Inventário de dragões.
- Incubadora.

**ETAPA 4 — Ninho**
- Construção inicial.
- Melhorias do dragão.
- Berçário.
- Evolução visual.

**ETAPA 5 — Progressão**
- Novas regiões.
- Árvore de habilidades.
- Recursos.
- Chefes.
- Desbloqueios.

**ETAPA 6 — Carregamento inteligente**
- Gerenciador de fases.
- Carregamento assíncrono.
- Cache da próxima fase.
- Descarregamento de recursos antigos.
- Testes de memória.

**ETAPA 7 — Campanha completa**
- 24 fases.
- Seis regiões.
- Chefes finais.
- Conteúdo de resgate.
- Finalização da história.

**ETAPA 8 — Polimento**
- Balanceamento.
- Animações.
- Efeitos.
- Áudio.
- Otimização.
- Testes gerais.

---

# 21. CRITÉRIOS DE QUALIDADE

O projeto somente deverá considerar cada sistema concluído quando:

- A movimentação funcionar corretamente.
- O dragão respeitar os limites da fase.
- Os ataques possuírem colisões consistentes.
- Os inimigos reagirem aos ataques.
- Os chefes possuírem padrões próprios.
- Os ovos forem resgatados corretamente.
- Os filhotes permanecerem registrados após o salvamento.
- As melhorias forem persistentes.
- O ninho apresentar as construções desbloqueadas.
- A fase atual carregar sem depender das demais.
- A próxima fase puder ser pré-carregada em segundo plano.
- Os recursos antigos forem liberados corretamente.
- O jogo conseguir recuperar o carregamento quando o cache não estiver disponível.

---

# 22. VISÃO FINAL DO PRODUTO

O resultado esperado é um jogo em que o jogador tenha motivos para continuar avançando.

Cada fase deverá trazer alguma novidade.

Cada dragão resgatado deverá ter utilidade.

Cada ovo deverá representar uma possibilidade de expansão.

Cada melhoria deverá produzir uma diferença perceptível.

O ninho deverá demonstrar visualmente tudo aquilo que o jogador conquistou.

A campanha de 24 fases será a primeira grande jornada, mas a arquitetura deverá permitir adicionar novas regiões, espécies, chefes, ovos e melhorias sem precisar reconstruir os sistemas principais.

**PRINCIPAL OBJETIVO DO PROJETO:**

Criar um jogo de dragões com combate divertido, progressão consistente, sistema de resgate e construção de ninho, evolução visual e técnica e carregamento inteligente de conteúdo, preparado para crescer sem comprometer o desempenho.

## Implementação v0.4 · protótipo de exploração

A fase 02 serve como teste de uma travessia horizontal ampliada: 110 segundos, escolha entre ponte central, ruínas superiores e desfiladeiro âmbar; entrada secreta destrutível para a Câmara dos Ecos; recompensas únicas e coleção no ninho. As rotas alteram encontros e cenografia, preservando o espaço de movimento do shoot ’em up. O restante da campanha mantém o formato anterior. Detalhes e limites da entrega estão em CHECKPOINT.md.


## Implementação v0.5 · ninho e companheiros

O ninho recebeu cinco estágios visuais, filhotes na maquete e fichas das seis espécies. Dois companheiros podem ser equipados a partir do ninho nível 3, com efeitos combinados e equipe preservada no checkpoint. A versão completa original deste GDD está também na pasta principal. Treinamento, alimentação, crescimento individual e árvore completa de habilidades continuam planejados; veja CHECKPOINT.md para o estado implementado.


## Implementação v0.6 · campo de treinamento

O ninho nível 3 agora permite praticar o combate compartilhado da campanha em três exercícios: alvos fixos, mira em movimento e esquiva. A sessão é temporária, com estatísticas, recarga e poderes liberados apenas para teste. Não há ganho de recursos ou substituição do checkpoint. A árvore completa de defesa, energia e recuperação permanece como próximo marco. Consulte CHECKPOINT.md para testes, limites e detalhes do que está implementado.
