
import axios from "axios";

class Api {
  constructor() {
    this.api_base = axios.create({
      baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/"
    });

    this.authHeaders = {
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
        "Content-Type": "application/json"
      }
    }

    this.authHeaders2 = {
      headers: {
        authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
      }
    }
  }

  async updateUserProfile(name, about) {
    const response = await this.api_base.patch("users/me", { name, about }, this.authHeaders);
    return response.data;
  };


  async updateAvatar(avatar) {
    const response = await this.api_base.patch("users/me/avatar", { avatar }, this.authHeaders);
    return response.data;
  }

  async getUserInfo() {
    const response = await this.api_base.get("users/me", this.authHeaders2);
    return response.data;
  }

  async getCards() {
    const response = await this.api_base.get("cards", this.authHeaders2);
    return response.data;
  }

  async postCard(name, link) {
    const response = await this.api_base.post("cards", { name, link }, this.authHeaders);
    return response.data;
  }

  async deleteCard(cardId) {
    const response = await this.api_base.delete(`cards/${cardId}`, this.authHeaders);
    return response.data;
  }

  async deleteLike(cardId) {
    const response = await this.api_base.delete(`cards/likes/${cardId}`, this.authHeaders2);
    return response.data;
  }

  async putLike(cardId) {
    const response = await this.api_base.put(`cards/likes/${cardId}`, {} ,this.authHeaders2);
    return response.data;
  }
}

const api = new Api();

export default api;
