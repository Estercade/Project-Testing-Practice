const calculator = require('./calculator');

console.log(calculator.add(1,2));

test('Adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Adds -1 to 2 to equal 1', () => {
  expect(calculator.add(-1, 2)).toBe(1);
});

test('Subtracts 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test('Subtracts 1 - 0 to equal 1', () => {
  expect(calculator.subtract(1, 0)).toBe(1);
});

test('Subtracts 0 - 1 to equal -1', () => {
  expect(calculator.subtract(0, 1)).toBe(-1);
});

test('Divides 4 / 2 to equal 2', () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

test('Divides 100 / 2 to equal 50', () => {
  expect(calculator.divide(100, 2)).toBe(50);
});

test('Multiplies 1 * 1 to equal 1', () => {
  expect(calculator.multiply(1, 1)).toBe(1);
});

test('Multiplies 2 * 50 to equal 100', () => {
  expect(calculator.multiply(2, 50)).toBe(100);
});