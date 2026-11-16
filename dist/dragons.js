"use strict";
// Species facts shared by the nursery, save migration and combat descriptions.
const DRAGONS = {
  Rubro: { element: 'Fogo', role: 'Ataque', color: '#f49a76', model: 'rubro', trait: 'Corajoso e inquieto', power: '+1 de dano no sopro principal.', home: 'Vale das Cinzas' },
  Verde: { element: 'Natureza', role: 'Recuperação', color: '#91d5b2', model: 'verde', trait: 'Calmo e protetor', power: 'Recupera 1 ponto de vida a cada 15 segundos de voo.', home: 'Floresta Luminescente' },
  Cristalino: { element: 'Cristal', role: 'Proteção', color: '#dac2ef', model: 'cristalino', trait: 'Atento e leal', power: '+2 pontos de vida máxima ao iniciar o voo.', home: 'Deserto de Vidro' },
  Glacial: { element: 'Gelo', role: 'Controle', color: '#a8e5f1', model: 'glacial', trait: 'Paciente e observador', power: 'Reduz em 21% a velocidade de deslocamento dos inimigos comuns.', home: 'Picos Congelados' },
  Tempestade: { element: 'Elétrico', role: 'Ataque em cadeia', color: '#e5ce8d', model: 'tempestade', trait: 'Curioso e agitado', power: 'Causa 2 de dano em até 2 inimigos a cada 5 segundos.', home: 'Abismo Vulcânico' },
  Sombrio: { element: 'Sombra', role: 'Dano especial', color: '#d7a0c6', model: 'sombrio', trait: 'Reservado e vigilante', power: 'Causa 3 de dano em até 2 inimigos a cada 5 segundos.', home: 'Fortaleza do Eclipse' }
};
