import Binance from '../clients/binance'
import Kraken from '../clients/kraken'
import Huobi from '../clients/huobi'

const EXCHANGES_MAPPING: any = {
  'Binance': 'BTCUSDT',
  'Kraken': 'XBTUSD',
  'Huobi': 'btcusdt',
};

const EXCHANGES = [Binance, Kraken, Huobi]

function calculateMidPriceAverage(ask: number, bid: number) {
    return ((ask + bid) / 2).toFixed(2)
};


export {
  EXCHANGES,
  EXCHANGES_MAPPING,
  calculateMidPriceAverage
};
