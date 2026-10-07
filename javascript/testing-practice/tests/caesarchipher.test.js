import { caesarCipher } from "..";

test("Default", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("Test Wrapping", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

// If z is position 25, and i shift it three places, i get 28.
// But what do i want 28 to represent? 2. 28 modulo 26 is 2.

test("")