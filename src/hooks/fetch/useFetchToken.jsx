// import { useContext } from "react";
// import { SessionContext } from "../../contexts/SessionProvider";
// import { useNavigation } from "@react-navigation/native";
// import useFetchCallBack from "./useFetchCallBack";

// const useFetchToken = () => {
//   const session = useContext(SessionContext)[0];
//   const navigate = useNavigation();
//   const fetchCallback = useFetchCallBack();

//   return (url, content = {}, callback) => {
//     if (session) {
//       const token_content = {
//         ...content,
//         headers: {
//           ...content.headers,
//           "auth-token": session.token,
//         },
//       };

//       return fetchCallback(url, token_content, callback);
//     } else {
//       navigate("/login");
//       throw new Error("No existe una session");
//     }
//   };
// };

// export default useFetchToken;