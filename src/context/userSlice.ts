import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserSlice } from '@/types/IUser';

import { RootState } from './store';

export const initialUserState: IUserSlice = {
  firstName: '',
  lastName: '',
  profilePicture: '',
  email: '',
  phone: '',
  isEmailVerified: false,
  isPhoneVerified: false,
  userId: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setUserProfile: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        profilePicture: string;
        email: string;
        phone: string;
      }>
    ) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profilePicture = action.payload.profilePicture;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
    setEmailVerified: (state, action: PayloadAction<boolean>) => {
      state.isEmailVerified = action.payload;
    },
    setPhoneVerified: (state, action: PayloadAction<boolean>) => {
      state.isPhoneVerified = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName = action.payload;
    },
    setProfilePicture: (state, action: PayloadAction<string>) => {
      state.profilePicture = action.payload;
    },

    setUser: (state, action: PayloadAction<IUserSlice>) => {
      state.userId = action.payload.userId;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profilePicture = action.payload.profilePicture;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.isEmailVerified = action.payload.isEmailVerified;
      state.isPhoneVerified = action.payload.isPhoneVerified;
    },
    logout: () => initialUserState,
  },
});

export const {
  setUserId,
  setUserProfile,
  setEmailVerified,
  setPhoneVerified,
  setPhone,
  setEmail,
  setFirstName,
  setLastName,
  setProfilePicture,
  setUser,
  logout,
} = userSlice.actions;

export const selectUser = (state: RootState): IUserSlice => state.user;
export const selectUserId = (state: RootState): string => state.user.userId;
export const selectFirstName = (state: RootState): string => state.user.firstName;
export const selectLastName = (state: RootState): string => state.user.lastName;
export const selectProfilePicture = (state: RootState): string => state.user.profilePicture;
export const selectEmail = (state: RootState): string => state.user.email;
export const selectPhone = (state: RootState): string | null | undefined => state.user.phone;
export const selectIsEmailVerified = (state: RootState): boolean => state.user.isEmailVerified;
export const selectIsPhoneVerified = (state: RootState): boolean => state.user.isPhoneVerified;

const userReducer = userSlice.reducer;

export default userReducer;
