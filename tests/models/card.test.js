const createCard = require('../../models/card');

describe('Card Suite', function() {
  test('Can create a new card', () => {
    let myCard = createCard();
  });

  test('Can create a king', () => {
    let myCard = createCard('King');

    expect(myCard.value).toBe('King');
  });

  test('Can create a queen', () => {
    let myCard = createCard('Queen');

    expect(myCard.value).toBe('Queen');
  });

  test('Can create a 7', () => {
    let myCard = createCard(7);

    expect(myCard.value).toBe(7);
  });

  test('Can create a king of spades', () => {
    let myCard = createCard('King', 'Spades');

    expect(myCard.suit).toBe('Spades');
  });

  test('Can create a king of clubs', () => {
    let myCard = createCard('King', 'Clubs');

    expect(myCard.suit).toBe('Clubs');
  });

  test('New cards are face down', () => {
    let myCard = createCard(10, 'Hearts');

    expect(myCard.isFaceDown).toBe(true);
  });

  test('Can describe 5 of Diamonds that is face down by default', () => {
    let myCard = createCard(5, 'Diamonds');

    expect(myCard.toString()).toBe('****');
  });

  test('Can describe 5 of Diamonds that is face up', () => {
    let myCard = createCard(5, 'Diamonds');
    myCard.isFaceDown = false;
    expect(myCard.toString()).toBe('5 of Diamonds');
  });
});
