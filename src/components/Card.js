import React from "react";

const Cards = () => {

    const [cards, setCards] = React.useState([]);
    const [urlImage, setUrlImage] = React.useState([]);
    const [name, setName] = React.useState("");


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
            setUrlImage(cards.map((card) => card.link, setName(cards.map((card) => card.name))));

            console.log(cards[0].name);

            setCards(cards);
        }
        getCards()
    }, []);

    return (
        <>
            {cards.map((card, index) => (
                <div className="elements__element" id="elements__element" key={index}>
                    <img src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
                    <img src={urlImage[index]} alt="#" className="elements__photo"/>
                    <div className="elements__info" id="#">
                        <h3 className={`"elements__place" ${name[index]}`}></h3>
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