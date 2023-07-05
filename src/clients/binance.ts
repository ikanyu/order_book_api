import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
const { Spot } = require('@binance/connector')

interface GlobalPriceIndex {
  name: string
  average_mid_price: BigInteger;
}

class Binance {
  client: typeof Spot;

  constructor() {
    this.client = new Spot();
  }

  getMidPrice = async (symbol: string) => {
    const result: AxiosResponse = await this.client.depth(symbol);

    const asks = parseFloat(result.data.asks[0][0]);
    const bids = parseFloat(result.data.bids[0][0]);

    const midPriceAverage = ((asks + bids) / 2).toFixed(2);
    console.log(result.data)
    return (midPriceAverage);
  };
}

export default new Binance();
