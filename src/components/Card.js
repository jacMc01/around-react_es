import React from "react";
import { useCards } from "../hooks/ContextoProvider";


const Cards = ({userObject}) => {
    const { cards, handleDeleteCard, handleLikeCard } = useCards()

    return (
        <>
            {cards.map((card, index) => (
                <div className="elements__element" id="elements__element" key={index}>
                    {(card.owner._id === userObject._id)
                        ? <img onClick={handleDeleteCard} data-card-id={card._id} src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
                        : <></>}
                    <img src={card.link} alt="#" className="elements__photo"/>
                    <div className="elements__info" id="#">
                        <h3 className={`"elements__place"`}>{card.name}</h3>
                        <button className="elements__button">
                            <img onClick={handleLikeCard} data-card-id={card._id} src="/images/heart.png" alt="icon heart" className="elements__icon"/>
                            <span className="elements__count"/> {card.likes.length}
                            <span className="elements__count"/>
                        </button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Cards;