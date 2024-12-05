export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    case "ADD_FAV":
    //return { ...state, favs:[state.favs, action.payload ]};
      return { ...state, data:[...state.data, action.payload ]};
    case "RESET_FAVS":
      return {...state, data:[]}
    case "REMOVE_FAV":
      const index = action.dataId
      const {data} = state;
      console.log(index);
      console.log("data antes de hacer el slice: ")
      console.log(data)
      return {...state, data:[...data.slice(0,index),
        ...data.slice(index+1)]}
    default:
      return state;
    //throw new Error("Acción no existente");
  }
}