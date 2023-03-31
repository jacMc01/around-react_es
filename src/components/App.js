
import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import {ContextoProvider} from "../hooks/ContextoProvider";


function App() {

  return (
  <>
    <Header />
    <ContextoProvider>
      <Main />
    </ContextoProvider>
    <Footer />
  </>
  );
}

export default App;
