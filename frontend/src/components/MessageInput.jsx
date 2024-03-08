// MessageInput.js
import React, { useState } from 'react';

const MessageInput = ({ onAddMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddMessage(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-input">
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default MessageInput;
