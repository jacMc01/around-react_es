import React, {useEffect, useState} from "react";
import '../blocks/Main.css';
import {useForm} from "./useForm";
import PopupWithForm from "./PopupWithForm";
import  "../blocks/Modal.css";
import Cards from "./Card";
import api, {editAvatar} from "../utils/api";

const Main = () => {
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [about, setAbout] = useState("");
    const [isOpenModal1, openModal1, closeModal1] = useForm(false);
    const [isOpenModal2, openModal2, closeModal2] = useForm(false);
    const [isOpenModal3, openModal3, closeModal3] = useForm(false);


    const initialValueAvatar = {inputAvatar: ""};
    const [valuesAvatar, setValuesAvatar] = useState(initialValueAvatar);
    const [errorsAvatar, setErrorsAvatar] = useState({});
    const [isSubmitAvatar, setSubmitAvatar] = useState(false);


    const handleSubmitAvatar = (e) => {
        e.preventDefault();
        console.log(e.target["popup1__name"].value);
        editAvatar( e, res => setAvatar(res));
        //break
        setErrorsAvatar(validate(valuesAvatar));
        setSubmitAvatar(true);
    }

    useEffect(() => {
        if (Object.keys(errorsAvatar).length === 0 && isSubmitAvatar) {
            console.log(valuesAvatar);
        }
    }, [errorsAvatar]);


    function handleEditAvatarClick(e) {
        e.preventDefault();
        // console.log(e.target.value)
        const {name, value} = e.target;
        setValuesAvatar({...valuesAvatar, [name]: value});
        console.log(valuesAvatar);
    }

    const validate = (valuesAvatar) => {
        let errors = {};
        const regex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!valuesAvatar.inputAvatar) {
            errors.inputAvatar = "Required";
        }
        else if (!regex.test(valuesAvatar.inputAvatar)) {
            errors.inputAvatar = "Invalid URL";
        }

        return errors;
}

    const handleSubmitPerfil = async (e) => {
        e.preventDefault();
        console.log(e.target["popup__name"].value);
        console.log(e.target["popup__about"].value);
        try{
            const response = await api.patch("users/me", {name: e.target["popup__name"].value, about: e.target["popup__about"].value}, {
                headers: {
                    authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                    "Content-Type": "application/json"
                },
            });
            const nameInput = response.data.name;
            const aboutInput = response.data.about;
            setName(nameInput);
            setAbout(aboutInput);

        } catch (error) {
            console.log(error);
        }
    }


    function handleEditProfileClick() {
        console.log("Edit profile button clicked");
    }

    function handleAddPlaceClick() {
        console.log("Add place button clicked");
    }

    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__images">
                        <img src={avatar}  alt="a person" className="profile__img" onClick={openModal1}/>
                            <img src="/images/prfile__pencil.png" alt="icon edit image" className="profile__edit" />
                    </div>
                    <div className="profile__person">
                        <h2 className={`"profile__name"`}>{name}</h2>
                        <p className={`"profile__about"`}>{about}</p>
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
                <form onSubmit={handleSubmitAvatar} className="popup__form" name="popup1__form" noValidate>
                    <input
                        onChange={handleEditAvatarClick}
                        className="popup__name popup__input"
                        id="popup1__name"
                        type="text"
                        placeholder="Link de la imagen"
                        minLength="2"
                        maxLength="500"
                        name="inputAvatar"
                        value={valuesAvatar.inputAvatar}
                        required>
                    </input>
                    <span className="popup__name-error"></span>
                    <button type="submit" className="popup__button-form popup__button-form_inactive">Guardar</button>
                </form>
            </PopupWithForm>
            <PopupWithForm isOpen={isOpenModal2} closeModal={closeModal2}>
                <h4 className="popup__title">Editar perfil</h4>
                <form onSubmit={handleSubmitPerfil} className="popup__form" name="popup__form" noValidate>
                    <input
                        className="popup__name popup__input"
                        id="popup__name"
                        type="text"
                        placeholder="Nombre"
                        minLength="2"
                        maxLength="40"
                        name="name"
                        onChange={handleEditProfileClick}
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
                        onChange={handleEditProfileClick}
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