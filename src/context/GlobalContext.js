import React, { useReducer, useContext, createContext, useEffect } from "react";
import { restaurantsReducer } from "./Reducers";

const GlobalContext = createContext({});

const initialState = {
  restaurants: [],
  booked: [],
  loading: true,
  error: "",
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

  useEffect(() => {
    const loadRestaurants = async () => {
      restaurantsDispatch({ type: "LOADING", payload: true });
      try {
        const res = await fetch("http://localhost:3000/data.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        restaurantsDispatch({
          type: "LOAD_RESTAURANTS",
          payload: data.restaurants,
        });
        restaurantsDispatch({ type: "LOADING", payload: false });
      } catch (err) {
        restaurantsDispatch({ type: "ERROR", payload: err });
        restaurantsDispatch({ type: "LOADING", payload: false });
      }
    };
    loadRestaurants();
  }, []);

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
