import { findFirstDuplicate } from "./findFirstDuplicate";

describe("findFirstDuplicate", () => {
  it("find the first duplicated number in array", () => {
    const arr = [1, 2, 4, 4, 2];
    expect(findFirstDuplicate(arr)).toBe(4);
  });

  it("return -1 if no duplicated number was found in array", () => {
    const arr = [1, 2, 3, 4, 5];
    expect(findFirstDuplicate(arr)).toBe(-1);
  });
});
