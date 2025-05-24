import { useState } from "react";
import CartProductItem from "./components/CartProductItem";
import { cart_products } from "./constants/cart_products";

function App() {
  const [cartTotal, setCartTotal] = useState(0);
  return (
    <div className="max-w-6xl mx-auto lg:px-0 px-5">
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
              setCartTotal((prevTotal) => prevTotal + item.price);
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
    </div>
  );
}

export default App;
