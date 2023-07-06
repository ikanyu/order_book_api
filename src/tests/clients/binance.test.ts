import Binance from "../../clients/binance"
import nock from "nock"

describe("Binance", () => {
  test('should return mid price average', async () => {
    const spy = jest.spyOn(Binance.client, 'depth').mockReturnValue(
      {
        status: 200,
        data: {
          asks: [["1.0", "1.0"]],
          bids: [["1.0", "1.0"]]
        }
      }
    )

    const result = await Binance.getMidPrice('BTCUSDT');

    expect(result).toBe('1.00');
  });

  test('invalid symbol returns error', async () => {
    const spy = jest.spyOn(Binance.client, 'depth').mockReturnValue({ status: 400 })

    const result = await Binance.getMidPrice('btcusdt');

    expect(result).toMatchObject({ error: "There's an error retrieving order book." });
  });
})
