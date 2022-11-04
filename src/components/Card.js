import React from "react";
import {CardsCustom} from "../hooks/CardsCustom";


const Cards = ({userObject}) => {
    const {cards} = CardsCustom();
    //let whiteHeart = "/images/heart.png";

    function deleteCard(event) {
        console.log((event.target.parentElement));
        console.log((event.target.dataset.id));
    }

    // function handleCardLikes(event) {
    //         console.log("Card clicked");
    //
    //     whiteHeart = "/images/heart_black.png";
    //
    // }


    return (
        <>
            {cards.map((card, index) => (
                <div className="elements__element" id="elements__element" key={index}>
                    {(card.owner._id === userObject._id)
                        ? <img onClick={deleteCard} src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
                        : <></>}
                    <img src={card.link} alt="#" className="elements__photo"/>
                    <div className="elements__info" id="#">
                        <h3 className={`"elements__place"`}>{card.name}</h3>
                        <button className="elements__button">
                            <img src="/images/heart.png" alt="icon heart" className="elements__icon"/>
                            <span className="elements__count"/> {card.likes.length}
                        </button>
                    </div>
                </div>
            ))}
        </>

    )
}

export default Cards;