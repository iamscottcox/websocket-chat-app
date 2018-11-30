import { v4 } from 'uuid';
import { ADD_MESSAGE, ADD_USER, MESSAGE_RECEIVED, POPULATE_USERS_LIST } from '../constants/action-types';

export const addMessage = (message, author) => ({
  type: ADD_MESSAGE,
  id: v4(),
  message,
  author,
});

export const addUser = (name) => ({
  type: ADD_USER,
  id: v4(),
  name,
});

export const messageReceived = (message, author) => ({
  type: MESSAGE_RECEIVED,
  id: v4(),
  message,
  author,
});

export const populateUsersList = (users) => ({
  type: POPULATE_USERS_LIST,
  users,
});