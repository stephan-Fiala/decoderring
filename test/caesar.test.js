// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caser() tests", () => {
  it("1) Return false if shift is 0", () => {
    const message = "abcdefghijklmnopqrstuvwxyz";
    const shift = 0;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("2) Return false if shift is above 25", () => {
    const message = "abcdefghijklmnopqrstuvwxyz";
    const shift = 30;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("3) Return false if shift is less than -25", () => {
    const message = "abcdefghijklmnopqrstuvwxyz";
    const shift = -30;
    const actual = caesar(message, shift);
    expect(actual).to.be.false;
  });
  it("4) Encode a message by shifting the letters", () => {
    const message = "abcdefghijklmnopqrstuvwxyz";
    const shift = 17;
    const actual = caesar(message, shift);
    const expected = "rstuvwxyzabcdefghijklmnopq";
    expect(actual).to.equal(expected);
  });
  it("5) Leaves spaces and other symbols as is", () => {
    const message = "This should work!";
    const shift = 5;
    const actual = caesar(message, shift);
    const expected = "ymnx xmtzqi btwp!";

    expect(actual).to.equal(expected);
  });
  it("6) Ignore capital letters", () => {
    const message = "CaPs does NOT mATter";
    const shift = 4;
    const actual = caesar(message, shift);
    const expected = "getw hsiw rsx qexxiv";
    expect(actual).to.equal(expected);
  });
  it("7) Handle letters at the end of the alphabet", () => {
    const message = "abcdefghijklmnopqrstuvwxyz";
    const shift = 7;
    const actual = caesar(message, shift);
    const expected = "hijklmnopqrstuvwxyzabcdefg";
    expect(actual).to.equal(expected);
  });
  //   it("Negative shift that will shift to the left", () => {
  //     const message = "abcdefghijklmnopqrstuvwxyz";
  //     const shift = -3;
  //     const actual = caesar(message, shift);
  //     const expected = "xyzabcdefghijklmnopqrstuvw";
  //     expect(actual).to.equal(expected);
  //   });
  //   it("Decode a message in the opposite direction", () => {
  //     const message = "abcdefghijklmnopqrstuvwxyz";
  //     const shift = 3;
  //     const actual = caesar(message, shift, false);
  //     const expected = "xyzabcdefghijklmnopqrstuvw";

  //     expect(actual).to.equal(expected);
  //   });
  //   it("Leaves spaces and other symbols", () => {
  //     const message = "ymnx xmtzqi btwp!";
  //     const shift = 3;
  //     const actual = caesar(message, shift, false);
  //     const expected = "vjku ujqwnf yqtm!";

  //     expect(actual).to.equal(expected);
  //   });
  //   it("Handle letters at the end of the alphabet", () => {
  //     const message = "Zyxwvutsrqponmlkjihgfedcba";
  //     const shift = 3;
  //     const actual = caesar(message, shift, false);
  //     const expected = "wvutsrqponmlkjihgfedcbazyx";

  //     expect(actual).to.equal(expected);
  //   });
  //   it("Negative shift to the left", () => {
  //     const message = "ocdn ncjpgy rjmf!";
  //     const shift = -5;
  //     const actual = caesar(message, shift, false);
  //     const expected = "this should work!";

  //     expect(actual).to.equal(expected);
  //   });
});
