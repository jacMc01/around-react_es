import React, {useEffect, useState} from "react";
import { useContext } from "react";
import { 
  getCards, 
  postCard, 
  deleteCard, 
  deleteLikeCard, 
  putLikeCard,
  // getAvatar,
  getPerfil,
  // patchAvatar
  patchPerfil
} from "../utils/Api";

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
  // const [isAvatar, setIsAvatar] = useState("");
  const [perfil, setPerfil] = useState({});

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    const fetchData = async() =>{
      const response = await getCards();
      const cards = response;
      setCards(cards);
    }
    // const avatarData = async() =>{
    //   const response = await getAvatar();
    //   const avatar = response
    //   console.log(avatar);
    //   setIsAvatar(avatar);
    // }
    const perfilData = async() => {
      const response = await getPerfil();

      const currentperfil = response;

      console.log(currentperfil)
      setPerfil(currentperfil);
    }

    fetchData();
    // avatarData();
    perfilData();
  }, []);

  const handleSubmitCard = async (e) => {
    e.preventDefault();
    const name = e.target["popup3__name"].value;
    const link = e.target["popup3__about"].value;

    const response = await postCard(name, link);
    const newCard = response;
    setCards([newCard, ...cards]);
  }

  const handleDeleteCard = async (event) => { 
      const cardId = event.target.getAttribute('data-card-id');
      const response = deleteCard();
      const newCards = response.filter((card) => card._id !== cardId);
      setCards(newCards);
  }

  const handleLikeCard = async (event) => {
    const imgElement = event.target;
    const cardId = event.target.getAttribute('data-card-id');
    const userId = event.target.getAttribute('data-user-id');

    if (imgElement.src.includes("heart_black")) {
      deleteLikeCard(cardId);
    }
    else {
      putLikeCard(cardId);
    }
    getCards();

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

  // const handleSubmitAvatar = async (e) => {
  //   e.preventDefault();
  //   const isAvatar = e.target["popup1__name"].value;

  //   const response = await patchAvatar(isAvatar);
  //   const avatar = response;
  //   setIsAvatar(avatar);
  // }

  const handleSubmitPerfil = async (e) => {
    e.preventDefault();
    const name = e.target["popup__name"].value;
    const about = e.target["popup__about"].value;

    const response = await patchPerfil(name, about);
    const newPerfil = response
    setPerfil(newPerfil);
    setName(name);
    setAbout(about);
  }


  const valorDelContexto = {
    cards,
    // isAvatar,
    perfil,
    handleSubmitCard,
    handleDeleteCard,
    handleLikeCard,
    // handleSubmitAvatar,
    handleSubmitPerfil
  }

  return(
    <contexto.Provider value={valorDelContexto}>
      {children}
    </contexto.Provider>
  )
}