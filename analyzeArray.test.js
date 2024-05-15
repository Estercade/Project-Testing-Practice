const analyzeArray = require('./analyzeArray');

test(`Analyze array [1,2,3] average to be 2`, () => {
  expect(analyzeArray([1,2,3]).average).toBe(2);
});

test(`Analyze array [1,2,3] min to be 1`, () => {
  expect(analyzeArray([1,2,3]).min).toBe(1);
});

test(`Analyze array [1,2,3] max to be 3`, () => {
  expect(analyzeArray([1,2,3]).max).toBe(3);
});

test(`Analyze array [1,8,3,4,2,6] length to be 6`, () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});

test(`Analyze array [1,8,3,4,2,6] average to be 4`, () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test(`Analyze array [1,8,3,4,2,6] min to be 1`, () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test(`Analyze array [1,8,3,4,2,6] max to be 8`, () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test(`Analyze array [1,8,3,4,2,6] length to be 6`, () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});