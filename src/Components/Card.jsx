/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import { useEffect } from 'react';
const Card = ({ name, username, id }) => {
  //const { theme, favs, setFavs } = useContextGlobal();
  const { state, dispatch } = useContextGlobal();
  //const { theme, data } = state;
  const { theme, data: favs } = state;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    let fav = {
      id, name, username
    }
    //setFavs((prevFavs) => [...prevFavs, fav]);
    dispatch({
      type: "ADD_FAV",
      payload: fav
    })
  }
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favs));
    //localStorage.setItem("favourites", JSON.stringify(data));
  }, [favs])
  return (
    <div className={`card ${theme}`}>
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentista/${id}`} >
        <h3>{name}</h3>
        <img src="/images/doctor.jpg" alt="dentista" width="100px" />
        <h4>{username}</h4>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={() => addFav()} data-id={id} className={`favButton ${theme}`}>Add fav</button>
    </div >
  );
};

export default Card;