import { IOrderPizza, IPizzaCart } from "../types"
import Button from "./Button"


interface Props{
    product:IOrderPizza,
    setCart:(pizza:IPizzaCart) => void,
    deletePizzaById:(id:IPizzaCart['id']) => void,
    deleteOnePizza:(id:IPizzaCart['id']) => void
}

export default function CartItem({product,setCart,deletePizzaById,deleteOnePizza}:Props) {
    
    const { name,quantity,totalPrice,pizzaId,unitPrice } = product
    

    return (
    <div className="border-t border-t-gray-200 py-3 text-sm flex flex-col md:flex-row gap-3 md:items-center md:justify-between last-of-type:border-b last-of-type:border-b-gray-200">
        <div className="space-x-3 ">
            <span className="text-gray-700 font-medium">{quantity}x</span>
            <span className="text-gray-400">{name}</span>
        </div>
        <div className="flex items-center gap-4">
            <span className="font-bold text-gray-700">${totalPrice}</span>
            <div className="space-x-4">
                <Button type="small" onClick={() => setCart({name,id:pizzaId,unitPrice})}>+</Button>
                <span>{quantity}</span>
                <Button type="small" onClick={() => deleteOnePizza(pizzaId)}>-</Button>
            </div>
            <Button type="small" onClick={() => deletePizzaById(pizzaId)}>Delete</Button>
        </div>
       
    </div>
  )
}
