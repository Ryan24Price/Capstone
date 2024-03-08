import React, { useState } from 'react';
import '../Styles/Forum.css'; 
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

const ForumPage = () => {
  const [messages, setMessages] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  const deleteMessage = (index) => {
    const updatedMessages = [...messages];
    updatedMessages.splice(index, 1);
    setMessages(updatedMessages);
    setEditIndex(null);
  };

  const editMessage = (index, updatedMessage) => {
    const updatedMessages = [...messages];
    updatedMessages[index] = updatedMessage;
    setMessages(updatedMessages);
    setEditIndex(null);
  };

  return (
    <div className="chat-room">
      <h1>Forum Room</h1>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            {editIndex === index ? (
              <MessageInput
                initialValue={message}
                onEdit={(updatedMessage) => editMessage(index, updatedMessage)}
              />
            ) : (
              <>
                <p>{message}</p>
                <div>
                  <button onClick={() => setEditIndex(index)}>Edit</button>
                  <button onClick={() => deleteMessage(index)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      <MessageInput onAddMessage={addMessage} />
    </div>
  );
};



export default ForumPage;
