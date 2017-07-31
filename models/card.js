function createCard(value, suit) {
  return {
    value: value,
    suit: suit,
    isFaceDown: true,
    toString: function() {
      if (this.isFaceDown) {
        return '****';
      } else {
        return `${this.value} of ${this.suit}`;
      }
    }
  };
}

module.exports = createCard;
