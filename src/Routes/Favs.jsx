import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

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
    <>
      <h1>Dentists Favs</h1>
      <button onClick={resetFavs}>Reset Favs</button >
      <div className={`card-grid ${theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentista) => <Card id={dentista.id} key={dentista.id} name={dentista.name} username={dentista.username} />)}
      </div>
    </>
  );
};

export default Favs;
