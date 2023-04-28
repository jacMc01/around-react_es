
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {CurrentUserContext} from "../contexts/CurrentUserContext";

function App() {

  return (
  <>
    <Header />
    <CurrentUserContext>
      <Main />
    </CurrentUserContext>
    <Footer />
  </>
  );
}

export default App;
