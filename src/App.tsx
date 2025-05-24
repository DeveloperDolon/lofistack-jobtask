import CartProductItem from "./components/CartProductItem";

function App() {
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
           <CartProductItem />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
