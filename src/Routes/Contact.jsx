import Form from '../Components/Form'
import { contact } from "../styles/App.module.css";
import { useContextGlobal } from '../Components/utils/global.context';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state } = useContextGlobal();
  return (
    <div className={`${contact} ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  )
}

export default Contact