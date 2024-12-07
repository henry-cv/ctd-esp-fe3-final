import { useState } from "react";
import { form } from "../styles/App.module.css";
import { useContextGlobal } from "../Components/utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [visitor, setVisitor] = useState({
    fullname: "", email: ""
  });
  const [show, setShow] = useState(false);
  const { state } = useContextGlobal();
  const { theme } = state;

  const [error, setError] = useState(false);
  const ErrorMessage = "Por favor verifique su información nuevamente";
  const SuccessMessage = `Gracias ${visitor.fullname}, te contactaremos cuando antes vía mail`;

  const validateFields = () => {
    const expValidName = /^[a-záéíóúñ]{6,}$/ig
    const expValidEmail = /^[\w]{4,}@[a-z]{3,}\.[a-z]{2,4}$/
    return expValidName.test(visitor.fullname.trim()) && expValidEmail.test(visitor.email.trim());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      console.info(SuccessMessage);
      setError(false);

    } else {
      console.error(ErrorMessage);
      setError(true);
    }
    setShow(true);
  }

  return (
    <form className={`${form} ${theme}`} onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => setVisitor({ ...visitor, fullname: e.target.value })} placeholder="Nombre completo" required autoComplete="on" title="Fullname must have at least 6 characters" />
      <input type="email" onChange={(e) => setVisitor({ ...visitor, email: e.target.value })} placeholder="Email" title="Email must have 4 characters before @"
        required autoComplete="on" />
      <input type="submit" className={theme} value="Send" />
      {show && (
        <p style={{ color: error ? "red" : "green" }}>
          {error ? ErrorMessage : SuccessMessage}
        </p>
      )}
    </form>
  );
};

export default Form;
