import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,
};

function counterReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const { count, step } = state;
      return {
        ...state,
        count: count + step,
      };
    }
    case ACTION_TYPES.DECREMENT: {
      const { count, step } = state;
      return {
        ...state,
        count: count - step,
      };
    }
    case ACTION_TYPES.SET_STEP: {
      const { newStep: step } = action;
      return {
        ...state,
        step,
      };
    }
    default: {
      return state;
    }
  }
}

export default counterReducer;
