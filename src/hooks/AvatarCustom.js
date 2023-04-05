import {useEffect, useState} from "react";
import api from "../utils/api";

//todo: fix display of the avatar
export function AvatarCustom(){
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await api.get("users/me", {
          headers: {
            authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d"
          }
        });
        setAvatar(response.data.avatar);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAvatar();

  }, []);

  const handleSubmitAvatar = async (e) => {
    e.preventDefault();
    try{
      const response = await api.patch("users/me/avatar", {avatar: e.target["popup1__name"].value}, {
        headers: {
          authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
          "Content-Type": "application/json"
        },
      });
      setAvatar(response.data.avatar);

    } catch (error) {
      console.log(error);
    }
  }

  return {avatar, handleSubmitAvatar}
}
