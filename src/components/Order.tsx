// Test ID: IIDSAT

import { useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiRestauran";
import { IOrder, IPizza } from "../types";
import { calcMinutesLeft, formatDate } from "../utils/helper";
import OrderItem from "./OrderItem";


function Order() {
  
  const order = useLoaderData() as IOrder

  const {
    id,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
    status
  } = order;

  
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="container-main py-8">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-lg">
        <h2 className="font-bold">Order #{id} Status</h2>

        <div className="space-x-3">
          {priority && <span className="py-1.5 px-3 rounded-3xl bg-[#EF4444] text-white font-medium uppercase text-sm">Priority</span>}
          <span className="py-1.5 px-3 rounded-3xl bg-[#22C55E] text-white font-medium uppercase text-sm">{status} order</span>
        </div>
      </div>

      <div className="p-5 rounded-lg bg-[#E7E5E4] mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="font-medium  text-gray-500">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <div className="my-8">
        {
          cart.map((product) => <OrderItem key={product.pizzaId} pizza={product}/>)
        }
      </div>

      <div className="p-5 rounded-lg bg-[#E7E5E4] grid gap-2 font-medium text-gray-500 ">
        <p className="text-sm ">Price pizza: ${orderPrice}</p>
        {priority && <p className="text-sm ">Price priority: ${priorityPrice}</p>}
        <p className="font-medium text-black">To pay on delivery: ${orderPrice+ priorityPrice}</p>
      </div>
    </div>
  );
}
export const LoaderOrder = async({params}:{params:any}) => {
  const id = params.id as IPizza['id']
  const order = await getOrder(id)
  return order
}

export default Order;


