# 💎 Olivia - Jewellery E-commerce Web App

**Olivia** is a full-featured jewellery e-commerce platform built using the MERN stack with Firebase Authentication. It offers a clean UI, real-time user-specific cart and favourites, and a promotional homepage powered by a responsive carousel.

---

## 🛠 Tech Stack

- **Frontend:** React + Vite, CSS3
- **Backend:** Node.js + Express.js
- **Database:** MongoDB Atlas
- **Authentication:** Firebase Authentication (Email/Password)
- **Routing:** React Router DOM
- **State Management:** React Context API + LocalStorage
- **Carousel:** `react-responsive-carousel`

---

## 📂 Features

- 🖼 **Hero Carousel:** Eye-catching image carousel with promotional content
- 🛍 **All Products Page:** Browse rings, necklaces, bracelets, and more
- ❤️ **Favourites:** Add/remove items to favourites (only visible when logged in)
- 🛒 **Cart Management:** Add/remove/update quantity with persistence
- 🔐 **Firebase Authentication:** Secure login/signup with route protection
- 🔄 **State Sync:** Cart and Favourites persist via LocalStorage
- 💳 **Dummy Checkout:** Simulates a payment process
- 🧾 **Product Detail View:** View detailed info and pricing for each product
- 📱 **Responsive UI:** Mobile-friendly design

---


---

## 🔐 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com) and create a new project
2. Enable **Email/Password Authentication**
3. Add your web app and copy the config
4. Replace with your config in `client/src/firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  // ...
};
