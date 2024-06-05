import { Navigate, useLoaderData } from "react-router-dom"
import { getMenu } from "../services/apiRestauran"
import { IPizza } from "../types"
import MenuItem from "../components/MenuItem"
import { usePizza } from "../hookss/usePizza"

export default function Menu() {

  const pizzas =  useLoaderData() as IPizza[]

  const { user } = usePizza()

  if (!user) {
     return <Navigate to='/'/>
  }

  return (
    <div className="container-main py-10 overflow-y-auto">
      <div className="grid  list-none">
        {
          pizzas.map(pizza => <MenuItem pizza={pizza} key={pizza.id}/>)
        }
      </div>
    </div>
  )
}


// eslint-disable-next-line react-refresh/only-export-components
export async function loaderMenu(){
  const data = await getMenu()
  return data
}