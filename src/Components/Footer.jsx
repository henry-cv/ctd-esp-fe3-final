import { useContextGlobal } from "./utils/global.context"

const Footer = () => {
  //const { theme } = useContextGlobal();
  const { state } = useContextGlobal();
  const { theme } = state;
  return (
    <footer className={theme}>
      <p>Powered by</p>
      <img src="/images/DH.png" alt='DH-logo' />
    </footer>
  )
}

export default Footer
