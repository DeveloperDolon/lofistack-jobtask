import { useState } from "react";

export interface CartProductItem {
  image: string;
  product_name: string;
  short_text?: string;
  source?: string;
  sale_type?: string;
  change_button?: boolean;
  add_another?: string;
  price: number;
}

const CartProductItem = ({
  image,
  product_name,
  short_text,
  source,
  sale_type,
  change_button,
  add_another,
  price,
}: CartProductItem) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <tr className="border-b border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-black whitespace-nowrap"
      >
        <div className="flex items-center gap-4">
          <img
            className="w-16 h-16 object-cover"
            src={image}
            alt="Product image"
          />

          <div className="space-y-1">
            <p className="md:text-xs text-[10px] font-semibold">{sale_type}</p>
            <h2 className="md:text-xl text-lg font-semibold">{product_name}</h2>

            {short_text && (
              <h2 className="md:text-xl text-lg font-semibold text-[#f78344]">
                [{short_text}]
              </h2>
            )}

            <p className="md:text-xs text-[10px]">{source}</p>

            {change_button && (
              <button className="md:text-xs text-[10px] text-[#ee9e73]">Change</button>
            )}

            {add_another && (
              <button className="md:text-xs text-[10px] md:px-2 px-1 py-1 border border-[#f78344] text-[#f78344] rounded">
                {add_another}
              </button>
            )}
          </div>
        </div>
      </th>
      <td className="px-6 py-4">{price}</td>
      <td className="px-6 py-4">
        <div className="flex items-center gap-2 border-2 border-black rounded-lg w-fit">
          <button
            onClick={() => setQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className="border-r-2 border-black  px-3 rounded text-xl font-semibold"
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="border-l-2 border-black  px-3 rounded text-xl font-semibold"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-6 py-4">{(price * quantity).toFixed(2)}</td>
    </tr>
  );
};

export default CartProductItem;
