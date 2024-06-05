import { Link, useLocation } from "react-router-dom";
import { ITotalPizzas } from "../types";

interface Props{
  totalCart: ITotalPizzas
}

function CartView({totalCart}:Props) {

    const { pizza,total } = totalCart
    const { pathname } = useLocation()

    return (
      <div className="h-16 fixed bottom-0 left-0 right-0 flex items-center justify-between text-white bg-[#292524] p-4">
        <p className="space-x-4">
          <span>{pizza} pizzas</span>
          <span>${total}</span>
        </p>
        {
          pathname === '/menu' && <Link to="/cart">Open cart &rarr;</Link>
        }
      </div>
    );
  }
  
  export default CartView;