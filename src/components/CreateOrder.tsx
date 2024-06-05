import { useState } from "react";
import { useForm } from "react-hook-form";
import { IOrderNew } from "../types";
import { createOrder } from "../services/apiRestauran";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";
import { usePizza } from "../hookss/usePizza";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  
  const nav = useNavigate()
  
  
  const { cart, user , cleanCart} = usePizza()

  const defaultValues:IOrderNew = {address:'',phone:'',customer:'',priority:false}
  const { register, formState:{errors}, handleSubmit } = useForm<IOrderNew>({defaultValues})
  const [withPriority, setWithPriority] = useState(() => defaultValues.priority);
 
  const submit = async(data:IOrderNew) =>{
  
      const order = await createOrder({...data,cart})   
      cleanCart()
      nav(`/order/${order.id}`,{replace:true})
  }

  if (!user) {
    return <Navigate to='/'/>
  }

  return (
    <div className="container-main py-8">
      <h2 className="font-medium mb-5 text-lg tracking-widest">Ready to order? Let's go!</h2>

      <form className="grid gap-3 md:gap-7" onSubmit={handleSubmit(submit)}>
        <div className="inputItem">
          <label className="">First Name</label>
          <input className="input" type="text" {...register('customer',{required:true})} />
        </div>

        <div className="inputItem relative">
          <label>Phone number</label>
            <input className="input" type="tel" {...register('phone',{required:true,pattern:/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/})} />
          {errors.phone && <p className="absolute top-[108%] right-0 text-xs text-red-500">Numero Invalido</p> }
        </div>

        <div className="inputItem">
          <label>Address</label>
            <input className="input" type="text" {...register('address',{required:true})} />
        </div>

        <div className="flex items-center gap-4">
          <input
            className="size-5"
            type="checkbox"
            id="priority"
            checked={withPriority}
            {...register('priority',{onChange:() => setWithPriority(!withPriority)})}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-6">
          <Button type="primary">Order Now</Button>
        </div>
      </form>
    </div>
  );
}

export default CreateOrder;