import React, { useContext } from "react";
import { contexto } from "../contexts/CurrentUserContext";
import ImagePopup from "./ImagePopup";

const Card = () => {

  const { cards, handleDeleteCard, handleLikeCard, currentUser, likeStatus } = useContext(contexto)
  const heartBlack = '/images/heart_black.png'
  const heartWhite = '/images/heart.png'

  return (
    <>
      {cards.map((card, index) => (
        <div className="elements__element" id="elements__element" key={index}>
          {(card.owner._id === currentUser._id) && (
              <img onClick={handleDeleteCard} data-card-id={card._id} src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
          )}
          <ImagePopup imageUrl={card.link} />
          <div className="elements__info" id="#">
            <h3 className={`"elements__place"`}>{card.name}</h3>
            <button className="elements__button">
              <img onClick={handleLikeCard} data-user-id={currentUser._id} data-card-id={card._id} src={likeStatus[index] ? heartBlack : heartWhite} alt="icon heart" className="elements__icon"/>
              <span className="elements__count" > {card.likes.length} </span>
            </button>
          </div>
        </div>
      ))}
    </>

  )
}

export default Card;
