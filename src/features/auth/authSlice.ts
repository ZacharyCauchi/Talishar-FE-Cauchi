import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/Store';
import { defaultAuth } from './constants';

const authSlice = createSlice({
  name: 'auth',
  initialState: defaultAuth,
  reducers: {
    setCredentialsReducer: (state, action) => {
      const { user, accessToken, userName } = action.payload;
      (state.user = user),
        (state.token = accessToken),
        (state.userName = userName);
    },
    logOutReducer: (state) => {
      state.user = null;
      state.userName = null;
      state.token = null;
    }
  }
});

export default authSlice.reducer;
const { actions } = authSlice;
export const { setCredentialsReducer, logOutReducer } = actions;

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentUserName = (state: RootState) => state.auth.userName;
