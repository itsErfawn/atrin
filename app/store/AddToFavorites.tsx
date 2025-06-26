import { create } from "zustand";

interface TProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

interface TStore {
  cart: TProduct[];
  totalQuantity: number;
  addToCart: (product: TProduct) => void;
  increment: (id: number) => void;
  decrement: (id: number) => void;
}

export const UseStore = create<TStore>((set, get) => ({
  cart: [],
  totalQuantity: 0,

  addToCart: (product) => {
    const existing = get().cart.find((item) => item.id === product.id);
    if (existing) {
      const newCart = get().cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      set({
        cart: newCart,
        totalQuantity: newCart.reduce((sum, item) => sum + item.quantity, 0),
      });
    } else {
      const newCart = [...get().cart, { ...product, quantity: 1 }];
      set({
        cart: newCart,
        totalQuantity: newCart.reduce((sum, item) => sum + item.quantity, 0),
      });
    }
  },

  increment: (id) => {
    const newCart = get().cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    console.log(newCart);
    set({
      cart: newCart,
      totalQuantity: newCart.reduce((sum, item) => sum + item.quantity, 0),
    });
  },

  decrement: (id) => {
    const newCart = get()
      .cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    set({
      cart: newCart,
      totalQuantity: newCart.reduce((sum, item) => sum + item.quantity, 0),
    });
  },
}));
