import React, { useState } from "react";

const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img onClick={() => setIsOpen(true)} src={imageUrl} alt="#" className="elements__photo" />
      {isOpen && (
        <div className="elements__image-popup">
          <img src={imageUrl} alt="#" className="elements__photo-popup" />
          <button onClick={() => setIsOpen(false)} className="elements__close-button">
          {/* Necesita corrección: Esta imagen debe estar más para arriba, en la esquina superior izquierda del Popup de tu imagen. Intenta crear una clase siguiendo la metodología BEM y aplicando los ajustes necesarios (puedes usar `position: absolute` para eso). */}
          <img class="elements__close-icon" src="/images/close_icon.png" alt="close icon"/>
          </button>
        </div>
      )}
    </>
  );
};

export  {ImagePopup};