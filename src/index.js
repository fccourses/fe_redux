import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/* 
  REDUX: - core
    store - хранилище. js object 
    dispatch - function которая отправляет action в reducer
    reducer - pure func; (state, action) => newState
    action - events. { type: string, ...bag }

  REACT-REDUX:
    <Provider store={store} /> - store in react
    connect(mStP, mDtP)() - HOC. подписывать компонент на измения store
    mapStateToProps - func, что именно взять из store
    mapDispatchToProps - func, dispatch methods -> props
*/
