import React from "react";
import '../blocks/Main.css';

const Main = () => {
    return (
        <>
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__images">
                        <img src="#" alt="a person" className="profile__img" />
                            <img src="../images/prfile__pencil.png" alt="icon edit image" className="profile__edit" />
                    </div>
                    <div className="profile__person">
                        <h2 className="profile__name">Jacqueline Mckay</h2>
                        <p className="profile__about">Desarrollador Web FullStack</p>
                    </div>
                    <button className="profile__button-person"><img src="/src/images/prfile__pencil.png" alt="heart icon" className="profile__icon" /></button>
                </div>
                <button className="profile__btn-image"><img src="/src/images/profile__plus.png" alt="icon plus" className="profile__button-plus"/></button>
            </section>
            <section className="elements">

            </section>
        </>
    );
}

export default Main;