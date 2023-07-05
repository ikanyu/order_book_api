import axios, { AxiosResponse } from 'axios';
import Util from "../lib/util"

class Huobi {
  ws: any;
  client: any;

  constructor() {
  }

  getMidPrice = async (symbol: string) => {
    let result: AxiosResponse = await axios.get(`https://api.huobi.pro/market/depth?symbol=${symbol}&type=step0&depth=5`);

    const ask = parseFloat(result.data.tick.asks[0][0]);
    const bid = parseFloat(result.data.tick.bids[0][0]);

    const midPriceAverage = Util.calculateMidPriceAverage(ask, bid);

    return midPriceAverage;
  };
}

export default new Huobi();
