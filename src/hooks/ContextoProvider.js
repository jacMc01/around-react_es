import React, {useEffect, useState} from "react";
import { useContext } from "react";
import api2 from "../utils/api2";

//todo unify api calls inside Api.js
export const contexto = React.createContext();

export function useCards(){
  const context = useContext(contexto);
  if(!context){
    throw new Error("useCards must be used within a ContextoProvider");
  }
  return context;
}


export function ContextoProvider({children}) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCard();
  }, []);

  const fetchCard = async () => {
    try {
      const response = await api2().getCards()
      setCards(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    try{
      const response = await api2().postCard(e.target['popup3__name'].value, e.target['popup3__about'].value);
      setCards([response, ...cards]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDeleteCard = async (event) => {
    try {
      const cardId = event.target.getAttribute('data-card-id');
      await api2().deleteCard(cardId);
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

        await api2().deleteLike(cardId);
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try{

        await api2().putLike(cardId);
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

  const valorDelContexto = {
    cards,
    handleSubmitCard,
    handleDeleteCard,
    handleLikeCard
  }

  return(
    <contexto.Provider value={valorDelContexto}>
      {children}
    </contexto.Provider>
  )
}
