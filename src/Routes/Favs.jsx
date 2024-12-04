import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { favs } = useContextGlobal();
  const { state } = useContextGlobal();
  const { theme } = state;
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className={`card-grid ${theme}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favs.map((dentista) => <Card id={dentista.id} key={dentista.id} name={dentista.name} username={dentista.username} />)}
      </div>
    </>
  );
};

export default Favs;
