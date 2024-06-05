import { usePizza } from "../hookss/usePizza";
import { IPizza } from "../types";
import Button from "./Button";

interface Props {
  pizza: IPizza
}

function MenuItem({ pizza }: Props) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const { setCart } = usePizza()
  
  const handleClick = () =>{
    setCart(pizza)
  }

  const active = false
  return (
    <li className="flex gap-4 md:gap-5 border-t py-5 border-t-gray-300 last-of-type:border-b items-center last-of-type:border-b-gray-300">
      <img src={imageUrl} alt={name} className=" max-w-[100px]" />
      <div className="py-1 flex-1">
        <p className="font-medium">{name}</p>
        <p className="text-gray-500 mt-1 italic text-xs md:text-sm ">{ingredients.join(', ')}</p>
        <div className="mt-4">
          {!soldOut ? <p className="font-medium text-yellow-500">${unitPrice.toFixed(2)}</p> : <p className="text-red-500">Sold out</p>}
        </div>
      </div>
      {
        active ? (

          <div className="flex items-center gap-4">
            <Button type="small">+</Button>
            <span>{1}</span>
            <Button type="small">-</Button>
            <Button type="small">Cancel</Button>
          </div>

        ) : (
          <Button type="small" onClick={handleClick}>ADD</Button>
        )
      }
    </li>
  );
}

export default MenuItem;