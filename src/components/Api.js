const Api = () => {
  const baseUrl = 'https://around.nomoreparties.co/v1/cohort-1-es/';
  const token = '716b8afb-3113-4c1d-98fb-541a60ec168d';

// CARDS ////////////////////////////////////////////////

  const getCards = async () => {
    try {
      const response = await fetch(baseUrl + "cards", {
        method: 'GET',
        headers: {
          authorization: token
        }
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const postCard = async (name, link) => {
    try {
      const response = await fetch(baseUrl + "cards", {
        method: 'POST',
        headers: {
          authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, link})
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  const deleteCard = async (cardId) => {
    try{
      const response = await fetch(baseUrl + `cards/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: token,
          "Content-Type": "application/json"
        }
      });
      return await response.json();
    } catch (error){
      console.log(error);
      return error;
    }
  }

  const deleteLikeCard = async (cardId) => {
    try{
      const response = await fetch(baseUrl + `cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: token
        }
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const putLikeCard = async (cardId) => {
    try{
      const response = await fetch(baseUrl + `cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: token
        }
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

// // AVATAR  ////////////////////////////////////////////////

// const getAvatar = async () => {
//   try{
//     const response = await fetch(baseUrl + "users/me", {
//       method: 'GET',
//       headers: {
//         authorization: token
//       }
//     });
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// const patchAvatar = async (isAvatar) => {
//   try{
//     const response = await fetch(baseUrl, + "users/me", {
//       method: 'POST',
//       headers: {
//         authorization: token,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({isAvatar})
//     });
//     return await response.json();
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

//PERFIL  ////////////////////////////////////////////////

  const getPerfil = async () => {
    try{
      const response = await fetch(baseUrl + "users/me", {
        method: 'GET',
        headers: {
          authorization: token
        }
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  const patchPerfil = async (name, about) => {
    try{
      const response = await fetch(baseUrl, + "users/me", {
        method: 'PATCH',
        headers: {
          authorization: token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name, about})
      });
      return await response.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  return { getCards, postCard, deleteCard, deleteLikeCard, putLikeCard, getPerfil, patchPerfil }
};

export default Api;
