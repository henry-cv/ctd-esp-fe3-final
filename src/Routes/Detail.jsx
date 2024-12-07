//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { dentistStyles } from "../styles/App.module.css";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const { state } = useContextGlobal();
  const { theme } = state;

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  const getDentist = () => {
    axios(url)
      .then((res) => {
        setDentist(res.data);
      }).
      catch(err => console.error(err));
  }

  useEffect(() => {
    getDentist();
  }, []);
  return (
    <div className={dentistStyles}>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <article className={`card ${theme}`}>
        <h3>{dentist.name}</h3>
        <img src="/images/doctor.jpg" alt="foto" width="200px" />
        <h3>{dentist.email}</h3>
        <h3>{dentist.phone}</h3>
        <h3>{dentist.website}</h3>
      </article>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail