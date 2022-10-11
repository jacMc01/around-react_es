import React from "react";

const Cards = () => {

    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        async function getCards() {
            const baseUrl = "https://around.nomoreparties.co/v1/cohort-1-es";
            const response = await fetch(baseUrl + "/cards", {
                method: "GET",
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
                }
            });

            const cards = await response.json();
            const filteredCards = cards.map(({name, link}) => ({name, link}));
            setCards(filteredCards);
            console.log(cards)

        }
        getCards()
    }, []);

    return (
        <>
            {cards.map((card, index) => (
                <div className="elements__element" id="elements__element" key={index}>
                    <img src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
                    <img src={card.link} alt="#" className="elements__photo"/>
                    <div className="elements__info" id="#">
                        <h3 className={`"elements__place" ${card.name}`}></h3>
                        <button className="elements__button">
                            <img src="/images/heart.png" alt="icon heart" className="elements__icon"/>
                            <span className="elements__count"/>
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cards;