# Asas do Último Ninho · checkpoint 03

**Versão 0.3.0 · Three.js r187 · 16 de novembro de 2026**

## Marco concluído · Guardião das Cinzas

A fase 04 agora possui um padrão de chefe exclusivo, dividido em três etapas:

1. **Rajada linear:** o Guardião fixa a altura do jogador, mostra uma faixa horizontal luminosa e dispara três projéteis em linha. Subir ou descer durante a preparação evita a faixa.
2. **Leque de cinzas:** o chefe sinaliza três linhas convergentes e dispara cinco projéteis em leque, mirando a posição registrada no início da preparação.
3. **Explosão de brasas:** o núcleo do chefe pulsa antes de uma salva de sete projéteis, mais rápida e mais concentrada.

Cada investida tem preparação, ataque e recuperação. Durante a recuperação, o chefe recebe 40% de dano adicional. A barra inferior identifica a etapa atual e a orientação textual explica a reação esperada. A vida do Guardião foi ajustada para permitir que as três etapas apareçam durante a luta.

## Sequência de eclosão no Ninho

- O botão de incubação abre uma cena animada de rachadura e nascimento.
- Cada ovo é apresentado individualmente, com indicação de espécie e progresso da sequência.
- O filhote só é registrado no berçário quando o jogador confirma que quer conhecer o nascimento.
- Se a janela for fechada antes da confirmação, o ovo permanece pronto e não é perdido.

## Compatibilidade

- Mantida a chave de salvamento `ultimoNinho.save.v1` e o formato de checkpoint da campanha.
- As 24 fases, o carregamento antecipado da próxima fase e os pacotes offline foram preservados.
- A revisão do chefe usa os dados existentes da fase 04; não exige migração dos arquivos de fase.
- HUD e controles da versão 0.2.1 foram mantidos.

## Verificação

- `node tests/campaign.cjs`: aprovado. Verifica progressão das 24 fases, cache, movimento, combate, resgates, salvamento, os três padrões do Guardião e a confirmação da eclosão.
- `node --check` nos scripts de interface e voo: aprovado.
- `node tests/scene.mjs`: não executado neste ambiente porque a dependência `three` não estava instalada; o comando pode ser repetido após `npm install`.
- A biblioteca Three.js empacotada e o renderizador da versão 0.2.1 foram preservados sem alterações.

## Próximo marco sugerido · v0.4

**Expansão real das áreas de exploração.** Aumentar a distância percorrida em fases selecionadas, criar rotas alternativas, passagens secretas e recompensas de exploração. Antes de ampliar toda a campanha, construir um protótipo completo em uma fase, medir o impacto de desempenho e validar o ritmo do combate.

| Área | Arquivo |
| --- | --- |
| Padrões e colisões do Guardião | `dist/flight.js` |
| Sinalização visual dos ataques | `dist/index.html`, `dist/flight.js`, `dist/style.css` |
| Sequência de eclosão | `dist/app.js`, `dist/style.css` |
| Conteúdo e eventos das fases | `dist/levels/` e `dist/levels-local/` |
| Modelos 3D, animação e renderização | `src/` e `dist/vendor/flight-view.js` |
| Testes de campanha e cena | `tests/` |
| Documento de design | `docs/GDD.md` |

Para executar, extraia o ZIP e abra `JOGAR.html`. Para testar com as dependências de desenvolvimento, execute `npm install` e `npm test`.
