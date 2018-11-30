import { ADD_USER, POPULATE_USERS_LIST } from '../constants/action-types';

export const initialState = [];

export const users = (state = initialState, action) => {
  switch (action.type) {
      case ADD_USER:
          return state.concat(
            [
              {
                name: action.name,
                id: action.id,
              }
            ]
          );
    case POPULATE_USERS_LIST:
      return action.users;
      default:
          return state;
  }
};

export default users;
