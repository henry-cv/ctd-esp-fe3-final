import { Link } from 'react-router-dom';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const changeTheme = () => {
    alert("you clicked on Change Theme");
  }
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <Link to='/'> <h3>Home</h3></Link>
      <Link to='/favs'> <h3>Favs</h3></Link>
      <Link to='/contacto'> <h3>Contact</h3></Link>
      <button onClick={() => changeTheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar