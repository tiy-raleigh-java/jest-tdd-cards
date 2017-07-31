const createDeck = require('../../models/deck');

describe('Deck Suite', function() {
  test('Can create new deck', () => {
    const myDeck = createDeck();
  });
});
