// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // crete an alphabet=[] list in the ofrm of an arry
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    let result = [];
    input = input.toLowerCase();

    /* 
    I give this a input="" and a shift=int which the shift ing value. encode which is a boolean to understand which direction the "input" should be coverted.
    the output should be the converted sting.
    I will need a reference for the alphabet but that can be a const external to this exact function.    */

    if (!shift || shift > 25 || shift < -25) {
      return false;
    }
    if (!encode) shift *= -1;

    // console.log("********************************************************");
    // console.log(`this is input outside the loop: ${input}`);
    // console.log("********************************************************");
    for (let i = 0; i < input.length; i++) {
      let inputCharacter = input[i];

      if (alphabet.includes(inputCharacter)) {
        let inputCharacterNumber = alphabet.indexOf(inputCharacter);
        let inputCharacterNumberShifted =
          alphabet.indexOf(inputCharacter) + shift;

        // console.log("********************************************************");
        // console.log("this is in the first loop");
        // console.log(`this is shift: ${shift}`);
        // console.log(
        //   `this is inputCharacterNumberShifted (1st if): ${inputCharacterNumberShifted}`
        // );
        // console.log("********************************************************");

        if (inputCharacterNumberShifted >= alphabet.length) {
          inputCharacterNumberShifted =
            inputCharacterNumberShifted - alphabet.length;
          // console.log(
          //   `this is inputCharacterNumberShifted 2nd if): ${inputCharacterNumberShifted}`
          // );
        } else if (inputCharacterNumberShifted < 0) {
          inputCharacterNumberShifted =
            alphabet.length + inputCharacterNumberShifted;
          // console.log(
          //   `this is inputCharacterNumberShifted 3rd if: ${inputCharacterNumberShifted}`
          // );
        }
        let shiftedCharacter = alphabet[inputCharacterNumberShifted];

        // console.log("********************************************************");
        // console.log(`this is input: ${input}`);
        // console.log(`this is shift: ${shift}`);
        // console.log(`this is inputCharacter: ${inputCharacter}`);
        // console.log(`this is inputCharacterNumber: ${inputCharacterNumber}`);
        // console.log(
        //   `this is inputCharacterNumberShifted: ${inputCharacterNumberShifted}`
        // );
        // console.log(`this is shiftedCharacter: ${shiftedCharacter}`);
        // console.log("********************************************************");
        result.push(shiftedCharacter);
      } else {
        result.push(inputCharacter);
      }
    }
    let reply = result.join("");

    // console.log("********************************************************");
    // console.log("these are outside of the loop 'returns'");
    // console.log(`this is result: ${result}`);
    // // console.log(`this is result.join: ${result.join("")}`);
    // console.log(`this is reply: ${reply}`);
    // console.log("********************************************************");
    return result.join("");
  }
  // console.log(caesar("abc", -3));
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
