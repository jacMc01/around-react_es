import {useEffect, useState} from "react";
import api from "../components/Api";

export function PerfilCustom(){
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");

    const [userObject, setUserObject] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get("users/me", {
                    headers: {
                        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
                    }
                });
                const user = response.data;
                setUserObject(user);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);


    const handleSubmitPerfil = async (e) => {
        e.preventDefault();
        try{
            const response = await api.patch("users/me", {name: e.target["popup__name"].value, about: e.target["popup__about"].value}, {
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                    "Content-Type": "application/json"
                },
            });
            const nameInput = response.data.name;
            const aboutInput = response.data.about;
            setName(nameInput);
            setAbout(aboutInput);

        } catch (error) {
            console.log(error);
        }
    }

    return {name, about,userObject, handleSubmitPerfil}
}
