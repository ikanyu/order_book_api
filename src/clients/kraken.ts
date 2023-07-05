import { Kraken } from "node-kraken-api";
import Util from "../lib/util"

class KrakenClient {
  ws: any;
  client: any;

  constructor() {
    this.client = new Kraken();
  }

  getMidPrice = async (symbol: string) => {
    const result: any = await this.client.depth({pair: symbol, count: 10});

    const ask = parseFloat(result['XXBTZUSD']['asks'][0][0]);
    const bid = parseFloat(result['XXBTZUSD']['bids'][0][0]);

    const midPriceAverage = Util.calculateMidPriceAverage(ask, bid);

    return midPriceAverage;
  };
}

export default new KrakenClient();
