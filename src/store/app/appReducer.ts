import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { buildSubStateSelector } from "./../subSelector";

const initialState: AppStoreState = {
  tasks: [],
  loading: false,
};

export type AppState = typeof initialState;

export const appSlice = createSlice<
  AppState,
  {
    setLoading: CaseReducer<AppState, PayloadAction<Boolean>>;
    setTasks: CaseReducer<AppState, PayloadAction<any[]>>;
  }
>({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      return {
        ...state,
        loading: payload,
      };
    },

    setTasks: (state, { payload }) => {
      return {
        ...state,
        tasks: payload,
      };
    },
  },
});

export const useAppSelector = buildSubStateSelector<AppState>(
  (state) => state.app
);

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
