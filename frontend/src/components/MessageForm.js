import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MessageForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent('');
  };

  return (
    <form className="message-form d-flex" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mx-2"
        placeholder="Type your message..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Button
        className="button-color mx-2"
        size="sm"
        type="submit"
        
      >
Send
      </Button>
    </form>
  );
};

export default MessageForm;
