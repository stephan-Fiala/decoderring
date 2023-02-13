// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() tests", () => {
  it("1) return false if substitution alphabet is not exactly 26 characters", () => {
    const message = "message";
    const alphabet = "short";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
  it("2) return phrase translated with substitution alphabet", () => {
    const message = "message";
    const alphabet = "jswabumoknitfxrdhvygcplzeq";
    const actual = substitution(message, alphabet);
    const expected = "fbyyjmb";
    expect(actual).to.equal(expected);
  });
  it("3) return false if any duplicate characters given alphabet", () => {
    const message = "message";
    const alphabet = "abcefghijkllmnopqqrstuvwxz";
    const actual = substitution(message, alphabet);
    expect(actual).to.be.false;
  });
  it("4) should preserve spaces", () => {
    const message = "thats my jam";
    const alphabet = ".fcbwauhxeszgimjnordykvtpl";
    const actual = substitution(message, alphabet);
    const expected = "dh.dr gp e.g";
    expect(actual).to.equal(expected);
  });
  it("5) should preserve spaces", () => {
    const message = "dh.dr gp e.g";
    const alphabet = ".fcbwauhxeszgimjnordykvtpl";
    const actual = substitution(message, alphabet, false);
    const expected = "thats my jam";
    expect(actual).to.equal(expected);
  });
});
