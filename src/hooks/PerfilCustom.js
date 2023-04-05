import {useEffect, useState} from "react";
import api from "../utils/api";


//todo : unify with AvatarCustom
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
        setUserObject(response.data);
        setName(response.data.name);
        setAbout(response.data.about);
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
      setName(response.data.name);
      setAbout(response.data.about);

    } catch (error) {
      console.log(error);
    }
  }

  return {name, about,userObject, handleSubmitPerfil}
}
