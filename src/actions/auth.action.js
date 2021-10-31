import Swal from "sweetalert2";
import { fetchNoToken } from "../helpers/fetch";
import { formatResponseError } from "../helpers/formatErrors";
import { types } from "../types/types";
import { setFlagShowLoading } from "./ui.action";

export const startLogin = (formData) => {
  return async (dispatch) => {
    try {
      dispatch(setFlagShowLoading(true));
      const response = await fetchNoToken(
        "User/authenticate",
        formData,
        "POST"
      );
      const { errorCode, message, data } = await response.json();

      if (errorCode === "000") {
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("token", data.token);

        dispatch(
          login({
            userId: data.userId,
            userName: data.userName,
          })
        );
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al autenticar:",
          html: formatResponseError(errorCode, message),
          confirmButtonText: "Aceptar",
        });
      }
      dispatch(setFlagShowLoading(false));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al autenticar:",
        text: error,
        confirmButtonText: "Aceptar",
      });
    }
  };
};

const login = (data) => ({
  type: types.authLogin,
  payload: data,
});

export const logout = () => ({
  type: types.authLogout,
});
