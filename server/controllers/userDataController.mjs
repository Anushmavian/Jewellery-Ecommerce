import UserData from '../models/UserData.mjs';

export const getCart = async (req, res) => {
  try {
    const data = await UserData.findOne({ firebaseUserId: req.userId }).populate('cart.productId');
    res.json(data?.cart || []);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
};

export const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let userData = await UserData.findOne({ firebaseUserId: req.userId });
    if (!userData) userData = new UserData({ firebaseUserId: req.userId, cart: [], favourites: [] });

    const existing = userData.cart.find(item => item.productId.toString() === productId);
    if (existing) existing.quantity += quantity;
    else userData.cart.push({ productId, quantity });

    await userData.save();
    res.json({ message: 'Added to cart' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to add to cart' });
  }
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  try {
    await UserData.updateOne(
      { firebaseUserId: req.userId },
      { $pull: { cart: { productId } } }
    );
    res.json({ message: 'Removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove item' });
  }
};
