import React, {useEffect, useState} from "react";
import { useContext } from "react";
import Api from "../utils/api";

export const contexto = React.createContext();

export function useCards(){
  const context = useContext(contexto);
  if(!context){
    throw new Error("useCards must be used within a CurrentUserContext");
  }
  return context;
}

export function CurrentUserContext() {
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

  const [currentUser, setCurrentUser] = useState({});

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

  const handleSubmitCard = async (e) => {
    console.log("handleSubmitCard")
    debugger
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

  const contextValue = {
    cards,
    currentUser,
    setCurrentUser,
    handleSubmitCard,
    handleDeleteCard,
    handleLikeCard
  }

  return contextValue

}
