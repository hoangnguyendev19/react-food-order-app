import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    signInStatus: false,
    notifyStatus: '',
  },
  reducers: {
    updateSignInStatus(state, action) {
      state.signInStatus = action.payload;
    },
    updateNotifyStatus(state, action) {
      state.notifyStatus = action.payload;
    },
  },
});

export const { updateSignInStatus, updateNotifyStatus } = authSlice.actions;
export default authSlice.reducer;
