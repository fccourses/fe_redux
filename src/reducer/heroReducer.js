import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  heroes: [],
  isFetching: false,
  error: null,
};

function heroReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_HERO_REQUEST: {
      /* isFetching: true */
      return;
    }
    case ACTION_TYPES.CREATE_HERO_SUCCESS: {
      /* heroes = heroes + 1 hero */
      return;
    }
    case ACTION_TYPES.CREATE_HERO_ERROR: {
      /* error */
      return;
    }

    default:
      return state;
  }
}

export default heroReducer;
