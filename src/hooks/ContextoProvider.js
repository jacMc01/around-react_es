import React, {useEffect, useState} from "react";
import { useContext } from "react";
import Api from "../utils/Api";

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
      const response = await Api.get("cards", {
        headers: {
          authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
        }
      });
      const cards = response.data;
      setCards(cards);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    try{
      const response = await Api.post("cards", {name: e.target["popup3__name"].value, link: e.target["popup3__about"].value}, {
        headers: {
          authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
          "Content-Type": "application/json"
        },
      });

      const newCard = response.data;
      setCards([newCard, ...cards]);
    } catch (error) {
      console.log(error);
    }
  }


  const handleDeleteCard = async (event) => {
    try {
      const cardId = event.target.getAttribute('data-card-id');
      await Api.delete(`cards/${cardId}`, {
        headers: {
          authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
        }
      });
      const newCards = cards.filter((card) => card._id !== cardId);
      setCards(newCards);
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
        const send_str_url = `cards/likes/${cardId}`
        await Api.delete(send_str_url, {
          headers: {
            Authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try{
        const send_str_url = `cards/likes/${cardId}`
        await Api.put(send_str_url,{}, {
          headers: {
            Authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
          }
        });
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