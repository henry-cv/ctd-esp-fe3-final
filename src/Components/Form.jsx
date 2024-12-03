import { useState } from "react";
const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [visitor, setVisitor] = useState({
    fullname: "", email: ""
  })
  const [error, setError] = useState(false);
  const ErrorMessage = "Por favor verifique su información nuevamente";
  const SuccessMessage = `Gracias ${visitor.fullname}, te contactaremos cuando antes vía mail`;

  const readFullname = (e) => {
    let inputName = e.target.value.trim();
    if (/[a-záéíóúñ]{6,}/ig.test(inputName))
      setVisitor({ ...visitor, fullname: inputName });
    console.log(visitor);
  }

  const readEmail = (e) => {
    let inputEmail = e.target.value.trim();
    if (/^[\w]{4,}@[a-z]{3,}\.[a-z]{2,4}$/.test(inputEmail))
      setVisitor({ ...visitor, email: inputEmail });
    console.log(visitor);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const expValidName = /[a-záéíóúñ]{6,}/ig
    const expValidEmail = /^[\w]{4,}@[a-z]{3,}\.[a-z]{2,4}$/
    if (expValidName.test(visitor.fullname.trim()) && expValidEmail.test(visitor.email.trim())) {
      console.info(`Gracias ${visitor.fullname}, te contactaremos cuando antes vía mail`);
      setError(false)
    }
    else {
      console.log(ErrorMessage);
      setError(true);
    }
    /* if (visitor.fullname && visitor.email) {
      console.info(`Gracias ${visitor.fullname}, te contactaremos cuando antes vía mail`);
      setError(false);
    }
    else {
      setError(true);
    } */
  }

  return (
    <div>
      <h2>Formulario</h2>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setVisitor({ ...visitor, fullname: e.target.value })} placeholder="Nombre completo" required autoComplete="On" title="Fullname must have at least 6 characters" />
        <input type="email" onChange={(e) => setVisitor({ ...visitor, email: e.target.value })} placeholder="Email" title="Email must have 4 characters before @"
          required autoComplete="On" />
        <input type="submit" value="Send" />
        {error && <p>{ErrorMessage}</p>}
        {!error && <p>{SuccessMessage}</p>}
      </form>
    </div>
  );
};

export default Form;
