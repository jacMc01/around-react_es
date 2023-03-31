import axios from "axios";

const api = axios.create({
  baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/",
})

export default api



