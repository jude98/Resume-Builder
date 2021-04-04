import { SAVE_NEW_RESUME } from "../types/resumeActionTypes";

const initialState = {
  resumevalues: [],
  currentView: "",
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_RESUME: {
      return {
        ...state,
        resumevalues: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default resumeReducer;
