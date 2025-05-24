import { useState } from "react";
import CartProductItem from "./components/CartProductItem";
import { cart_products } from "./constants/cart_products";

function App() {
  const [cartTotal, setCartTotal] = useState(
    cart_products?.reduce((total, item) => total + item.price, 0) || 0
  );

  return (
    <div className="max-w-6xl mx-auto lg:px-0 px-5 mb-28">
      <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center mt-7">
        Your Cart (4 items)
      </h1>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-base text-black border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Total
              </th>
            </tr>
          </thead>

          <tbody>
            {cart_products.map((item, index) => {
              // setCartTotal((prevTotal) => prevTotal + item.price);
              return (
                <CartProductItem
                  key={index}
                  image={item.image}
                  product_name={item.product_name}
                  short_text={item.short_text}
                  source={item.source}
                  sale_type={item.sale_type}
                  change_button={item.change_button}
                  add_another={item.add_another}
                  price={item.price}
                  setCartTotal={setCartTotal}
                />
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="max-w-[400px] mt-6 ml-auto">
        <div className="mt-6 border-b border-gray-200 pb-6 space-y-2">
          <div className="flex justify-between items-center">
            <h2 className="md:text-base text-sm font-semibold">Subtotal: </h2>
            <p className="md:text-base text-sm">${cartTotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="md:text-base text-sm font-semibold">Sale tax: </h2>
            <p className="md:text-base text-sm">$100</p>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="md:text-base text-sm font-semibold">
              Coupon code:{" "}
            </h2>
            <p className="md:text-base text-sm underline">Add Coupon</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mt-6">
            <h2 className="md:text-base text-sm font-semibold">
              Grand Total:{" "}
            </h2>
            <p className="md:text-2xl text-xl">
              ${(cartTotal + 100).toFixed(2)}
            </p>
          </div>

          <div className="max-w-[200px] block ml-auto mt-7">
            <div className="flex gap-3 border-b-2 space-y-5 pb-4 mr-auto border-green-500">
              <p className="md:text-xs text-[10px]">
                <span className="font-bold">Congrats</span> you are eligible
                for <span className="font-bold">free Shipping</span>!
              </p>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                  stroke="currentColor"
                  stroke-width="2"
                />

                <line
                  x1="7"
                  y1="8"
                  x2="17"
                  y2="8"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="7"
                  y1="12"
                  x2="14"
                  y2="12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <line
                  x1="7"
                  y1="16"
                  x2="12"
                  y2="16"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            <button className="mt-6 w-full bg-[black] text-white px-4 py-2">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
