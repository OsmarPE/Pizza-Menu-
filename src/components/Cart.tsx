import { Navigate, NavLink } from "react-router-dom";
import { usePizza } from "../hookss/usePizza"
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Button from "./Button";

export default function Cart() {

  const { cart, user, setCart, deletePizzaById, totalCart, deleteOnePizza, cleanCart } = usePizza()

  const cartLength = cart.length

  if (!user) {
    return <Navigate to={'/'}/>
  }

  return (
    <div className="container-main py-8">
      <NavLink to={'/menu'} className='text-blue-400 hover:underline ml-auto w-max block'>Go Back</NavLink>
      <h2 className="text-xl font-medium mt-2">Your cart, {user}</h2>
      <div className="my-6">
        {

          cartLength > 0 ? (
            cart.map(product => <CartItem product={product} setCart={setCart} deleteOnePizza={deleteOnePizza} deletePizzaById={deletePizzaById} key={product.pizzaId} />)

          ) : <p className="text-gray-500">Your Cart is Empty</p>

        }
      </div>

      {cartLength > 0 && <CartTotal totalCart={totalCart} />}

      {cartLength > 0 && (<div className="flex items-center gap-4 mt-6">
        <Button type="primary" to="/order/new">ORDER PIZZAS</Button>
        <Button type="secondary" onClick={cleanCart}>CLEAR CART</Button>
      </div>)}
    </div>
  )
}
