import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import {
  clearPersistUserInfo,
  persistUserInfo,
} from "../../utilities/localStorage.utility";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

export const userKey = "user";

export const userSlice = createSlice({
  name: "User",
  initialState: localStorage.getItem(userKey)
    ? JSON.parse(localStorage.getItem(userKey) as string)
    : EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      persistUserInfo<UserInfo>(userKey, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      let result = { ...state, ...action.payload };
      persistUserInfo<UserInfo>(userKey, action.payload);
      return result;
    },
    resetUser: () => {
      clearPersistUserInfo(userKey);
      return EmptyUserState;
    },
  },
});

export const { createUser, updateUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
