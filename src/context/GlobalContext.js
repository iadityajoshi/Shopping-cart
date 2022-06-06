import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { faker } from "@faker-js/faker";
import { cartReducer } from "./Reducers";
import { filterReducer } from "./Reducers";

const CartContext = createContext();
const GlobalContext = (props) => {
  // console.log(props);
  const initialState = {
    products: [],
    cart: [],
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios("https://fakestoreapi.com/products");

      const resAdd = res.data.map((item) => ({
        ...item,
        inStock: faker.helpers.arrayElement([0, 2, 5, 9, 20]),
        fastDelivery: faker.datatype.boolean(),
      }));

      dispatch({ type: "API_CALL_SUCCESS", payload: resAdd });
    };
    fetchData();
  }, []);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  // console.log(state);

  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalContext;
export const CartState = () => {
  return useContext(CartContext);
};
