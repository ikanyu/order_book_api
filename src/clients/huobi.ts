import axios, { AxiosResponse } from 'axios';
import { calculateMidPriceAverage } from "../lib/util"

class Huobi {
  ws: any;
  client: any;

  constructor() {
  }

  getMidPrice = async (symbol: string) => {
    let result: AxiosResponse = await axios.get(`https://api.huobi.pro/market/depth?symbol=${symbol}&type=step0&depth=5`);

    if (result.data.status === "ok") {
      const ask = parseFloat(result.data.tick.asks[0][0]);
      const bid = parseFloat(result.data.tick.bids[0][0]);

      const midPriceAverage = calculateMidPriceAverage(ask, bid);

      return midPriceAverage;
    } else {
      return { error: "There's an error retrieving order book." }
    }
  };
}

export default new Huobi();
