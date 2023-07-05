class Util {
  static calculateMidPriceAverage = (ask: any, bid: any) => {
    return ((ask + bid) / 2).toFixed(2)
  };
}

export default Util;
