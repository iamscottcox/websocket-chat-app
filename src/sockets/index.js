import {
  ADD_USER,
  ADD_MESSAGE,
  POPULATE_USERS_LIST
} from "../constants/action-types";
import {
  addUser,
  messageReceived,
  populateUsersList
} from "../actions";
import { store } from "../index";

export const initSocket = (userName, dispatch = store.dispatch) => {
  const socket = new WebSocket("ws://localhost:8989");

  socket.onopen = (() => {
    socket.send(
      JSON.stringify({
        type: ADD_USER,
        name: userName
      })
    );
  });

  socket.onmessage = (event => {
    const { type, message, author, name, users } = JSON.parse(event.data);

    switch (type) {
      case ADD_MESSAGE:
        dispatch(messageReceived(message, author));
        break;
      case ADD_USER:
        dispatch(addUser(name));
        break;
      case POPULATE_USERS_LIST:
        dispatch(populateUsersList(users));
        break;
      default:
        break;
    }
  });

  // socket.onclose = (() => {
  //   socket.send(
  //     JSON.stringify({
  //       authorID: 'fart',
  //     })
  //   )
  // });

  return socket;
};

export default initSocket;
