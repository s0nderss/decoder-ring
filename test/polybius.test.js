const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
    it("should encode a message from letters to number pairs", () => {
        const message = "hello"
        const actual = polybius(message)
        const expected = "3251131343"

        expect(actual).to.equal(expected)
    })
    it("should return 42 for both i and j", () => {
        const message = "jiggle"
        const actual = polybius(message)
        const expected = "424222221351"

        expect(actual).to.equal(expected)
    })
    it("should leave spaces where they are", () => {
        const message = "hello world"
        const actual = polybius(message)
        const expected = "3251131343 2543241341"

        expect(actual).to.equal(expected)
    })
})

describe("decoding a message", () => {
    it("should decode a message from number pairs to letters", () => {
        const message = "3251131343"
        const actual = polybius(message, false)
        const expected = "hello"

        expect(actual).to.equal(expected)
    })
    it("should translate 42 to both i and j", () => {
        const message = "424222221351"
        const actual = polybius(message, false)
        
        expect(actual).to.include("i")
        expect(actual).to.include("j")
    })
    it("should leave spaces where they are", () => {
        const message = "3251131343 2543241341"
        const actual = polybius(message, false)
        const expected = "hello world"

        expect(actual).to.equal(expected)
    })
    it("should return false if the total length is odd", () => {
        const message = "3251131343 25432413411";
        const actual = polybius(message, false);

        expect(actual).to.be.false;
    })
})
