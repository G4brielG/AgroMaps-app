import AsyncStorage from "@react-native-async-storage/async-storage";
const types = {
  login: "login",
  logout: "logout",
};

const actions = {
  login: async (data) => {
    await AsyncStorage.removeItem("user");
    if (data !== null) {
      await AsyncStorage.setItem("user", JSON.stringify(data));

      const user = await AsyncStorage.getItem("user");
      return user;
    } else {
      return null;
    }
  },

  logout: async () => {
    await AsyncStorage.removeItem("user");
    return null;
  },

  // update: async (data) => {
  //   if (AsyncStorage.getItem("user")) {
  //     const user = JSON.parse(AsyncStorage.getItem("user"));
  //     const update = { ...user, ...data };
  //     AsyncStorage.setItem("user", JSON.stringify(update));
  //     const user_updated = JSON.parse(AsyncStorage.getItem("user"));
  //     return user_updated;
  //   }
  // },
};

let initialState = null;

const user = await AsyncStorage.getItem("user");

if (user) {
  initialState = JSON.parse(user);
}

// Reducer
const DashboardReducer = (state, action) => {
  return actions[action.type](action.payload, state);
};

export { initialState, types };
export default DashboardReducer;
