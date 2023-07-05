import http from 'http';
import express, { Express } from 'express';

import globalPriceIndexesRoutes from './routes/global_price_indexes';

const router: Express = express();

router.use('/', globalPriceIndexesRoutes);

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
