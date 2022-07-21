const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("error handlin", () => {
    it("should return false if the substituted alphabet is missing", () => {
        const msg = "blasphemy"
        const actual = substitution(msg)

        expect(actual).to.be.false
    })
    it("should return false if the amount of letters is not Exactly 26", () => {
        const msg = "blasphemy"
        const alphabet = "ayo"
        const actual = substitution(msg, alphabet)

        expect(actual).to.be.false
    })
    it("should return false if the letters arent unique", () => {
        const msg = "blasphemy"
        const alphabet = "zlzlzlzlzlzlzlzlzlzlzlzlzl"
        const actual = substitution(msg, alphabet)

        expect(actual).to.be.false
    })
})

describe("encoding", () => {
    it("should encode w/ the given sub alphabet", () => {
        const msg = "blasphemy"
        const alphabet = "qwertyasdfghzxcvbujnikmolp"
        const actual = substitution(msg, alphabet)
        const expected = "whqjvstzl"

        expect(actual).to.equal(expected)
    })
    it("should work with any kind of unique characters", () => {
        const msg = "cooldude"
        const alphabet = "qw3rty4sdfghzxcvbu2nikm0lp"
        const actual = substitution(msg, alphabet)
        const expected = "3cchrirt"

        expect(actual).to.equal(expected)
    })
    it("should keep spaces where they are", () => {
        const msg = "submissive and blasphemous"
        const alphabet = "qw3rty4sdfghzxcvbu2nikm0lp"
        const actual = substitution(msg, alphabet)
        const expected = "2iwzd22dkt qxr whq2vstzci2"

        expect(actual).to.equal(expected)
    })
})

describe("decoding", () => {
    it("should decode w/ given sub alphabet", () => {
        const msg = "whqjvstzl"
        const alphabet = "qwertyasdfghzxcvbujnikmolp"
        const actual = substitution(msg, alphabet, false)
        const expected = "blasphemy"

        expect(actual).to.equal(expected)
    })
    it("should work with any unique characters", () => {
        const msg = "3cchrirt"
        const alphabet = "qw3rty4sdfghzxcvbu2nikm0lp"
        const actual = substitution(msg, alphabet, false)
        const expected = "cooldude"

        expect(actual).to.equal(expected)
    })
    it("should keep spaces where they are", () => {
        const msg = "2iwzd22dkt qxr whq2vstzci2"
        const alphabet = "qw3rty4sdfghzxcvbu2nikm0lp"
        const actual = substitution(msg, alphabet, false)
        const expected = "submissive and blasphemous"

        expect(actual).to.equal(expected)
    })
})
