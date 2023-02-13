// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
let varList = ["alphabet", "alphabetChecker", "inputCharater"];
let qqq_logThis = function loggingThis(line = 0, inputName = 0, input) {
  const name = varList[inputName];
  console.log(`line${line}:   ${name} == '${typeof input}' === '${input}'`);
};
/*
Console.log template:

console.log(`line 000  name == '${typeof input}' === '${input}'`);

console.log("line 000 ********this!!!!");

*/

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    // console.log("startS");
    let alphabetChecker = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let result = [];
    let encoded = [];
    let decoded = [];

    if (!alphabet || alphabet.length !== 26) {
      return false;
    }
    for (i = 0; i < alphabet.length; i++) {
      let letter = alphabet[i];
      // console.log(`line 33  letter == '${typeof letter}' === '${letter}'`);
      let letterCounter = 0;
      for (j = 0; j < alphabet.length; j++) {
        let jLetter = alphabet[j];
        // console.log(`line 37  jLetter == '${typeof jLetter}' === '${jLetter}'`);
        if (letter === jLetter) {
          letterCounter += letterCounter + 1;
          if (letterCounter >= 2) {
            // console.log(
            //   `line 42  letterCounter == '${typeof letterCounter}' === '${letterCounter}'`
            // );
            return false;
          }
        }
      }
    }
    if (!encode) {
      for (i = 0; i < input.length; i++) {
        let uncodeCharacter = input[i];
        // console.log(
        //   `line 80  uncodeCharacter == '${typeof uncodeCharacter}' === '${uncodeCharacter}'`
        // );
        if (uncodeCharacter === " ") {
          decoded.push(uncodeCharacter);
        }
        let uncodeCharacterNumber = alphabet.indexOf(uncodeCharacter);
        // console.log(
        //   `line 86  uncodeCharacterNumber == '${typeof uncodeCharacterNumber}' === '${uncodeCharacterNumber}'`
        // );
        decoded.push(alphabetChecker[uncodeCharacterNumber]);
        // console.log(`line 77  name == '${typeof input}' === '${input}'`);
      }
      result = decoded;
    } else {
      // if (input) {
      for (i = 0; i < input.length; i++) {
        let inputCharacter = input[i];
        if (inputCharacter === " ") {
          encoded.push(inputCharacter);
        }
        let inputCharacterNumber = alphabetChecker.indexOf(inputCharacter);
        // console.log(
        //   `line 88  inputCharacter == '${typeof inputCharacter}' === '${inputCharacter}'`
        // );
        // console.log(`line 90  input == '${typeof input}' === '${input}'`);
        // console.log(
        //   "line 91        WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
        // );
        // console.log(
        //   `line 94  inputCharacterNumber == '${typeof inputCharacterNumber}' === '${inputCharacterNumber}'`
        // );
        // console.log(
        //   `line 97  alphabet[inputCharacterNumber] == '${typeof alphabet[
        //     inputCharacterNumber
        //   ]}' === '${alphabet[inputCharacterNumber]}'`
        // );
        encoded.push(alphabet[inputCharacterNumber]);
      }
      result = encoded;
      console.log(`line 121 result.join(""): '${result.join("")}'`);
    }
    return result.join("");

    // if (!encode) {
    //   const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
    //   const counts = {};

    //   for (const num of arr) {
    //     counts[num] = counts[num] ? counts[num] + 1 : 1;
    //     if (num >= 2) return "nope";
    //   }

    //   console.log(counts);
    //   console.log(counts[5], counts[2], counts[9], counts[4]);
    // }
    // const result = [];
    // const reply = "";
    // // console.log(`line 25  result == '${typeof result}' === '${result}'`);
    // console.log(`line 026  alphabet == '${typeof alphabet}' === '${alphabet}'`);
    // const alphabetChecker = "abcdefghijklmnopqrstuvwxyz";
    // console.log(
    //   `line 029  alphabetChecker == '${typeof alphabetChecker}' === '${alphabetChecker}'`
    // );
    // if (!alphabet || alphabet.length !== 26) {
    //   return false;
    // } else {
    // }
    // if (alphabet) {
    //   for (i = 0; i < alphabet.length; i++) {
    //     let letter = alphabet[i];
    //     // console.log(letter);
    //     console.log("line 38 ********this!!!!");
    //     let letterCounter = 0;
    //     console.log("line 41 ********this!!!!");
    //     for (j = 0; j < alphabet.length; j++) {
    //       console.log("line 44 JJJJJJJJJJJJJJJjjj   S     ********this!!!!");
    //       if (alphabet.includes(letter)) {
    //         console.log(
    //           `line 48  letterCounter == '${typeof letterCounter}' === '${letterCounter}'`
    //         );
    //         letterCounter += letterCounter + 1;
    //         console.log(
    //           `line 52  letterCounter == '${typeof letterCounter}' === '${letterCounter}'`
    //         );
    //         if (letterCounter >= 2) {
    //           console.log(
    //             `line 56  letterCounter == '${typeof letterCounter}' === '${letterCounter}'`
    //           );
    //           return false;
    //         }
    //       }
    //       console.log("line 61 ********this!!!!");
    //       // console.log("line 58 ********thisworks!!!!");
    //       // for (
    //       //   j = alphabet.indexOf(letter) + 1;
    //       //   j < alphabet.length - alphabet.indexOf(letter);
    //       //   j++
    //       // ) {
    //       //   // let jIsThis = alphabet[j];
    //       //   // console.log(
    //       //   //   `line 69  jIsThis == '${typeof jIsThis}' === '${jIsThis}'`
    //       //   // );
    //       //   // if (alphabet.includes(j)) {
    //       //   //   console.log("line 72 ********thisworks!!!!");
    //       //   //   //return false;
    //       //   // }
    //       // }
    //       // console.log("line 75 ********thisworks!!!!");
    //       // console.log(
    //       //   `line 77  result.join("") == '${typeof result.join(
    //       //     ""
    //       //   )}' === '${result.join("")}'`
    //       // );
    //       // return result.join("");
    //     }
    //     console.log("line 83 ********thisworks!!!!");
    //   }
    // }
    // // else {
    // //   qqq_logThis(33, 0, alphabet);
    // // }

    // if (encode) {
    //   console.log("line 39 ********   if (encode) {!!!!");

    //   for (i = 0; i < input.length; i++) {
    //     let inputCharacter = input[i];
    //     let inputCharacterNumber = alphabetChecker.indexOf(inputCharacter);
    //     // console.log(
    //     //   `line 44  inputCharacter == '${typeof inputCharacter}' === '${inputCharacter}'`
    //     // );
    //     if (inputCharacter === " ") {
    //       console.log(
    //         `line 49  inputCharacter == '${typeof inputCharacter}' === '${inputCharacter}'`
    //       );

    //       result.push(inputCharacter);
    //     } else {
    //       console.log(
    //         `line 51  inputCharacter == '${typeof inputCharacter}' === '${inputCharacter}'`
    //       );
    //       console.log(
    //         `line 98  alphabet[inputCharacterNumber] == '${typeof alphabet.indexOf(
    //           [inputCharacterNumber]
    //         )}' === '${alphabet[inputCharacterNumber]}'`
    //       );
    //       result.push(alphabet[inputCharacterNumber]);
    //     }

    //     console.log(
    //       `line 106  inputCharacterNumber == '${typeof inputCharacterNumber}' === '${inputCharacterNumber}'`
    //     );
    //     // result.push(inputCharacter);
    //     console.log(`line 109  result == '${typeof result}' === '${result}'`);
    //     reply = result.join("");
    //   }
    // }

    // console.log("line 126 ********thisworks!!!!");
    // console.log(
    //   `line 128  result.join("") == '${typeof result.join(
    //     ""
    //   )}' === '${result.join("")}'`
    // );
    // return result;

    //return result.join("");
    // grab an element of alphabet
    // then take that letter and loop through the rest of the alpha bet starting at the next position if that loop. includes is false go on to the next one, if its true return false
    // console.log(
    //   `line 27  alphabetChecker == '${typeof alphabetChecker}' === '${alphabetChecker}'`
    // );
    // console.log(`line 29  alphabet == '${typeof alphabet}' === '${alphabet}'`);
    // for (i = 0; i < input.length; i++) {
    //   let inputCharacter = input[i];
    //   console.log(
    //     `line 33  inputCharacter == '${typeof inputCharacter}' === '${inputCharacter}'`
    //   );
    //   console.log(
    //     `line 36  alphabetChecker.includes(inputCharacter) == '${typeof alphabetChecker.includes(
    //       inputCharacter
    //     )}' === '${alphabetChecker.includes(inputCharacter)}'`
    //   );
    // }
  } //***************end of function
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
