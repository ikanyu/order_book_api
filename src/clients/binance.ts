const { Spot } = require('@binance/connector')
import { calculateMidPriceAverage } from "../lib/util"

class Binance {
  client: typeof Spot;

  constructor() {
    this.client = new Spot();
  }

  getMidPrice = async (symbol: string) => {
    const result = await this.client.depth(symbol);

    if (result.status === 200) {
      const ask = parseFloat(result.data.asks[0][0]);
      const bid = parseFloat(result.data.bids[0][0]);

      const midPriceAverage = calculateMidPriceAverage(ask, bid);

      return { midPrice: midPriceAverage };
    } else {
      return { error: "There's an error retrieving order book." }
    }
  };
}

export default new Binance();
