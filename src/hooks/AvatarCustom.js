import {useEffect, useState} from "react";
import Api from "../utils/api";
import { useCards } from "../contexts/CurrentUserContext";

export function AvatarCustom(){

  const { setCurrentUser } = useCards()

  useEffect(() => {
    const fetchAvatar = async () => {
      try {

        const response = await Api().getUserInfo();
        setCurrentUser(response);

      } catch (error) {
        console.log(error);
      }
    };

    fetchAvatar();

  }, []);


  const handleSubmitAvatar = async (e) => {
    e.preventDefault();

    const { popup1__name } = e.target;

    try {
      const response = await Api().updateAvatar(popup1__name.value);
      setCurrentUser(response);
    } catch (error) {
      console.log(error);
    }
  };


  return {handleSubmitAvatar}
}
