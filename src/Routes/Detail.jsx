//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  console.log(`id: ${id}`);

  const getDentist = async () => {
    const res = await fetch(url);
    console.log(res);
    const data = await res.json();
    console.log(data);
    setDentist(data);
  }
  console.log("dentista:")
  console.log(dentist);

  useEffect(() => {
    getDentist();
  }, [dentist]);
  return (
    <>
      <h1>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <h2>{dentist.name}</h2>
      <h2>{dentist.email}</h2>
      <h2>{dentist.phone}</h2>
      <h2>{dentist.website}</h2>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail