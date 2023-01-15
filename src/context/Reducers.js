export const restaurantsReducer = (state, action) => {
  switch (action.type) {
    case "BOOKED_RESTAURANT":
      const existRestauran = state.booked.find(
        (res) => res.id === action.payload.id
      );

      if (existRestauran) {
        return {
          ...state,
          booked: state.booked.filter((res) => res.id !== action.payload.id),
        };
      } else {
        return { ...state, booked: [...state.booked, action.payload] };
      }
    case "SEARCH_RESTAURANTS":
      return {
        ...state,
        search: action.payload,
      };
    case "SORT_RESTAURANTS":
      return {
        ...state,
        sort: action.payload,
      };
    case "TYPE_RESTAURANTS":
      return {
        ...state,
        sort: action.payload,
      };
    case "DELIVERY_RESTAURANTS":
      return {
        ...state,
        delivery: !state.delivery,
      };
    case "OUTDOORSITTING_RESTAURANTS":
      return {
        ...state,
        outdoorsitting: !state.outdoorsitting,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        search: "",
        sort: "all",
        delivery: false,
        outdoorsitting: false,
      };
    default:
      break;
  }
};
