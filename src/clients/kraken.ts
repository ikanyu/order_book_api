import { Kraken } from "node-kraken-api";

interface GlobalPriceIndex {
  name: string
  average_mid_price: BigInteger;
}

class KrakenClient {
  ws: any;
  client: any;

  constructor() {
    this.client = new Kraken();
  }

  getMidPrice = async (symbol: string) => {
    const result: any = await this.client.depth({pair: symbol, count: 10});

    const asks = parseFloat(result['XXBTZUSD']['asks'][0][0]);
    const bids = parseFloat(result['XXBTZUSD']['bids'][0][0]);

    const midPriceAverage = ((asks + bids) / 2).toFixed(2);

    return (midPriceAverage);
  };
}

export default new KrakenClient();
