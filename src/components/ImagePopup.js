
import React, { useState } from "react";

const ImagePopup = ({ imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <img onClick={() => setIsOpen(true)} src={imageUrl} alt="#" className="elements__photo" />
      {isOpen && (
        <div className="popup">
          <img src={imageUrl} alt="#" className="elements__photo" />
          <button onClick={() => setIsOpen(false)} className="popup__close-button">
            Close
          </button>
        </div>
      )}
    </>
  );
};

export  {ImagePopup};