export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
    //return { ...state, favs:[state.favs, action.payload ]};
      return { ...state, data:[...state.data, action.payload ]};
    case "RESET_FAVS":
      return {...state, data:[]}
    default:
      return state;
    //throw new Error("Acción no existente");
  }
}