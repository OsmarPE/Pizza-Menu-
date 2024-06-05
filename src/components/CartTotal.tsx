import { ITotalPizzas} from "../types"

interface Props{
    totalCart:ITotalPizzas
}

export default function CartTotal({totalCart}:Props) {

    const { total } = totalCart

  return (
    <div className="flex items-center justify-between">
        <p className="font-medium">Total</p>
        <span className="font-bold text-xl text-gray-600">${total}</span>
    </div>
  )
}
