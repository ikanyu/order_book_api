import { Request, Response, NextFunction } from 'express';

import Binance from '../clients/binance'
import Kraken from '../clients/kraken'
import Huobi from '../clients/huobi'

class GlobalPriceIndexController {
  getGlobalPriceIndexes = async (req: Request, res: Response, next: NextFunction) => {
    const exchangeParams: string = req.params.exchange;
    const exchange = exchangeParams.charAt(0).toUpperCase() + exchangeParams.slice(1);

    let midPrice;

    if (exchange == 'Binance') {
      midPrice = await Binance.getMidPrice('BTCUSDT');
    } else if (exchange == 'Kraken') {
      midPrice = await Kraken.getMidPrice('XBTUSD');
    } else if (exchange == 'Huobi') {
      midPrice = await Huobi.getMidPrice('btcusdt');
    }

    return res.status(200).json({
        data: {
          exchangeName: exchange,
          midPrice: midPrice
        }
    });
  };
}

export default new GlobalPriceIndexController();
