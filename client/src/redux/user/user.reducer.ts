const INITIAL_STATE = {
  currentUser: null,
};

/**
 * In the userReducer, if the action that is passed it of type SET_CURRENT_USER, then we are going to set the new
 * state. Otherwise we are going to return the old state
 */

const userReducer = (state: S = INITIAL_STATE, action: A) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

interface S {
  currentUser: string | null;
}

interface A {
  type: string;
  payload: any;
}
