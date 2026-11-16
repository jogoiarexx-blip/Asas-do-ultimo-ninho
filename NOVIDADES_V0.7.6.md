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
