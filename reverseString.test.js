const reverseString = require('./reverseString');

test(`Reverses 'hello world' to be 'dlrow olleh`, () => {
  expect(reverseString('hello world')).toBe('dlrow olleh');
});

test(`Reverses 'lorem ipsum' to be 'muspi merol`, () => {
  expect(reverseString('lorem ipsum')).toBe('muspi merol');
});

test(`Reverses 'the quick brown fox jumps over the lazy dog' to be 'god yzal eht revo spmuj xof nworb kciuq eht`, () => {
  expect(reverseString('the quick brown fox jumps over the lazy dog')).toBe('god yzal eht revo spmuj xof nworb kciuq eht');
});