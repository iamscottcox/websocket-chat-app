import { ADD_MESSAGE, MESSAGE_RECEIVED } from "../constants/action-types";

export const initialState = [];

export const messages = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
    case MESSAGE_RECEIVED:
      return state.concat([
        {
          message: action.message,
          author: action.author,
          id: action.id
        }
      ]);

    default:
      return state;
  }
};

export default messages;
