import express from 'express';
import {
  getCart,
  addToCart,
  removeFromCart
} from '../controllers/userDataController.mjs';
import verifyUser from '../middleware/verifyUser.mjs';

const router = express.Router();

router.get('/', verifyUser, getCart);
router.post('/', verifyUser, addToCart);
router.delete('/:productId', verifyUser, removeFromCart);

export default router;
