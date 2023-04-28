import {React, useState, useEffect} from "react";
import '../../src/index.css';
import { useForm } from "../hooks/useForm";
import PopupWithForm from "./PopupWithForm";
import Card from "./Card";

import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";

import { AvatarCustom } from "../hooks/AvatarCustom.js";
import { PerfilCustom } from "../hooks/PerfilCustom.js";
import { useCards } from "../contexts/CurrentUserContext";

const Main = () => {
  const [isOpenModal1, openModal1, closeModal1] = useForm(false);
  const [isOpenModal2, openModal2, closeModal2] = useForm(false);
  const [isOpenModal3, openModal3, closeModal3] = useForm(false);


  const { handleSubmitCard, currentUser} = useCards()
  const { handleSubmitAvatar } = AvatarCustom();
  const { handleSubmitPerfil } = PerfilCustom();


  const [nameState, setNameState] = useState("Loading");
  const [aboutState, setAboutState] = useState("Loading");
  const [avatarState, setAvatarState] = useState("Loading");

  useEffect(() => {
    if (!currentUser) {
      return;
    }

    setNameState(currentUser.name);
    setAboutState(currentUser.about);
    setAvatarState(currentUser.avatar);

  },[currentUser]);


  function handleEditAvatarClick(e) {
    e.preventDefault();

    const input = e.target;
    const spanError = input.nextElementSibling;

    if (input.value.length < input.minLength || input.value.length > input.maxLength) {
      input.classList.add("popup__input_type_error");
      spanError.textContent = "Debe tener entre " + input.minLength + " y " + input.maxLength + " caracteres";
    } else {
      input.classList.remove("popup__input_type_error");
      spanError.textContent = "";
    }
  }

  function handleEditProfileClick(e) {
    e.preventDefault();
    const input = e.target;
    const spanError = input.nextElementSibling;

    if (input.value.length < input.minLength || input.value.length > input.maxLength) {
      input.classList.add("popup__input_type_error");
      spanError.textContent = "Debe tener entre " + input.minLength + " y " + input.maxLength + " caracteres";
    } else {
      input.classList.remove("popup__input_type_error");
      spanError.textContent = "";
    }
  }

  function handleAddPlaceClick(e) {
    e.preventDefault();

    const input = e.target;
    const spanError = input.nextElementSibling;

    if (input.value.length < input.minLength || input.value.length > input.maxLength) {
      input.classList.add("popup__input_type_error");
      spanError.textContent = "Debe tener entre " + input.minLength + " y " + input.maxLength + " caracteres";
    } else {
      input.classList.remove("popup__input_type_error");
      spanError.textContent = "";
    }
  }

  return (
    <>
      <section className="profile">
        <div className="profile__container">
          <div className="profile__images">
            <img src={avatarState} alt="a person" className="profile__img" onClick={openModal1} />
            <img src="/images/prfile__pencil.png" alt="icon edit images" className="profile__edit" />
          </div>
          <div className="profile__person">
            <h2 className={`"profile__name"`}>{nameState}</h2>
            <p className={`"profile__about"`}>{aboutState}</p>
          </div>
          <button className="profile__button-person"><img src="/images/prfile__pencil.png" alt="heart icon" className="profile__icon" onClick={openModal2} /></button>
        </div>
        <button className="profile__btn-image" onClick={openModal3}><img src="/images/profile__plus.png" alt="icon plus" className="profile__button-plus" /></button>
      </section>
      <section className="elements">
        <Card />
      </section>
      {/*Cambiar Avatar*/}
      <PopupWithForm isOpen={isOpenModal1}>
        <EditAvatarPopup closeModal={closeModal1} handleEditAvatarClick={handleEditAvatarClick} handleSubmitAvatar={handleSubmitAvatar} />
      </PopupWithForm>
      {/*Editar Perfil*/}
      <PopupWithForm isOpen={isOpenModal2} closeModal={closeModal2}>
        <EditProfilePopup closeModal={closeModal2} handleEditProfileClick={handleEditProfileClick} handleSubmitPerfil={handleSubmitPerfil} />
      </PopupWithForm>
      {/*Agregar Tarjeta*/}
      <PopupWithForm isOpen={isOpenModal3} >
        <AddPlacePopup closeModal={closeModal3} handleAddPlaceClick={handleAddPlaceClick} handleSubmitCard={handleSubmitCard} />
      </PopupWithForm>
    </>
  );
}

export default Main;
