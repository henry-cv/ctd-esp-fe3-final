/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
const Card = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link to={`/dentista/${id}`} >
        <h3>{name}</h3>
        <img src="../../public/images/doctor.jpg" alt="dentista" width="100px" />
        <h4>{username}</h4>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      </Link>
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div >
  );
};

export default Card;
