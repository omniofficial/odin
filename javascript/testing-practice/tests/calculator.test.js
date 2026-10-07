import { calculator } from "..";

test("Calculator adds", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

test("Calculator subtracts", () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test("Calculator multiplies", () => {
    expect(calculator.multiply(5, 3)).toBe(15);
});

test("Calculator divides", () => {
    expect(calculator.divide(20, 10)).toBe(2);
});
