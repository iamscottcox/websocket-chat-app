import { takeEvery } from 'redux-saga/effects';
import { ADD_MESSAGE } from '../constants/action-types';

export const handleNewMessage = function* handleNewMessage({ username, socket }) {
  yield takeEvery(ADD_MESSAGE, (action) => {
    action.author = username;
    socket.send(JSON.stringify(action));
  })
};

export default handleNewMessage()
