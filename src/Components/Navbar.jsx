import { Link } from 'react-router-dom';
import { useContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const moon = "🌔", sun = "☀";
  //const { theme, changeTheme } = useContextGlobal();

  const { state, dispatch } = useContextGlobal();
  const { theme } = state;

  return (
    <nav className={theme} >
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/'> <h3>Home</h3></Link>
      <Link to='/favs'> <h3>Favs</h3></Link>
      <Link to='/contacto'> <h3>Contact</h3></Link>
      {/* <button onClick={() => changeTheme()} className={theme}>Change theme</button> */}
      <button onClick={() => dispatch({
        type: "CHANGE_THEME",
        payload: state.theme === "light" ? "dark" : "light"
      })} className={theme}>{`${theme === "light" ? moon : sun} `}</button>
    </nav>
  )
}

export default Navbar