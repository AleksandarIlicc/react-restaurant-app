import React, { useReducer, useContext, createContext } from "react";
import { restaurantsReducer } from "./Reducers";
import data from "../data.json";

const GlobalContext = createContext({});

const initialState = {
  restaurants: data.restaurants,
  booked: [],
  search: "",
  sort: "all",
  delivery: false,
  outdoorsitting: false,
};

const GlobalContextProvider = ({ children }) => {
  const [restaurantsState, restaurantsDispatch] = useReducer(
    restaurantsReducer,
    initialState
  );

  return (
    <GlobalContext.Provider
      value={{
        restaurantsState,
        restaurantsDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;
