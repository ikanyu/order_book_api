
#  order_book_api

##  Intro

This repository consists of 1 API endpoint which returns the mid price average of BTC/USDT from the following exchanges

-  Binance

-  Kraken

-  Huobi



##  Setup

You can install the required dependencies by running the follow command

```

npm install

```

To start the server, run

```

npm run serve

```

To run the test cases, run

```

npm test

```



##  API Endpoint

```http

GET /global_price_indexes

```


|Status| Response Body Example |
|--|--|
| OK | <code>{"data": [<br>{"exchangeName":"Binance","midPrice": "31438.36"},<br>{"exchangeName": "KrakenClient","midPrice": "31395.05"},<br>{"exchangeName": "Huobi","midPrice": "31428.85"}<br>]}</code> |

###  Improvements to do if given more time

-  Given the amount of time given, I couldn't implement the WebSocket protocol as I am unfamiliar with it and requires more reading on the implementation.

-  More dynamic way of passing the symbol to be used in calling the API endpoints
