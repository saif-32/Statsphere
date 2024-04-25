// src/components/CommentForm.js
//hi

import { useState } from 'react';

function CommentForm({ postId, addComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addComment(postId, text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Post Comment</button>
    </form>
  );
}

export default CommentForm;
