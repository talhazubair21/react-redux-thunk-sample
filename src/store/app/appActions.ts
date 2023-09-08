import { Dispatch } from "redux";
import { appActions } from "./appReducer";

export const getTasks = () => {
  return async (dispatch: Dispatch) => {
    dispatch(appActions.setLoading(true));
    setTimeout(() => {
      dispatch(appActions.setLoading(true));
    }, 3000);
  };
};
