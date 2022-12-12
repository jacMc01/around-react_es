import React from "react";
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {ContextoProvider} from "./hooks/ContextoProvider";


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
