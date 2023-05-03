
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {contexto, CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

  return (
  <>
    <Header />
    <contexto.Provider value={CurrentUserContext()}>
      <Main />
    </contexto.Provider>
    <Footer />
  </>
  );
}

export default App;
