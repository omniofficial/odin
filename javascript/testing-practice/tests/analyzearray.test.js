import { analyzeArray } from "..";

test("Determines if analyzeArray returns an object with desired properties", () => {
    const numbersArray = [1, 8, 3, 4, 2, 6];
    const arrayObject = analyzeArray(numbersArray);

    expect(arrayObject).toHaveProperty("average", 4);
    expect(arrayObject).toHaveProperty("min", 1);
    expect(arrayObject).toHaveProperty("max", 8);
    expect(arrayObject).toHaveProperty("length", 6);
});
