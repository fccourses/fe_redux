import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';

const initialState = {
  count: 0,
  step: 1,
};
function reducer (state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case 'decrement': {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case 'setStep': {
      return {
        ...state,
        step: action.newStep,
      };
    }
    default: {
      return state;
    }
  }
}
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  REDUX:
    store - хранилище. js object
    dispatch - function которая отправляет action в reducer
    reducer - pure func; (state, action) => state
    action - events. { type: string, ...bag }

  REACT-REDUX:
    connect - HOC. подписывать компонент на измения store
    mapStateToProps - func, что именно взять из store
*/
