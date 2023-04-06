import {useEffect, useState} from "react";
import Api from "../utils/Api";

export function AvatarCustom(){
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {

        const response = await Api().getUserInfo();
        setAvatar(response.avatar);

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
      setAvatar(response.avatar);
    } catch (error) {
      console.log(error);
    }
  };


  return {avatar, handleSubmitAvatar}
}
