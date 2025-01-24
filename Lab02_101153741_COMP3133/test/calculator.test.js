import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../app/calculator.js';

describe("Calculator Application Tests", () => {

    // Addition
    it('add(5, 2) expected result 7 PASS', () => {
        expect(add(5, 2)).to.equal(7);
    });

    it('add(5, 2) expected result 8 FAIL', () => {
        expect(add(5, 2)).to.equal(8);
    });

    // Subtraction
    it('subtract(5, 2) expected result 3 PASS', () => {
        expect(subtract(5, 2)).to.equal(3);
    });

    it('subtract(5, 2) expected result 5 FAIL', () => {
        expect(subtract(5, 2)).to.equal(5);
    });

    // Multiplication
    it('multiply(5, 2) expected result 10 PASS', () => {
        expect(multiply(5, 2)).to.equal(10);
    });

    it('multiply(5, 2) expected result 12 FAIL', () => {
        expect(multiply(5, 2)).to.equal(12);
    });

    // Division
    it('divide(10, 2) expected result 5 PASS', () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it('divide(10, 2) expected result 2 FAIL', () => {
        expect(divide(6, 2)).to.equal(2);
    });
});
