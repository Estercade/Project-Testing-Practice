const caesarCipher = require('./caesarCipher');

test(`Shifts 'abc' by 3 to 'def`, () => {
  expect(caesarCipher('abc', 3)).toBe('def');
});

test(`Shifts 'abcdefghijklmnopqrstuvwxyz' by -5 to 'vwxyzabcdefghijklmnopqrstu`, () => {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', -5)).toBe('vwxyzabcdefghijklmnopqrstu');
});

test(`Shifts 'ABC' by 3 to 'DEF`, () => {
  expect(caesarCipher('ABC', 3)).toBe('DEF');
});

test(`Shifts 'The quick brown fox jumps over the lazy dog.' by -5 to 'Ocz lpdxf wmjri ajs ephkn jqzm ocz gvut yjb.`, () => {
  expect(caesarCipher('The quick brown fox jumps over the lazy dog.', -5)).toBe('Ocz lpdxf wmjri ajs ephkn jqzm ocz gvut yjb.');
});

test(`Shifts "A B C, it's easy as 1 2 3" by -5 to "F G H, ny'x jfxd fx 1 2 3"`, () => {
  expect(caesarCipher("A B C, it's easy as 1 2 3", 5)).toBe("F G H, ny'x jfxd fx 1 2 3");
});