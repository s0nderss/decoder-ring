// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25 || shift == 0){
      return false
    }

    if(!encode){
      shift *= -1
    }

    let inputSplit = input.split("")
    const output = []

    for (let i in inputSplit){
      const char = inputSplit[i]
      if(char.toLowerCase().charCodeAt(0) <= 96 || char.toLowerCase().charCodeAt(0) >= 123){
        output.push(char)
      } else {
        let lowerCoded = char.toLowerCase().charCodeAt(0)
        const shiftedMsg = () => {
          let encodedMsg = lowerCoded + shift
          if(encodedMsg < 97){
            return (encodedMsg += 26)
          } else if (encodedMsg > 122) {
            return (encodedMsg -= 26)
          } else {
            return encodedMsg
          }
        }
        let shiftedChar = String.fromCharCode(shiftedMsg())
      output.push(shiftedChar)
      }
    }
    return output.join("")
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
