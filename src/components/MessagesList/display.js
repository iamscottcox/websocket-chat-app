import React from 'react';
import propTypes from 'prop-types';

import Message from '../Message';


export const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
        />
      ))}
    </ul>
  </section>
);

MessagesList.propTypes = {
  message: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      message: propTypes.string.isRequired,
      author: propTypes.string.isRequired
    }).isRequired
  )
};

export default MessagesList;
