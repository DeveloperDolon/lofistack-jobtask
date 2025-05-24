function App() {
  return (
    <div className="max-w-6xl mx-auto lg:px-0 px-5">
      <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center mt-7">
        Your Cart (4 items)
      </h1>

      <div className="relative overflow-x-auto mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-black">
          <thead className="text-xs text-black uppercase border-b">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
            <tr className="border-b border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                Microsoft Surface Pro
              </th>
              <td className="px-6 py-4">White</td>
              <td className="px-6 py-4">Laptop PC</td>
              <td className="px-6 py-4">$1999</td>
            </tr>
            <tr className="bg-white text-black border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="px-6 py-4">Black</td>
              <td className="px-6 py-4">Accessories</td>
              <td className="px-6 py-4">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
