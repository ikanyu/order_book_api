import express from 'express';
import UsersController from '../controllers/global_price_indexes';
const router = express.Router();

router.route('/global_price_indexes')
      .get(UsersController.getGlobalPriceIndexes);

export = router;
