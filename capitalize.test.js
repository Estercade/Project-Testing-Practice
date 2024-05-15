const capitalize = require('./capitalize');

test(`Capitalizes 'hello world' to be 'Hello world`, () => {
  expect(capitalize('hello world')).toEqual('Hello world');
});

test(`Capitalizes 'good morning' to be 'Good morning`, () => {
  expect(capitalize('good morning')).toEqual('Good morning');
});

test(`Capitalizes "it's beginning to look a lot like Christmas" to be "It's beginning to look a lot like Christmas"`, () => {
  expect(capitalize("it's beginning to look a lot like Christmas")).toEqual("It's beginning to look a lot like Christmas");
});

test(`Capitalizes '1 day to get it all right' to be '1 day to get it all right`, () => {
  expect(capitalize('1 day to get it all right')).toEqual('1 day to get it all right');
});