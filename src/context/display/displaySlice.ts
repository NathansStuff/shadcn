import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

import { IDisplaySlice } from './IDisplaySlice';

export const initialDisplayState: IDisplaySlice = {
  userLoading: false,
  isUserAuthenticated: false,
  activeConversationId: null,
  feedbackGiven: false,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState: initialDisplayState,
  reducers: {
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
    setUserAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isUserAuthenticated = action.payload;
    },
    setActiveConversationId: (state, action: PayloadAction<string | null>) => {
      state.activeConversationId = action.payload;
    },
    setFeedbackGiven: (state, action: PayloadAction<boolean>) => {
      state.feedbackGiven = action.payload;
    },
  },
});

export const { setUserLoading, setUserAuthenticated, setActiveConversationId, setFeedbackGiven } = displaySlice.actions;

export const selectUserLoading = (state: RootState): boolean => state.display.userLoading;
export const selectIsUserAuthenticated = (state: RootState): boolean => state.display.isUserAuthenticated;
export const selectActiveConversationId = (state: RootState): string | null => state.display.activeConversationId;
export const selectFeedbackGiven = (state: RootState): boolean => state.display.feedbackGiven;

const displayReducer = displaySlice.reducer;

export default displayReducer;
