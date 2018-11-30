import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';


import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import chat from "./reducers";
import { handleNewMessage } from './sagas';
import { initSocket } from './sockets';
import { username } from './libs/username';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(chat, applyMiddleware(sagaMiddleware));

const socket = initSocket(username, store.dispatch);

sagaMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
