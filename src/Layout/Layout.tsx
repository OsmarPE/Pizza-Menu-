import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import CartView from "../components/CartView";
import { usePizza } from "../hookss/usePizza";

export default function Layout() {
  const { state } = useNavigation()
  
  const { totalCart } = usePizza()
  
  const isLoading = state === 'loading'

   return (
    <div className="grid grid-rows-[max-content_1fr_max-content] md:grid-rows-[64px_1fr_68px] h-screen">
      <Header/>
      <main>
        <Outlet/>
      </main>
    
      { totalCart.pizza > 0 && <CartView totalCart={totalCart}/>}
    </div>
  )
}
