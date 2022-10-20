import React, {useState} from "react";
import api from "../utils/api";

const Cards = () => {

    const [cards, setCards] = useState([]);

    React.useEffect(() => {
        const fetchCard = async () => {
            try {
                const response = await api.get("cards", {
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
        fetchCard();
    }, []);

    return (
        <>
            {cards.map((card, index) => (
                <div className="elements__element" id="elements__element" key={index}>
                    <img src="/images/elements__trash.png" alt="icon trash" className="elements__trash"/>
                    <img src={card.link} alt="#" className="elements__photo"/>
                    <div className="elements__info" id="#">
                        <h3 className={`"elements__place"`}>{card.name}</h3>
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