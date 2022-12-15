import React, {useState, useEffect} from "react";
import { useCards } from "../hooks/ContextoProvider";


const Cards = ({userObject}) => {
    const { cards, handleDeleteCard, handleLikeCard } = useCards()
    const heartBlack = '/images/heart_black.png'
    const heartWhite = '/images/heart.png'

    const [likeStatus, setLikeStatus] = useState([]);

    // Initialize the like status of each card to false
    useEffect(() => {
        const initialLikeStatus = cards.map(() => false);
        setLikeStatus(initialLikeStatus);
    }, [cards]);

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
                            {/* Add the ternary operation to the img tag to change the heart color based on the like status */}
                            <img onClick={handleLikeCard} data-card-id={card._id} src={likeStatus[index] ? heartBlack : heartWhite} alt="icon heart" className="elements__icon"/>
                            <span className="elements__count"/> {card.likes.length}
                        </button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Cards;