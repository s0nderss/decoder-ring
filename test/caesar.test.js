const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("error handlin", () => {
    it("should return false if the shift amnt is 0", () => {
        const msg = "sleepy cat"
        const shift = 0
        const actual = caesar(msg, shift)

        expect(actual).to.be.false
    })
    it("should return false if the shift is above 25", () => {
        const msg = "sleepy cat"
        const shift = 26
        const actual = caesar(msg, shift)

        expect(actual).to.be.false
    })
    it("should return false if the shift is below -25", () => {
        const msg = "sleepy cat"
        const shift = -26
        const actual = caesar(msg, shift)

        expect(actual).to.be.false
    })
})

describe("encoding", () => {
    it("should encode via shiftin the letters", () => {
        const msg = "sleepy"
        const shift = 7
        const actual = caesar(msg, shift)
        const expected = "zsllwf"

        expect(actual).to.equal(expected)
    })
    it("should leave spaces and other symbols where they are", () => {
        const msg = "sleepy cat."
        const shift = 7
        const actual = caesar(msg, shift)
        const expected = "zsllwf jha."

        expect(actual).to.equal(expected)
    })
    it("should ignore case", () => {
        const msg = "Sleepy Cat"
        const shift = 7
        const actual = caesar(msg, shift)
        const expected = "zsllwf jha"

        expect(actual).to.equal(expected)
    })
    it("should handle letters at the end of the alphabet", () => {
        const msg = "zonked"
        const shift = 7
        const actual = caesar(msg, shift)
        const expected = "gvurlk"

        expect(actual).to.equal(expected)
    })
    it("should be able to shift to the left w/ a negative num", () => {
        const msg = "zonked cat"
        const shift = -7
        const actual = caesar(msg, shift)
        const expected = "shgdxw vtm"

        expect(actual).to.equal(expected)
    })
})//nice

describe("decoding", () => {
    it("should decode via shiftin the letters the way they came", () => {
        const msg = "zsllwf"
        const shift = 7
        const actual = caesar(msg, shift, false)
        const expected = "sleepy"

        expect(actual).to.equal(expected)
    })
    it("should leave spaces and symbols where they are", () => {
        const msg = "zsllwf jha."
        const shift = 7
        const actual = caesar(msg, shift, false)
        const expected = "sleepy cat."

        expect(actual).to.equal(expected)
    })
    it("should ignore capital letters", () => {
        const msg = "ZsLLwf jHa"
        const shift = 7
        const actual = caesar(msg, shift, false)
        const expected = "sleepy cat"

        expect(actual).to.equal(expected)
    })
    it("should handle letters at the end of the alphabet", () => {
        const msg = "gvurlk"
        const shift = 7
        const actual = caesar(msg, shift, false)
        const expected = "zonked"

        expect(actual).to.equal(expected)
    })
    it("should be able to shift to the left w/ a negative num", () => {
        const msg = "shgdxw vtm"
        const shift = -7
        const actual = caesar(msg, shift, false)
        const expected = "zonked cat"

        expect(actual).to.equal(expected)
    })
})
