import {useEffect, useState} from "react";
import api from "../utils/api";


export function AvatarCustom(){
    const [isAvatar, setIsAvatar] = useState("");

    useEffect(() => {
        const fetchAvatar = async () => {
            try {
                const response = await api.get("users/me", {
                    headers: {
                        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
                    }
                });
                const avatar = response.data.avatar;
                setIsAvatar(avatar);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAvatar();
    }, []);

    const handleSubmitAvatar = async (e) => {
        e.preventDefault();
        // Necesita corrección: Evita dejar líneas de debug en tu código al enviarlo, ellas pueden exponer información sensible de tu proyecto.
        //corregido
        try{
            const response = await api.patch("users/me/avatar", {isAvatar: e.target["popup1__name"].value}, {
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                    "Content-Type": "application/json"
                },
            });
            const avatarSrc = response.data.isAvatar;
            setIsAvatar(avatarSrc);

        } catch (error) {
            console.log(error);
        }
    }

    return {isAvatar, handleSubmitAvatar}
}