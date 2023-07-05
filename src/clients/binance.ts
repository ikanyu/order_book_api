const { Spot } = require('@binance/connector')
import { calculateMidPriceAverage } from "../lib/util"

class Binance {
  client: typeof Spot;

  constructor() {
    this.client = new Spot();
  }

  getMidPrice = async (symbol: string) => {
    const result = await this.client.depth(symbol);

    const ask = parseFloat(result.data.asks[0][0]);
    const bid = parseFloat(result.data.bids[0][0]);

    const midPriceAverage = calculateMidPriceAverage(ask, bid);

    return midPriceAverage;
  };
}

export default new Binance();
