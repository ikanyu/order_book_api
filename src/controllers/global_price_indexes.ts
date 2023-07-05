import { Request, Response, NextFunction } from 'express';
// import axios, { AxiosResponse } from 'axios';
import Binance from '../clients/binance'
import Kraken from '../clients/kraken'
import Huobi from '../clients/huobi'
// import { Kraken } from 'node-kraken-api';

interface GlobalPriceIndex {
  platform_name: string;
  mid_price_average: BigInteger;
}

class GlobalPriceIndexController {
  getGlobalPriceIndexes = async (req: Request, res: Response, next: NextFunction) => {
    const exchangeParams: string = req.params.exchange;
    const exchange = exchangeParams.charAt(0).toUpperCase() + exchangeParams.slice(1);

    let result;

    if (exchange == 'Binance') {
      result = await Binance.getMidPrice('BTCUSDT');
    } else if (exchange == 'Kraken') {
      result = await Kraken.getMidPrice('XBTUSD');
    } else if (exchange == 'Huobi') {
      result = await Huobi.getMidPrice('btcusdt');
    }
    // console.log(result);
    // let result: AxiosResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    // let globalPriceIndexes: [GlobalPriceIndex] = result;

    return res.status(200).json({
        message: result
    });
  };
}

export default new GlobalPriceIndexController();
