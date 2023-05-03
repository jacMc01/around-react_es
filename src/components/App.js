
import {React, useState, useEffect} from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {contexto, CurrentUserContext} from "../contexts/CurrentUserContext";
import Api from "../utils/api";

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [likeStatus, setLikeStatus] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await Api.getUserInfo();
      setCurrentUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <>
    <Header />
    <contexto.Provider value={{...CurrentUserContext(), currentUser, setCurrentUser, likeStatus, setLikeStatus}}>
      <Main currentUser={setCurrentUser}/>
    </contexto.Provider>
    <Footer />
  </>
  );
}

export default App;
