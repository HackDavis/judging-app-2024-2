'use client';
import { useState } from 'react';
export default function Comments() {
  const [commentText, setCommentText] = useState('');

  const onCommentType = (e: any) => {
    setCommentText(e.target.value);
  };

  const onSubmitComment = () => {
    alert(`The Alert: ${commentText}`);
  };
  return (
    <div>
      <h2>Comments</h2>
      <p>
        Comments help us for deciding tiebreakers. If there was an exceptional
        project or one you’re suspicious of cheating, write it here!
      </p>
      <input type="text" value={commentText} onChange={onCommentType} />
      <button onClick={onSubmitComment}>Submit Score</button>
      <p>Once submitted, results cannot be changed.</p>
    </div>
  );
}
