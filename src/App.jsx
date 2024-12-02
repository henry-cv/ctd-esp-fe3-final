import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home"
import Contact from './Routes/Contact'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs';
import { useContextGlobal } from "./Components/utils/global.context";
import { useEffect } from "react";

function App() {
  const { theme } = useContextGlobal();
  useEffect(() => {
    document.body.className = theme;
  }, [theme])

  return (
    <div className={`App ${theme}`}>
      < Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/favs' element={<Favs />} />
        <Route path='/dentista/:id' element={<Detail />} />
        {/* <Route path='*' element={<h1>Page not Found 404</h1>} /> */}
      </Routes >
      <Footer />
    </div>
  );
}

export default App;
