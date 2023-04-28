import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {CurrentUserContext, contexto} from "../contexts/CurrentUserContext";

function App() {

  return (
  <>
    <Header />
    <CurrentUserContext.Provider>
      <Main />
    </CurrentUserContext.Provider>
    <Footer />
  </>
  );
}

export default App;
