import React, {useState} from "react";
import '../blocks/Main.css';
import {useForm} from "./useForm";
import PopupWithForm from "./PopupWithForm";
import  "../blocks/Modal.css";
import Cards from "./Card";

const Main = () => {

    function HandleEditAvatarClick() {
        // Se llama un hook para abrir el modal

        openModal1()
        // llamar la funcion para activar validacion en
        // el formulario activo...
    }

    function handleEditProfileClick() {
        console.log("Edit profile button clicked");
    }

    function handleAddPlaceClick() {
        console.log("Add place button clicked");
    }

    const [isOpenModal1, openModal1, closeModal1] = useForm(false);
    const [isOpenModal2, openModal2, closeModal2] = useForm(false);
    const [isOpenModal3, openModal3, closeModal3] = useForm(false);

    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__images">
                        <img src="#" alt="a person" className="profile__img" onClick={HandleEditAvatarClick}/>
                            <img src="/images/prfile__pencil.png" alt="icon edit image" className="profile__edit" />
                    </div>
                    <div className="profile__person">
                        <h2 className="profile__name">Jacqueline Mckay</h2>
                        <p className="profile__about">Desarrollador Web FullStack</p>
                    </div>
                    <button className="profile__button-person"><img src="/images/prfile__pencil.png" alt="heart icon" className="profile__icon" onClick={openModal2}/></button>
                </div>
                <button className="profile__btn-image" onClick={openModal3}><img src="/images/profile__plus.png" alt="icon plus" className="profile__button-plus" /></button>
            </section>
            <section className="elements">
                <Cards />
            </section>
            <PopupWithForm isOpen={isOpenModal1} closeModal={closeModal1}>
                <h4 className="popup__title">Cambiar foto de perfil</h4>
                <form className="popup__form" name="popup1__form" noValidate>
                    <input
                        className="popup__name popup__input"
                        id="popup1__name"
                        type="text"
                        placeholder="Nombre"
                        minLength="2"
                        maxLength="40"
                        name="name"
                        // onChange={handleInputChange}
                        required>
                    </input>
                    <span className="popup__name-error"></span>
                    <button type="submit" className="popup__button-form popup__button-form_inactive">Guardar</button>
                </form>
            </PopupWithForm>
            <PopupWithForm isOpen={isOpenModal2} closeModal={closeModal2}>
                <h4 className="popup__title">Editar perfil</h4>
                <form className="popup__form" name="popup__form" noValidate>
                    <input
                        className="popup__name popup__input"
                        id="popup__name"
                        type="text"
                        placeholder="Nombre"
                        minLength="2"
                        maxLength="40"
                        name="name"
                        // onChange={handleInputChange}
                        required>
                    </input>
                    <span className="popup__name-error"></span>
                    <input
                        className="popup__about popup__input"
                        id="popup__about"
                        type="text"
                        placeholder="Acerca de mi"
                        minLength="2"
                        maxLength="200"
                        name="aboutMe"
                        // onChange={handleInputChange}
                        required>
                    </input>
                    <span className="popup__about-error"></span>
                    <button type="submit" className="popup__button-form popup__button-form_inactive">Guardar</button>
                </form>
            </PopupWithForm>
            <PopupWithForm isOpen={isOpenModal3} closeModal={closeModal3}>
                <h4 className="popup__title">Nuevo lugar</h4>
                <form className="popup__form" name="popup3__form">
                    <input
                        className="popup__name popup__input"
                        id="popup3__name"
                        type="text"
                        placeholder="Titulo"
                        maxLength="30"
                        minLength="2">
                    </input>
                    <span className="popup__name-error"></span>

                    <input
                        className="popup__about popup__input"
                        id="popup3__about"
                        type="url"
                        placeholder="Enlace de la imagen"
                        minLength="2"
                        maxLength="200" required>
                    </input>
                    <span className="popup__name-error"></span>
                    <button className="popup__button-form popup__button-form_inactive">Guardar</button>
                </form>
            </PopupWithForm>

        </>
    );
}

export default Main;