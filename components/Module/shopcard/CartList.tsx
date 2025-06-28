import CartItem from "./CartItem";

const fakeCart = [
  {
    id: 1,
    title: "کفش ورزشی نایک",
    price: 1200000,
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "کوله پشتی آدیداس",
    price: 850000,
    image: "/1.jpg",
  },
];

export default function CartList() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mx-auto md:mx-0">
      {fakeCart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}
