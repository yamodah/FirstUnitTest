// Write your tests here!
const findStudentScoreByName = require("../src/solution")
const expect = require("chai").expect

describe("findStudentScoreByName", ()=>{
    it("should return the corresponding score for the correct student",()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ]
        const expected = 7.4
        const actual = findStudentScoreByName(students, "Morgan Sutton")
        expect(actual).to.equal(expected)

    })
    it("should return the null for a non-existent student",()=>{
        const students = [
            { name: "Leo Yeon-Joo", score: 8.9 },
            { name: "Morgan Sutton", score: 7.4 },
            { name: "Natalee Vargas", score: 9.2 },
          ]
        const expected = null
        const actual = findStudentScoreByName(students, "Pablo Escobar")
        expect(actual).to.equal(expected)
    })
})