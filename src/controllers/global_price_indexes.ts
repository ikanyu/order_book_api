import { Request, Response, NextFunction } from 'express';
import { EXCHANGES, EXCHANGES_MAPPING } from '../lib/util'

class GlobalPriceIndexController {
  getGlobalPriceIndexes = async (req: Request, res: Response, next: NextFunction) => {
    let results: any;

    results = [];

    let averagePrice: any;
    averagePrice = 0;

    try {
      for await(const exchange of EXCHANGES) {
        const exchangeString = exchange.constructor.name;

        const symbol = EXCHANGES_MAPPING[exchangeString];
        const response: any = await exchange.getMidPrice(symbol);

        if (response.hasOwnProperty('midPrice')) {
          averagePrice = averagePrice + parseFloat(response.midPrice);
        }
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
      data: results,
      averagePrice: averagePrice / EXCHANGES.length
    })
  };
}

export default new GlobalPriceIndexController();
