import React, {useEffect, useState} from "react";
import api from "../utils/api";

export const contexto = React.createContext();

export function ContextoProvider(setUpdate, props) {
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
    }, []);

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


    const handleDeleteCard = async (event) => {
        try {
            const cardId = event.target.getAttribute('data-card-id');
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

    const handleLikeCard = async (event) => {
        // const [isLiked, setIsLiked] = useState(false);
        try {
            const cardId = event.target.getAttribute('data-card-id');
            console.log(cardId);
            const isLiked = event.target.classList.contains('elements__icon');
            const response = await api.put(`cards/likes/${cardId}`, {
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                }
            });
            // const newCards = cards.map((card) => card._id === cardId ? response.data : card);
            // setCards(newCards);
        } catch (error) {
            console.log(error);
        } finally {
            console.log("completed")
        }
    }


    const valorDelContexto = {
        cards,
        handleSubmitCard,
        handleDeleteCard,
        handleLikeCard
    }

    return(
        <contexto.Provider value={valorDelContexto}>
            {props.children}
        </contexto.Provider>
    )
}

