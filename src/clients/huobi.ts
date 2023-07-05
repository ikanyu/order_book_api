import axios, { AxiosResponse } from 'axios';

interface GlobalPriceIndex {
  name: string
  average_mid_price: BigInteger;
}

class Huobi {
  ws: any;
  client: any;

  constructor() {
    // this.ws = new WebSocket('wss://ws.kraken.com');
    // this.client = new Kraken();
  }

  getMidPrice = async (symbol: string) => {
    let result: AxiosResponse = await axios.get(`https://api.huobi.pro/market/depth?symbol=${symbol}&type=step0&depth=5`);

    const asks = parseFloat(result.data.tick.asks[0][0]);
    const bids = parseFloat(result.data.tick.bids[0][0]);

    const midPriceAverage = ((asks + bids) / 2).toFixed(2);

    return (midPriceAverage);
  };
}

export default new Huobi();
