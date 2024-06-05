import { create } from "zustand";
import { IOrderPizza, IPizzaCart, ITotalPizzas } from "../types";
import { totalAllPizzas } from "../utils/helper";

interface Store {
  user: string;
  setUser: (newUser: string) => void;
  cart: IOrderPizza[];
  setCart: (pizza: IPizzaCart) => void;
  deletePizzaById: (id: IPizzaCart["id"]) => void;
  deleteOnePizza: (id: IPizzaCart["id"]) => void;
  totalCart: ITotalPizzas;
  cleanCart:() => void
}

export const usePizza = create<Store>()((set) => ({
  user: "",
  setUser: (newUser: string) => set(() => ({ user: newUser })),
  totalCart: {
    total: 0,
    pizza: 0,
  },
  cart: [],
  setCart: (pizza: IPizzaCart) =>
    set((state) => {
      const findPizzaIndex = state.cart.findIndex(
        (pizzaState) => pizzaState.pizzaId === pizza.id
      );

      let cartNew: IOrderPizza[] = [];

      if (findPizzaIndex === -1) {
        const newPizza: IOrderPizza = {
          pizzaId: pizza.id,
          name: pizza.name,
          quantity: 1,
          unitPrice: pizza.unitPrice,
          totalPrice: pizza.unitPrice,
        };
        cartNew = [...state.cart, newPizza];
      } else {
        const pizzaCurrent = state.cart[findPizzaIndex];
        const quantity = pizzaCurrent.quantity + 1;
        const updatePizza: IOrderPizza = {
          ...pizzaCurrent,
          quantity,
          totalPrice: quantity * pizzaCurrent.unitPrice,
        };

        cartNew = state.cart.map((item, index) =>
          index === findPizzaIndex ? updatePizza : item
        );
      }

      const total = totalAllPizzas(cartNew)

      return {
        ...state,
        cart: cartNew,
        totalCart:total
      };
    }),

  deletePizzaById: (id: IPizzaCart["id"]) =>
    set(({ cart }) => {
        
        const filterCart = cart.filter((pizza) => pizza.pizzaId !== id) 
        const totalCart = totalAllPizzas(filterCart)

       return { cart: filterCart, totalCart }
    }),
    deleteOnePizza: (id:IPizzaCart['id']) => set((state) => {

        const pizza = state.cart.find(item => item.pizzaId === id)

        if (!pizza) return {...state}
        
        const newQuantity = pizza.quantity - 1
        let newCart = []

        if (newQuantity !== 0) {
            pizza.quantity = newQuantity
            pizza.totalPrice = newQuantity * pizza.unitPrice 

            newCart = state.cart.map(item => (item.pizzaId === pizza.pizzaId ? pizza : item ))
        }else{
            newCart = state.cart.filter(item => item.pizzaId !== pizza.pizzaId )
        }
        const totalCart = totalAllPizzas(newCart)

        return {
            cart:newCart,
            totalCart
        }
    }),
    cleanCart:() => set(() =>({
        cart:[],
        totalCart:{pizza:0,total:0}
    }))
}));
