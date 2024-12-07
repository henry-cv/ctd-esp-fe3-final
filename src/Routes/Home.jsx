import axios from "axios";
import Card from '../Components/Card'
import { useEffect, useState } from 'react';
import { useContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  //const [dentistList, setDentistList] = useState([]);
  const { state, dispatch } = useContextGlobal();
  const { theme, arDentists: dentistList } = state;
  const getList = () => {
    axios(url)
      .then((res) => {
        //setDentistList(res.data);
        dispatch({
          type: "GET_DENTISTS",
          payload: res.data
        })
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getList();
    localStorage.setItem("arDentists", JSON.stringify(state.arDentists));
  }, []);

  console.log("dentist List, recien inicializado:")
  console.log(dentistList);

  return (
    <main className={theme} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentistList.length ? dentistList.map((dentist) => <Card name={dentist.name} username={dentist.username} id={dentist.id} key={dentist.id} />) : null}
      </div>
    </main>
  )
}

export default Home