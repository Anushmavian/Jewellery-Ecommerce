
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const FavouritesContext = createContext();

export const useFavourites = () => useContext(FavouritesContext);

export const FavouritesProvider = ({ children }) => {
  const [user] = useAuthState(auth);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`favourites-${user.uid}`);
      if (stored) {
        setFavourites(JSON.parse(stored));
      }
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`favourites-${user.uid}`, JSON.stringify(favourites));
    }
  }, [favourites, user]);

  const toggleFavourite = (product) => {
    setFavourites((prev) => {
      const isFav = prev.find((item) => item._id === product._id);
      if (isFav) {
        return prev.filter((item) => item._id !== product._id);
      } else {
        return [...prev, product];
      }
    });
  };

  const isFavourite = (productId) => {
    return favourites.some((item) => item._id === productId);
  };

  const removeFavourite = (productId) => {
    setFavourites((prev) => prev.filter((item) => item._id !== productId));
  };

  return (
    <FavouritesContext.Provider
      value={{ favourites, toggleFavourite, isFavourite, removeFavourite }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
