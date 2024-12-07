export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {...state, arDentists:action.payload}
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
      //return { ...state, favs:[state.favs, action.payload ]};
      return { ...state, data: [...state.data, action.payload] };
    case "RESET_FAVS":
      return { ...state, data: [] }
    case "TOGGLE_FAV":
      const exists = state.data.some((item) => item.id === action.payload.id);
      return {
        ...state,
        data: exists
          ? state.data.filter((item) => item.id !== action.payload.id)
          : [...state.data, action.payload]
      };
    default:
      throw new Error("Acción no existente");
  }
}