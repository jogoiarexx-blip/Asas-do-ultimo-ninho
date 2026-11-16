# Auditoria técnica e de jogabilidade — Asas do Último Ninho v0.7.5

**Escopo:** 24 fases, chefes, motor Three.js, interface, economia, salvamento, treinamento e GitHub Pages.

## Achados verificados

| Prioridade | Área | Evidência no código | Ação nesta versão |
| --- | --- | --- | --- |
| Alta | Combates contra chefes | O Guardião da fase 04 usava aviso/recuperação; os demais atiravam imediatamente ao vencer o temporizador. | Padronizado um ciclo de aviso visível, rajada telegrafada e recuperação para os seis chefes. |
| Alta | Leitura do combate | Não existia HUD dedicado de vida/fase do chefe, apenas porcentagem no indicador de percurso. | Adicionada barra de vida com nome, etapa 1–3 e status de ataque/recuperação, em layout responsivo. |
| Média | Justiça dos disparos | Nas fases de chefe 08–24, os tiros apontavam para a posição atual do piloto na hora do disparo, sem indicação prévia. | O aviso captura a posição do jogador; a rajada utiliza esse ponto fixo, permitindo esquiva consciente. |
| Média | Identidade dos seis encontros | Os chefes compartilham a base de entidades e ataques com variações por região. | Mantidas as invocações específicas de cada reino; ataques agora alternam entre leque, explosão e faixa na terceira etapa. |
| Média | Continuidade dos checkpoints | Estado do combate é armazenado como JSON no `save.cp.run`. | Os estados `warning`, `recover`, `phase`, `aimY` são serializáveis e mantêm compatibilidade com checkpoints antigos. |
| Baixa | Cache do GitHub Pages | HTML carrega arquivos com query string da versão anterior. | Query string de CSS e scripts atualizada para 0.7.5. |

## O que foi preservado

- Todas as 24 fases, seis reinos e seis chefes, incluindo as três etapas do Guardião das Cinzas.
- Economia v0.7.1, preços do Ninho e árvore de habilidades.
- Dados persistidos com `ultimoNinho.save.v1`, ovos, filhotes, companheiros, modo de treinamento e progresso.
- Modo Normal mais exigente e distinção entre Fácil/Normal/Difícil.
- Jogo estático em `dist/`, sem servidor ou cobrança de hospedagem adicional.

## Testes

`node tests/campaign.cjs`, `exploration.cjs`, `companions.cjs`, `training.cjs`, `evolution.cjs` e `difficulty.cjs`: executados localmente, com aprovação dos testes de gameplay. `node tests/scene.mjs`: não executado por faltar a dependência `three` instalada neste ambiente. Chromium/Playwright: navegação `localhost` e `file://` bloqueada pela política do ambiente; não foi possível certificar os visuais em navegador real.

## Próximas melhorias recomendadas

1. Controles completos para gamepad (detecção e reconexão, vibração opcional e pausa segura).
2. Mais padrões de IA por tipo de inimigo e dificuldade com recompensas específicas.
3. Teste visual automatizado responsivo em um ambiente de CI com navegador disponível.
4. Melhorias de acessibilidade: anúncios não intrusivos, contraste configurável e opção de reduzir efeitos.
5. Ajuste contínuo de ganhos/custos após testar quanto tempo cada jogador leva para evoluir o Ninho.