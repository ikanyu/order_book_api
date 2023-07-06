import Huobi from "../../clients/huobi"
import nock from 'nock';

describe("Huobi", () => {
  test('should return mid price average', async () => {
    const responseValue = {
                            status: "ok",
                            tick: {
                              asks: [["1.0", "1.0"]],
                              bids: [["1.0", "1.0"]]
                            }
                          };
    nock('https://api.huobi.pro/market')
                        .get('/depth?symbol=btcusdt&type=step0&depth=5')
                        .reply(200, responseValue)

    const result = await Huobi.getMidPrice('btcusdt');

    expect(result).toMatchObject({ midPrice: '1.00' });
  });

  test('issue on the endpoint returns error', async () => {
    const responseValue = { status: "error" };
    nock('https://api.huobi.pro/market')
                        .get('/depth?symbol=btcusdt&type=step0&depth=5')
                        .reply(200, responseValue)

    const result = await Huobi.getMidPrice('btcusdt');

    expect(result).toMatchObject({ error: "There's an error retrieving order book." });
  });
})
