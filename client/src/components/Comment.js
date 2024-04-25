// src/components/Comment.js

function Comment({ text, createdBy, createdAt }) {
    const date = new Date(createdAt).toLocaleDateString("en-US");
  
    return (
      <div className="comment">
        <p>{text}</p>
        <small>By {createdBy} on {date}</small>
      </div>
    );
  }
  
  export default Comment;
  