'use client';
import styles from './Comments.module.scss';
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
    <div className={styles.commentContainer}>
      <h2 className={styles.commentTitle}>Comments</h2>
      <p className={styles.commentDescription}>
        Comments help us for deciding tiebreakers. If there was an exceptional
        project or one you’re suspicious of cheating, write it here!
      </p>
      <input
        className={styles.commentBox}
        type="text"
        value={commentText}
        onChange={onCommentType}
      />
      <button className={styles.submitButton} onClick={onSubmitComment}>
        Submit Score
      </button>
      <p className={styles.submitDescription}>
        Once submitted, results cannot be changed.
      </p>
    </div>
  );
}
