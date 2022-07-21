// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function uniqueLetters(alphabet) {
    for (let i in alphabet) {
      if (alphabet.lastIndexOf(alphabet[i]) != i) {
        return false
      }
    }
    return true
  }

  function substitution(input, alphabet, encode = true) {
    if(typeof alphabet !== "string"){
      return false
    }

    const char = input.toLowerCase().split(" ")
    const lowerAlpha = alphabet.toLowerCase()
    const properAlpha = "abcdefghijklmnopqrstuvwxyz".split("")

    if(lowerAlpha.split("").length != 26 || !uniqueLetters(lowerAlpha)){
      return false
    }
    
    const subAlpha = () => {
      const obj = {}
      if(!encode){
        lowerAlpha.split("").forEach((key, i) => (obj[key] = properAlpha[i]))
      } else {
        properAlpha.forEach((key, i) => (obj[key] = lowerAlpha.split("")[i]))
      }
      return obj
    }

    const codeKey = subAlpha()
    const output = []

    for(let i in char){
      let word = []
      for(let c in char[i]){
        if(!codeKey[char[i][c]]){
          return false
        }
        word.push(codeKey[char[i][c]])
      }
      output.push(word.join(""))
    }
    return output.join(" ")
  }

  return {
    substitution,
  }
})()


module.exports = { substitution: substitutionModule.substitution }
