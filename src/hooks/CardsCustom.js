import React, {useEffect, useState} from "react";
import api from "../utils/api";


export function CardsCustom(setUpdate) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
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
    }, [setCards]);

    const handleSubmitCard = async (e) => {
        e.preventDefault();
        console.log(e.target["popup3__name"].value);
        console.log(e.target["popup3__about"].value);
        try{
            const response = await api.post("cards", {name: e.target["popup3__name"].value, link: e.target["popup3__about"].value}, {
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                    "Content-Type": "application/json"
                },
            });

            const newCard = response.data;

            console.log(newCard);
            setCards([newCard, ...cards]);
            setUpdate(true);

        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteCard = async (cardId) => {
        try {
            await api.delete(`cards/${cardId}`, {
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


    return {cards, setCards, handleSubmitCard, handleDeleteCard}
}

