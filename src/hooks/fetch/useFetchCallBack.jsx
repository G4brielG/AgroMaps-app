// import { SessionContext } from "../../contexts/SessionProvider";
import { useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const useFetchCallBack = () => {
  const dispatch = useContext(SessionContext)[1];
  const navigate = useNavigation();

  return async (url, content, callback = null) => {
    const complete_content = {
      mode: "cors",
      method: "GET",
      ...content,
      headers: {
        ...content.headers,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };

    try {
      const response = await fetch(url, complete_content);
      const json = await response.json();
      response.json = () => new Promise((resolve) => resolve(json));
      response.syncJson = () => json;

      // en caso de que cuente con un callback
      if (callback) {
        callback(response);
      }

      // En caso de que no este logueado
      if (response?.status === 401) {
        console.log(response.json.message)
        dispatch({ type: "logout" });
        navigate("login");
      }
      return response;
    } catch (error) {
      console.log("Error al conectar con el servidor")
      throw error;
    }
  };
};

export default useFetchCallBack;
