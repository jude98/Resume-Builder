import { SAVE_NEW_RESUME } from "../types/resumeActionTypes";

const initialState = {
  resumeData: [],
  currentView: "",
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_RESUME: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default resumeReducer;
