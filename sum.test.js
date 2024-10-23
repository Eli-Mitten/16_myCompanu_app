const sum = require('./sum');  // Asegúrate de declarar sum solo una vez

test('adds 1 + 2 to equal 3', () => {
expect(sum(1, 2)).toBe(3);
});
  