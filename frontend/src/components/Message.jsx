// Message.js
import React from 'react';

const Message = ({ message, onDelete }) => {
  return (
    <div className="message">
      <p>{message}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Message;
