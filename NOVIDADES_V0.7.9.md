# Asas do Último Ninho — v0.7.9 · Relíquias dos Seis Guardiões

## Tesouros raros, um por chefe

| Fase | Relíquia | Bônus ao equipar |
| --- | --- | --- |
| 04 | Coração de Cinzas | +1 dano no sopro principal |
| 08 | Semente Vital | +1 vida recuperada a cada 30 segundos |
| 12 | Prisma Guardião | +1 carga de escudo, mesmo sem melhorias de escudo |
| 16 | Pluma Glacial | -0,25 s de recarga da esquiva |
| 20 | Núcleo Vulcânico | +2 dano em cada projétil elemental (E) |
| 24 | Fragmento do Eclipse | +0,7 pontos de Fúria por segundo |

## Ninho e progressão
- **Novo Relicário**, disponível na tela do Ninho, com seis tesouros, estado de descoberta e botões de equipar/retirar.
- **Um espaço** de relíquia inicialmente; **dois espaços** no Ninho nível 4.
- A relíquia é concedida uma única vez ao **derrotar o chefe e concluir a fase**. Derrotas e replays não duplicam recompensas.
- Os recursos habituais (escamas, brasas e núcleos) continuam sendo concedidos.
- Vitórias anteriores nas fases 04/08/12/16/20/24 são reconhecidas automaticamente ao carregar um save antigo.
- A equipe de relíquias é capturada **ao iniciar um novo voo**; trocar no Ninho não altera checkpoint em andamento.

## Compatibilidade e validação
- Mantidos os 24 estágios, seis chefes, dificuldade Normal, companheiros, exploração e salvamento `ultimoNinho.save.v1`.
- Novo script estático `dist/relics.js`, carregado antes de `evolution.js`, sem downloads externos.
- Suíte adicional `tests/relics.cjs`, com testes de seis bônus, migração, aquisição, equipar/retirar, duas vagas, replay, fim da fase e atributos do checkpoint.
- Dez suítes Node sem dependências externas passaram localmente. O teste de cena 3D com o pacote externo Three.js não foi executado neste ambiente; o workflow do GitHub tenta executá-lo com `npm ci`.
