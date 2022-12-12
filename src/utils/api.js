import axios from "axios";
import {useEffect, useState} from "react";

export default axios.create({
    baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/",
})

export const editAvatar = async (e, callback) => {
    e.preventDefault();
    try{
        const response = await axios.patch("users/me/avatar", {avatar: e.target["popup1__name"].value}, {
            headers: {
                authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                "Content-Type": "application/json"
            },
        });
        const avatarSrc = response.data.avatar;
        callback(avatarSrc);

    } catch (error) {
        console.log(error);
    }
}

