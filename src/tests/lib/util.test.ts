import { calculateMidPriceAverage } from "../../lib/util"

describe("calculateMidPriceAverage", () => {
  test('should return mid price average', () => {
    expect(calculateMidPriceAverage(1.00, 1.00)).toBe('1.00');
  });
})
