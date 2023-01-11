import axios from "axios";

export default axios.create({
    baseURL: "https://around.nomoreparties.co/v1/cohort-1-es/",
})

export const editAvatar = async (e, callback) => {
    e.preventDefault();
    try{
        const response = await axios.patch("users/me/avatar", {avatar: e.target["popup1__name"].value}, {
            headers: {
                authorization: "716b8afb-3113-4c1d-98fb-541a60ec168d",
                "Content-Type": "application/json"
            },
        // Necesita corrección: Debes añadir también un bloque `catch` en caso de que tu requisitud al servidor falle. Esa és una buena práctica para mantener siempre que haces requisiciones Web que pueden fallar por alguna razón.
        //nota: en la linea 21 hay un catch, no comprendi la correccion
        });
        const avatarSrc = response.data.avatar;
        callback(avatarSrc);

    } catch (error) {
        console.log(error);
    }
}

