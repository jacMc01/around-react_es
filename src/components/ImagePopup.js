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
          {/* aqui tengo duda de como posicionar la x, le intente de varias maneras me podria ayudar aqui? */}
          <img class="elements__close-icon" src="/images/close_icon.png" alt="close icon"/>
          </button>
        </div>
      )}
    </>
  );
};

export default ImagePopup;
