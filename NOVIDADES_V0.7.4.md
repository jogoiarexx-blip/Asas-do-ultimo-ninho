# Asas do Último Ninho · v0.7.4 — Orientação dos dragões e desafio

## Correções
- Dragões inimigos e chefes passam a olhar para a esquerda por espelhamento no eixo X. O modelo não é mais girado 180° no eixo Y, mantendo ventre, asas e parte superior na orientação da câmera.
- A mudança também foi aplicada ao arquivo compilado `dist/vendor/flight-view.js`, usado no GitHub Pages.
- Cache do CSS e dos nove scripts atualizado para `?v=0.7.4`.

## Equilíbrio
- **Fácil:** mantém os valores anteriores.
- **Normal:** 1,22× vida inimiga (arredondamento para cima), 1,14× velocidade de deslocamento, 1,18× velocidade dos tiros e 2,45 s entre rajadas comuns (antes, 3,1 s).
- **Difícil:** 1,6× vida inimiga, 1,28× deslocamento, 1,32× velocidade de tiros e 1,95 s entre rajadas.
- Chefes com tiros mais rápidos, menos recuperação e avisos visíveis antes dos golpes.

## Chefes já existentes (mantidos)
- Fase 04 — Guardião das Cinzas
- Fase 08 — A Rainha das Raízes
- Fase 12 — Colosso de Cristal
- Fase 16 — Dragão Ancestral do Gelo
- Fase 20 — Senhor das Chamas
- Fase 24 — O Último Ninho / Senhor do Eclipse

Todos têm três etapas baseadas na vida restante, com indicação de etapa no HUD.

## Compatibilidade
Salvamentos, melhorias, companheiros e checkpoints continuam no mesmo formato. O campo de treinamento conserva as suas regras e as recompensas das fases não mudaram.

## Validação
Passaram os testes em Node para campanha, exploração, companheiros, treinamento, evolução e balanceamento/chefes. O teste de cena 3D depende de instalar o pacote `three` e não foi executado neste ambiente sem acesso à rede; visualização no navegador também não foi validada aqui.
