import { SAVE_NEW_RESUME } from "../types/resumeActionTypes";

const initialState = {
  allResumes: [],
};

const resumeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW_RESUME: {
      const { allResumes } = state;
      let updatedResumes = [];
      let found = false;
      updatedResumes = allResumes.map((resume) => {
        if (resume.id === action.payload.id) {
          found = true;
          return action.payload;
        }
        return resume;
      });
      if (!found) {
        updatedResumes.push(action.payload);
      }
      return {
        ...state,
        allResumes: updatedResumes,
      };
    }
    default: {
      return state;
    }
  }
};

export default resumeReducer;
