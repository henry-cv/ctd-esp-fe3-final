import { useState } from "react";
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");


  const readFullname = (e) => {
    let inputName = e.target.value.trim();
    return /[a-záéíóúñ]{6,}/ig.test(inputName)
      ? setFullname(inputName)
      : ""
  }
  const readEmail = (e) => {
    let inputEmail = e.target.value.trim();
    return /^[\w]{4,}@[a-z]{3,}\.[a-z]{2,4}$/.test(inputEmail)
      ? setEmail(inputEmail)
      : ""
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && fullname) console.info(`Gracias ${fullname}, te contactaremos cuando antes vía mail`)
    else console.warn("Por favor verifique su información nuevamente")
  }
  return (
    <div>
      <h2>Formulario</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <input onChange={(e) => readFullname(e)} type="text" placeholder="Nombre completo" required autoComplete="on" />
        <input onChange={(e) => readEmail(e)} type="text" placeholder="Email" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
