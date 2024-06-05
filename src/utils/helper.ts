import { IOrderPizza, ITotalPizzas } from "../types";

export function formatCurrency(value:number) {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "EUR",
    }).format(value);
  }
  

  export function formatDate(dateStr:string) {
    return new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(dateStr));
  }
  
  export function calcMinutesLeft(dateStr:string) {
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2 - d1) / 60000);
  }

  export const totalAllPizzas = (cartNew:IOrderPizza[]):ITotalPizzas =>{
    const total = cartNew.reduce(
      ({total,pizza}, cart) => ({
        total: cart.totalPrice + total,
        pizza: cart.quantity + pizza,
      }),
      { pizza: 0, total: 0 }
    );

    return total
  } 