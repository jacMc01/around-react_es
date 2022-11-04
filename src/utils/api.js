import axios from "axios";
import {useEffect, useState} from "react";

export default axios.create({
    baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/",
})

