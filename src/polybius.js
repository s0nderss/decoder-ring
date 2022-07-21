// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const lookup = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };
  const reverse = { i: "42", j: "42" };
  for (let key in lookup) {
    if (key != 42) {
      const val = lookup[key];
      reverse[val] = key;
    }
  }

  function polybius(input, encode = true) {
    const output = [];
    input = input.toLowerCase()
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i]
        if (!reverse[char]) {
          output.push(char)
        } else {
          output.push(reverse[char])
        }
      }
    } else {
      for (let i = 0; i < input.length; i += 2) {
        const char = input.slice(i, i + 2)
        if(Math.abs(char.length % 2) == 1){
          return false
        }
        if (!lookup[char]) {
          output.push(input[i])
          i--;
        } else {
          output.push(lookup[char])
        }
      }
    }
    return output.join("")
  }

  return {
    polybius,
  }
})();



module.exports = { polybius: polybiusModule.polybius };
