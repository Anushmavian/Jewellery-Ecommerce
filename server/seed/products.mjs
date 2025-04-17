import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.mjs';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("❌ MONGO_URI not defined in .env file");
  process.exit(1);
}

const products = [
  {
    name: "Gold Wide Choker",
    category: "Necklaces",
    price: 22.00,
    imageUrl: "/images/product1.webp",
    description: "The Gold Wide Choker Necklace is the perfect addition to any trendsetter's jewellery collection. Its sleek, minimalist design makes it a versatile piece that can be styled in a variety of ways."
  },
  {
    name: "Gold Jingle Layered",
    category: "Necklaces",
    price: 25.50,
    imageUrl: "/images/product2.webp",
    description: "Pure gold necklace with intricate design."
  },
  {
    name: "Stacking Chain",
    category: "Necklaces",
    price: 20.00,
    imageUrl: "/images/product3.webp",
    description: "Timeless Chain any occasion."
  },
  {
    name: "Layered Chain",
    category: "Necklaces",
    price: 35.00,
    imageUrl: "/images/product4.webp",
    description: "Stylish Layered chain with a modern touch."
  },
  {
    name: "WaterProof Chain",
    category: "Necklaces",
    price: 16.00,
    imageUrl: "/images/product5.webp",
    description: "Delicate Waterproof chain to complete your look."
  },
  {
    name: "Silver Midnight cord",
    category: "Necklaces",
    price: 27.00,
    imageUrl: "/images/product6.webp",
    description: "Compact and elegant box to store your treasures."
  },
  {
    name: "Elegant Silver Ring",
    category: "Rings",
    price: 18.00,
    imageUrl: "/images/product7.jpg",
    description: "Elegant silver ring with smooth finish."
  },
  {
    name: "Modern Pearl Bracelet",
    category: "Wristwear",
    price: 30.00,
    imageUrl: "/images/product8.jpg",
    description: "Classy bracelet with pearls."
  },
  {
    name: "Crystal Drop Earrings",
    category: "Earrings",
    price: 19.99,
    imageUrl: "/images/product9.jpg",
    description: "Dainty crystal earrings perfect for evening wear."
  },
  {
    name: "Gold Hoop Earrings",
    category: "Earrings",
    price: 15.00,
    imageUrl: "/images/product10.jpg",
    description: "Classic gold hoops for a bold statement."
  },
  {
    name: "Silver Ankle Chain",
    category: "Anklets",
    price: 12.00,
    imageUrl: "/images/product11.jpg",
    description: "Delicate silver anklet for everyday elegance."
  },
  {
    name: "Beaded Anklet",
    category: "Anklets",
    price: 10.50,
    imageUrl: "/images/product12.jpg",
    description: "Colorful beaded anklet perfect for summer vibes."
  },
  {
    name: "Minimalist Cuff",
    category: "Wristwear",
    price: 28.00,
    imageUrl: "/images/product13.webp",
    description: "Sleek cuff bracelet for a modern look."
  },
  {
    name: "Velvet Jewellery Box",
    category: "Jwellery Box",
    price: 35.00,
    imageUrl: "/images/product14.jpg",
    description: "Elegant velvet box to store your precious jewellery."
  },
  {
    name: "Travel Jewellery Organizer",
    category: "Jwellery Box",
    price: 29.00,
    imageUrl: "/images/product15.jpg",
    description: "Compact travel jewellery box with multiple compartments."
  }

];

const seedProducts = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Sample products seeded!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  }
};

seedProducts();