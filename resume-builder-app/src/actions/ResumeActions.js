import * as ActionTypes from "../types/resumeActionTypes";

export const saveNewResume = (data) => {
  return {
    type: ActionTypes.SAVE_NEW_RESUME,
    payload: data,
  };
};
