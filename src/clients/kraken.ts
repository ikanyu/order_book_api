import { Kraken } from "node-kraken-api";
import { calculateMidPriceAverage } from "../lib/util"

class KrakenClient {
  ws: any;
  client: any;

  constructor() {
    this.client = new Kraken();
  }

  getMidPrice = async (symbol: string) => {
    const result: any = await this.client.depth({pair: symbol, count: 10});

    if (result.length !== 0) {
      const ask = parseFloat(result['XXBTZUSD']['asks'][0][0]);
      const bid = parseFloat(result['XXBTZUSD']['bids'][0][0]);

      const midPriceAverage = calculateMidPriceAverage(ask, bid);

      return midPriceAverage;
    } else {
      return { error: "There's an error retrieving order book." }
    }
  };
}

export default new KrakenClient();
