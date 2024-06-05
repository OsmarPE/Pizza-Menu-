
export interface IPizza{
    id: number
    name: string
    unitPrice: number
    imageUrl: string
    ingredients: string[]
    soldOut: boolean
}

export interface IOrder {
    id: string;
    customer: string;
    phone: string;
    address: string;
    priority: boolean;
    estimatedDelivery: string;
    cart: IOrderPizza[];
    position: string;
    orderPrice: number;
    priorityPrice: number;
    status:string
  }
  
 
  export interface IOrderPizza {
    pizzaId:IPizza['id']
    name:IPizza['name']
    quantity: number,
    totalPrice: number,
    unitPrice:number
  }

  export interface IOrderNew extends Pick<IOrder,'cart'|'phone'|'address'|'priority'|'customer'> {
    cart?:IOrderPizza[]
} 

export type IPizzaCart = Omit<IPizza,'imageUrl'|'ingredients'|'soldOut'>

export type ITotalPizzas = {pizza:number,total:number}

