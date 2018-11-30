import React from "react";
import propTypes from "prop-types";

export const AddMessage = ({ addMessage }) => {
  let input;

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        addMessage(input.value, "Me");
        input.value = "";
      }}
    >
      <input
        type="text"
        id="new-message"
        ref={node => {
          input = node;
        }}
      />
    </form>
  );
};

AddMessage.propTypes = {
  addMessage: propTypes.func.isRequired
};

export default AddMessage;
