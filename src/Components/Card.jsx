/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';
import { useEffect } from 'react';

const Card = ({ name, username, id }) => {
  //const { theme, favs, setFavs } = useContextGlobal();
  const { state, dispatch } = useContextGlobal();
  //const { theme, data } = state;
  const { theme, data: favs } = state;
  const isFav = state.data.some((fav) => fav.id === id); // Verifica si está en favoritos
  const redHeart = "❤️";
  const whiteHeart = "🤍"
  const toggleFav = () => {
    let fav = {
      id, name, username
    }
    dispatch({ type: "TOGGLE_FAV", payload: fav });
  };

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

      <button onClick={() => toggleFav()} className={`favButton ${theme}`}>
        {isFav ? `${redHeart}` : `${whiteHeart}`}
      </button>
    </div >
  );
};

export default Card;