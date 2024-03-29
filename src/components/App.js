
import {React, useState, useEffect} from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import {contexto} from "../contexts/CurrentUserContext";
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

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await Api.getCards()
      setCards(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCard = async (e) => {

    e.preventDefault();
    try{
      const response = await Api.postCard(e.target['popup3__name'].value, e.target['popup3__about'].value);
      setCards([response, ...cards]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteCard = async (event) => {
    try {
      const cardId = event.target.getAttribute('data-card-id');
      await Api.deleteCard(cardId);
      setCards(cards.filter((card) => card._id !== cardId));
    } catch (error) {
      console.log(error);
    }
  }

  const handleLikeCard = async (event) => {

    const imgElement = event.target;

    const cardId = event.target.getAttribute('data-card-id');
    const userId = event.target.getAttribute('data-user-id');


    if (imgElement.src.includes("heart_black")) {
      try {

        await Api.deleteLike(cardId);
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try{

        await Api.putLike(cardId);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCard();

    const newCards = cards.map(card => {
      if(card !== cardId){
        return card
      }
      return {...card, likes: card.likes.filter(like => {
          return like._id !== userId
        })}
    })
    setCards(newCards);
  }

  useEffect(() => {

    if (!cards) {
      return;
    }

    const initialLikeStatus = cards.map((item) => {
      return item.likes.some(user => {
        return user._id === currentUser._id
      });
    });
    setLikeStatus(initialLikeStatus);
  }, [cards, currentUser]);

  const contextValue = {
    cards,
    handleSubmitCard,
    handleDeleteCard,
    handleLikeCard
  }


  return (
  <>
    <Header />
    <contexto.Provider value={{...contextValue, currentUser, setCurrentUser, likeStatus, setLikeStatus}}>
      <Main />
    </contexto.Provider>
    <Footer />
  </>
  );
}

export default App;
