// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const codex = [
    { a: 11 },
    { b: 21 },
    { c: 31 },
    { d: 41 },
    { e: 51 },
    { f: 12 },
    { g: 22 },
    { h: 32 },
    { "i/j": 42 },
    { "i/j": 42 },
    { k: 52 },
    { l: 13 },
    { m: 23 },
    { n: 33 },
    { o: 43 },
    { p: 53 },
    { q: 14 },
    { r: 24 },
    { s: 34 },
    { t: 44 },
    { u: 54 },
    { v: 15 },
    { w: 25 },
    { x: 35 },
    { y: 45 },
    { z: 55 },
    { " ": 99 },
  ];
  const codeNumber = [
    "11",
    "21",
    "31",
    "41",
    "51",
    "12",
    "22",
    "32",
    "42",
    "42",
    "52",
    "13",
    "23",
    "33",
    "43",
    "53",
    "14",
    "24",
    "34",
    "44",
    "54",
    "15",
    "26",
    "36",
    "45",
    "56",
    "99",
  ];

  function polybius(input, encode = true) {
    let result = [];
    input = input.toLowerCase();

    // let notResult = [];
    // console.log(`line 71    result === '${result}'`);
    // console.log(`line 72    input === '${input}'`);
    // i && i + 1
    if (!encode) {
      // let numCheck = input;
      // console.log(`line 76 numCheck === ${numCheck}`);
      // console.log(`line 77   numCheck.includes(" "));
      // if (numCheck.includes(" ")) {
      //   let lengthCheck = numCheck.length - 1;
      //   console.log(`line 80 ${lengthCheck % 2 == 0}`);
      //   if (lengthCheck % 2 == 0) {
      //     return false;
      //   }
      // }
      // for (i = 0; i < numCheck; i++) {
      //   let numCheckElement = numCheck[i];
      //   console.log(`line 79 numCheckElement === ${numCheckElement}`);
      // }
      let spaceSaver = input.replace(" ", 99);
      if (spaceSaver.length % 2 === 0) {
        // console.log(`line 79    spaceSaver === '${spaceSaver}'`);
        for (i = 0; i < spaceSaver.length; i += 2) {
          let spaceSaverElement = spaceSaver[i] + spaceSaver[i + 1];
          // console.log(`line 79    spaceSaverElement === '${spaceSaverElement}'`);
          let spaceSaverElementNumber = codeNumber.indexOf(spaceSaverElement);
          // console.log(
          //   `line 82    spaceSaverElementNumber === '${spaceSaverElementNumber}'`
          // );
          // console.log(
          //   `line 85    Object.keys(codex[spaceSaverElementNumber]) === '${Object.keys(
          //     codex[spaceSaverElementNumber]
          //   )}'`
          // );
          result.push(Object.keys(codex[spaceSaverElementNumber]));
          // console.log(`line 90 I work`);
        }
        //} else {
        //   // if (spaceSaverElement.length / 2 === 0) {
        //   result = false;
        //   console.log(`line 96    result === '${result}'`);
        // }
        //}
      } else {
        return false;
      }
    }
    // for (i = 0; i < input.length; i++) {
    //   let inputElement = input[i];
    //   let newNumber = input[i] + input[i + 1];
    //   console.log(`line 81    inputElement === ${inputElement}`);
    //   console.log(`line 82    newNumber === '${newNumber}'`);
    //   console.log(
    //     `line 84    codeNumber.indexOf(newNumber) === '${codeNumber.indexOf(
    //       newNumber
    //     )}'`
    //   );
    //   console.log(`line 88    input === '${input}'`);

    //   if (newNumber.length / 2 !== 0) {
    //     return false;
    //   }
    //   if (codeNumber.includes(newNumber)) {
    //     notResult.push(Object.keys(codex.indexOf(codeNumber[newNumber])));
    //   } else {
    //   }
    // }
    // console.log(`line 98    notResult === '${notResult}'`);

    // for (i = 0; i < input.length; i++) {
    //   let inputElement = input[i];
    //   console.log(`line 74    inputElement === '${inputElement}'`);
    //   let newNumber = [];
    //   console.log(`line 76    newNumber === '${newNumber}'`);
    //   if (inputElement === " ") {
    //     console.log(`line 78    inputElement === '${inputElement}'`);
    //     result.push(inputElement);
    //     console.log(`line 80    result === '${result}'`);
    //   } else if (newNumber.length <= 1) {
    //     // console.log(`line 82    inputElement === '${inputElement}'`);
    //     // console.log(`line 83    newNumber === '${newNumber}'`);
    //     console.log(`line 84    result === '${result}'`);
    //     newNumber.push(inputElement);
    //     // console.log(`line 86    inputElement === '${inputElement}'`);
    //     console.log(`line 87    newNumber === '${newNumber}'`);
    //     console.log(`line 88    result === '${result}'`);
    //   } else if (newNumber.length === 2) {
    //     console.log(`line 90    inputElement === '${inputElement}'`);
    //     console.log(`line 91    newNumber === '${newNumber}'`);
    //     console.log(`line 92    result === '${result}'`);
    //     console.log(
    //       `line 94    newInputCharacter === '${newInputCharacter}'`
    //     );
    //     newInputCharacter = newNumber.join("");
    //     console.log(`line 97    inputElement === '${inputElement}'`);
    //     console.log(`line 98    newNumber === '${newNumber}'`);
    //     console.log(`line 99    result === '${result}'`);
    //     console.log(
    //       `line 101    newInputCharacter === '${newInputCharacter}'`
    //     );
    //   }
    // }
    // let newInputCharacterNumber = codeNumber.indexOf(newInputCharacter);
    // console.log(
    //   `line 107    codeNumber.indexOf(newInputCharacter) === '${codeNumber.indexOf(
    //     newInputCharacter
    //   )}'`
    // );
    // console.log(
    //   `line 112    newInputCharacterNumber === '${newInputCharacterNumber}'`
    // );

    // if (codeNumber.includes(newInputCharacter)) {
    //   console.log("true");
    //   result.push(Object.keys(codex[newInputCharacterNumber]));
    // } else {
    //   result.push(newInputCharacter);
    // }

    //   for (i = 0; i < input.length; i++) {
    //     let inputCharacter = `${input[i]}${input[i + 1]}`;
    //     console.log(`line124    inputCharacter === '${inputCharacter}'`);
    //     if (inputCharacter.includes(" ")) {
    //       inputCharacter.replace(" ", 88);
    //       console.log(`line 127    inputCharacter === '${inputCharacter}'`);
    //     } else {
    //       inputCharacter = `${input[i]}${input[i + 1]}`;
    //     }
    //     console.log(`line 131    inputCharacter  ${inputCharacter}`);
    //     console.log(codeNumber.includes(inputCharacter));
    //     let inputCharacterNumber = codeNumber.indexOf(inputCharacter);
    //     console.log(
    //       `line 135    inputCharacterNumber  ${inputCharacterNumber}`
    //     );
    //     if (codeNumber.includes(inputCharacter)) {
    //       console.log("line 138   true");
    //       result.push(Object.keys(codex[inputCharacterNumber]));
    //     } else {
    //       result.push(inputCharacter);
    //     }
    //     // console.log(
    //     //   `line 143      the inputCharacter is ${inputCharacter} which is giving back the letter ${Object.keys(
    //     //     codex[inputCharacterNumber]
    //     //   )}`
    //     // );
    //   }

    if (encode) {
      input = input.toLowerCase();

      for (i = 0; i < input.length; i++) {
        let inputCharacter = input[i];
        // inputCharacter = "@";
        let inputCharacterNumber = alphabet.indexOf(inputCharacter);
        // console.log("line 155    inputCharacter === " + inputCharacter);
        // console.log(
        // "line 157    alphabet.indexOf(inputCharacter) === " +
        // alphabet.indexOf(inputCharacter)
        // );
        // console.log(
        //   "line 161    inputCharacterNumber === " + inputCharacterNumber
        // );

        if (alphabet.includes(inputCharacter)) {
          // console.log(
          //   "line 166    Object.values(codex[inputCharacterNumber]) === " +
          //     Object.values(codex[inputCharacterNumber])
          // );
          // console.log(
          //   "line 170    Object.keys(codex[inputCharacterNumber]) === " +
          //     Object.keys(codex[inputCharacterNumber])
          // );
          // console.log("true");
          result.push(Object.values(codex[inputCharacterNumber]));
        } else {
          // console.log("false");
          result.push(inputCharacter);
        }
      }
    }
    // console.log('line 211    result.join("") === ' + result.join(""));
    return result.join("");

    // let result = [];
    // console.log("line 43    result  " + result);
    // console.log("line 44    input   " + input);

    // for (i = 0; i < input.length; i++) {
    //   let inputCharacter = input[i];
    //   // inputCharacter = "@";
    //   let inputCharacterNumber = alphabet.indexOf(inputCharacter);
    //   console.log("line 50    inputCharacter  " + inputCharacter);
    //   console.log(
    //     "line 52    alphabet.indexOf(inputCharacter)   " +
    //       alphabet.indexOf(inputCharacter)
    //   );
    //   console.log("line 55    inputCharacterNumber  " + inputCharacterNumber);

    //   if (alphabet.includes(inputCharacter)) {
    //     console.log(
    //       "line 59    Object.values(codex[inputCharacterNumber])   " +
    //         Object.values(codex[inputCharacterNumber])
    //     );
    //     console.log(
    //       "line 63    Object.keys(codex[inputCharacterNumber])   " +
    //         Object.keys(codex[inputCharacterNumber])
    //     );
    //     console.log("true");
    //     result.push(Object.values(codex[inputCharacterNumber]));
    //   } else {
    //     console.log("false");
    //     result.push(inputCharacter);
    //   }
    // }
    // console.log('line 73    result.join("")    ' + result.join(""));
    // return result.join("");

    // for (i = 0; i < input.length; i++) {
    //   let inputCharacter = input[i];
    //   // console.log(input[i]);
    //   console.log("line 42 this is inputCharacter: " + inputCharacter);
    //   // console.log(codex[inputCharacter]);
    //   console.log("line 43 this is codex.keys" + codex.keys);
    //   for (i = 0; i < codex.length; i++) {
    //     let codexObject = codex[i];
    //     console.log("line 46 this is codexObject " + codexObject);
    //   }
    // }
    // console.log("********************************************************");
    // console.log("line 39 0 this a console log");
    // console.log(`this is codex: ${codex}`);
    // console.log(`line 41 this is input: ${input}`);
    // console.log(`tline 42 his is input[1]: ${input[1]}`);
    // console.log(
    //   "line 44 this is Object.keys.codex[input[1]]:" +
    //     Object.keys(codex[input[1]])
    // );
    // console.log(
    //   `line 48 this is Object.keys.codex[input[1]]: ${Object.keys(
    //     codex[input[1]]
    //   )}`
    // );
    // console.log(
    //   `line 53 this is Object.keys.codex[1]: ${Object.keys(codex[12])}`
    // );
    // console.log(
    //   `line 55 this is Object.values.codex[1]: ${Object.values(codex[12])}`
    // );
    // console.log(codex.find(Object.keys(input[0])))(
    //   "********************************************************"
    // );
    // if (Object.values(codex.includes(input[20]))) {
    //   console.log(`true ${input[20]}`);
    // } else {
    //   console.log(`false`);
    // }
    /*// your solution code here
    //1-need to return an array with the codded message
    //2-- so declare that up top.
    let result = [];
    console.log(`this is result: ${result}`);
    console.log(`0 this is input: ${input}`);

    //1- the encode parameter will switch between returning the numbers=values or the corisponding letters=key.
    if (encode) {
      //--------------Do encode first
      //1-    input = input.toLowerCase();
      input = input.toLowerCase();
      console.log(`1 this is input: ${input}`);

      //1- take the input string and loop it to get each individual element of that string.
      for (i = 0; i < input.length; i++) {
        //2-- declare the variable for the elementOfInput
        let inputCharacter = input[i];
        console.log(`0 this is inputCharacter: ${inputCharacter}`);
        codex.forEach((codeNumber) => {
          console.log(
            `0 this is codex[`${ inputCharacter }`]: ${codex[inputCharacter]}`
          );
          if (codeNumber === inputCharacter)
            console.log(`1 this is inputCharacter: ${inputCharacter}`);
        });

        // 2--if it is NOT! (!alphabet.inclueds(elementOfInput) use .push on that elementOfInput directly into the return array = result
        //   if (!alphabet.includes(inputCharacter)) {
        //   result.push(inputCharacter);
        //   console.log(`1 this is inputCharacter: ${inputCharacter}`);
        // } else 
    if (alphabet.includes(inputCharacter)) {
          let codeNumber = alphabet[i];
          // 2--take that character=elementOfInput and see if it is included inside of the "alphabet"string.
          // 3---if it (alphabet.includes(elementOfInput))=true
          // 4----store that alphabet.indexOf in a new var = codeNumber.
          let inputCharacterNumber = alphabet.indexOf(inputCharacter);
          // 5----- loop through the letterToNumbers array
          for (i = 0; i < codex.length; i++) {
            // 6------then push codex[i = alphabet.indexOf].value. to result array
            result.push(codex[codeNumber]);
          }
        }
      }
    }
    console.log(result);
    return result.toString;
    // return the result arrayas a string
    // lastly run the

    for (i = 0; i < input.length; i++) {
      let inputCharacter = input[i];
      if (alphabet.includes(inputCharacter)) {
        result.push(inputCharacter);
      } else {
        result.push(inputCharacter);
      }
    }*/
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
