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
