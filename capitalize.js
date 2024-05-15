// capitalize(string) takes a string and 
// returns it with the first character capitalized
function capitalize(str) {
  return (`${str[0].toUpperCase() + str.slice(1)}`);
}

module.exports = capitalize;