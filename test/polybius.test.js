// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() test", () => {
  it("1) both 'i' and 'j' to 42", () => {
    const message = "jiij";
    const actual = polybius(message);
    const expected = "42424242";
    expect(actual).to.equal(expected);
  });
  it("2) 42 returns both 'i' and 'j'", () => {
    const message = "424222221351";
    const actual = polybius(message, false);
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });
  it("3) ignore capital letters", () => {
    const message = "A Message";
    const shift = 3;
    const actual = polybius(message, shift);
    const expected = "11 23513434112251";
    expect(actual).to.equal(expected);
  });
  it("4) encode: leave spaces as is", () => {
    const message = "my message";
    const actual = polybius(message);
    const expected = "2345 23513434112251";

    expect(actual).to.equal(expected);
  });
  it("5) decode leave spaces as is", () => {
    const message = "2345 23513434112251";
    const actual = polybius(message, false);
    const expected = "my message";
    expect(actual).to.equal(expected);
  });
});
