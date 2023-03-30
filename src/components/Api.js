import axios from "axios";

const Api = axios.create({
    baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/",
})

export default Api



