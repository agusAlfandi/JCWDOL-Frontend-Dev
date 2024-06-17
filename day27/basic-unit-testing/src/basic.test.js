import { describe, it, expect } from "vitest";
import { sum, max, FizBuz, Factorial } from "./basic";

// describe("sumPlus10", () => {
//   it("should return the sum of a + b + 10 when a, b is integer", () => {
//     const a = 5;
//     const b = 10;

//     const res = sum(a, b);

//     expect(res).toBe(25);
//   });

//   it("should return  NaN when any of the paramater is not provides", () => {
//     expect(sum(1)).toBeNaN;
//   });

//   describe("max", () => {
//     it("should return th first argument if it grater then the second", () => {
//       expect(max(5, 3)).toBe(5);
//     });
//   });
// });
describe("Factorial", () => {
  // it("Harus mengembalikan FizBuz ")
  it("harus mengembalikan number", () => {
    expect(Factorial(4)).toBe(24);
  });

  it("harus mengembalikan NaN", () => {
    expect(Factorial(-1)).toBeNaN;
  });

  it("harus mengembalikan 1", () => {
    expect(Factorial(0)).toBe(1);
  });
  //   expect(FizBuz())
});
