import { Link } from "react-router-dom";
import Search from "./Search";
import { usePizza } from "../hookss/usePizza";

export default function Header() {

  const { user } = usePizza()

  return (
    <header className="border-stone-200 bg-yellow-400 uppercase">
    <div className="container py-6 md:h-16 w-[90%] max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
      <Link to="/" className="tracking-[4px] text-gray-800 ">
        Fast React Pizza Co.
      </Link>
    
      <Search />

      <span>{user}</span>
    </div>
  </header>
  )
}
