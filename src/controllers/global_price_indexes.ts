import { Request, Response, NextFunction } from 'express';

import Binance from '../clients/binance'
import Kraken from '../clients/kraken'
import Huobi from '../clients/huobi'
import { EXCHANGES, EXCHANGES_MAPPING } from '../lib/util'

class GlobalPriceIndexController {
  getGlobalPriceIndexes = async (req: Request, res: Response, next: NextFunction) => {
    let results: any;

    results = [];

    try {
      for await(const exchange of EXCHANGES) {
        const exchangeString = exchange.constructor.name;

        const symbol = EXCHANGES_MAPPING[exchangeString];
        const response = await exchange.getMidPrice(symbol);

        results.push(
          {
            exchangeName: exchangeString,
            midPrice: response
          }
        );
      }
    } catch(err) {
      next(err);
    }
    return res.status(200).json({
      data: results
    })
  };
}

export default new GlobalPriceIndexController();
