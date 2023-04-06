import axios from "axios";

const api2 = () => {
  const api_base = axios.create({
    baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/"
  });

  const authHeaders = {
    headers: {
      authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      "Content-Type": "application/json"
    }
  }

  const authHeaders2 = {
    headers: {
      authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
    }
  }

  const updateUserProfile = async (name, about) => {
    const response = await api_base.patch("users/me", { name, about });
    return response.data;
  };


  const updateAvatar = async (avatar) => {
    const response = await api_base.patch("users/me/avatar", { avatar });
    return response.data;
  }

  const getUserInfo = async () => {
    const response = await api_base.get("users/me", authHeaders2);
    return response.data;
  }

  const getCards = async () => {
    const response = await api_base.get("cards", authHeaders2);
    return response.data;
  }

  const postCard = async (name, link) => {
    const response = await api_base.post("cards", { name, link }, authHeaders);
    return response.data;
  }

  const deleteCard = async (cardId) => {
    const response = await api_base.delete(`cards/${cardId}`, authHeaders);
    return response.data;
  }

  const deleteLike = async (cardId) => {
    const response = await api_base.delete(`cards/likes/${cardId}`, authHeaders2);
    return response.data;
  }

  const putLike = async (cardId) => {
    const response = await api_base.put(`cards/likes/${cardId}`,{} ,authHeaders2);
    return response.data;
  }

  return { updateUserProfile, updateAvatar, getUserInfo, getCards, postCard, deleteCard,
          deleteLike, putLike};
};

export default api2;
