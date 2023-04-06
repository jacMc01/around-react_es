import {useEffect, useState} from "react";
import Api from "../utils/Api";

export function PerfilCustom(){
  const [name, setName] = useState("");
  const [about, setAbout] = useState("");

  const [userObject, setUserObject] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Api().getUserInfo();

        setUserObject(response);
        setName(response.name);
        setAbout(response.about);
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
      const response = await Api().updateUserProfile(popup__name.value, popup__about.value);
      setName(response.name);
      setAbout(response.about);
    } catch (error) {
      console.log(error);
    }
  };

  return {name, about,userObject, handleSubmitPerfil}
}
