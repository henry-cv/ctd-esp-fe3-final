import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { favStyles, reset } from "../styles/App.module.css"
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  //const { favs } = useContextGlobal();
  const { state, dispatch } = useContextGlobal();
  const { theme, data: favs } = state;
  console.log("favs leído desde Favs.jsx");
  console.log(favs);
  const resetFavs = () => {
    dispatch({
      type: "RESET_FAVS",
      payload: [],
    });
    localStorage.setItem("favourites", JSON.stringify([]));
  }
  return (
    <div className={favStyles}>
      <h1>Dentists Favs</h1>
      {favs.length > 0 &&
        <button onClick={resetFavs} className={`${reset} ${theme}`}>Reset Favs</button >}
      <div className={`card-grid ${theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentista) => <Card id={dentista.id} key={dentista.id} name={dentista.name} username={dentista.username} />)}
      </div>
    </div>
  );
};

export default Favs;