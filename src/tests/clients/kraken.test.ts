import KrakenClient from "../../clients/kraken"

describe("Kraken", () => {
  test('should return mid price average', async () => {
    const spy = jest.spyOn(KrakenClient.client, 'depth').mockReturnValue(
      {
        XXBTZUSD: {
          asks: [["1.0", "1.0"]],
          bids: [["1.0", "1.0"]]
        }
      }
    )
    await KrakenClient.client.depth();

    expect(spy).toBeCalled();
    const result = await KrakenClient.getMidPrice('XBTUSD');

    expect(result).toBe('1.00');
  });
})
