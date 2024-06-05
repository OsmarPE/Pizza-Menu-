import { IOrderPizza } from "../types"


interface Props{
    pizza:IOrderPizza
}

export default function OrderItem({pizza}:Props) {

    const { name,quantity,totalPrice } = pizza

  return (
    <div className="py-4 border-t border-t-gray-200 flex text-sm items-center justify-between last-of-type:border-b last-of-type:border-b-gray-200">
    <div className="flex items-center gap-3 ">
      <span className="font-semibold text-gray-600">{quantity}x</span>
      <p className="text-gray-500">{name}</p>
    </div>
    <span className="font-medium text-gray-800">${totalPrice}</span>
  </div>
  )
}
