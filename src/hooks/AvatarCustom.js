import {useEffect, useState} from "react";
import api2 from "../utils/api2";

//todo: fix display of the avatar
export function AvatarCustom(){
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {

        const response = await api2().getUserInfo();
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
      const response = await api2().updateAvatar(popup1__name.value);
      setAvatar(response.avatar);
    } catch (error) {
      console.log(error);
    }
  };


  return {avatar, handleSubmitAvatar}
}
