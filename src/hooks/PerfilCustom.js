import {useEffect, useState} from "react";
import Api from "../utils/api";
import { useCards } from "../contexts/CurrentUserContext";

export function PerfilCustom(){

  const { setCurrentUser } = useCards()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Api.getUserInfo();

        setCurrentUser(response);

      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, []);

  const handleSubmitPerfil = async (e) => {
    e.preventDefault();
    const { popup__name, popup__about } = e.target;

    try {
      const response = await Api.updateUserProfile(popup__name.value, popup__about.value);

      setCurrentUser(response);

    } catch (error) {
      console.log(error);
    }
  };

  return {handleSubmitPerfil}
}
