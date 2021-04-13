import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import heroReducer from './heroReducer';
import taskReducer from './taskReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  task: taskReducer,
  hero: heroReducer,
});

export default rootReducer;

const prev = {
  step: 0,
  count: 1,
  heroes: [],
  tasks: [],
};

const now = {
  counter: {
    step: 0,
    count: 1,
  },
  task: {
    tasks: [],
  },
  hero: {
    heroes: [],
    error: null,
  },
};
