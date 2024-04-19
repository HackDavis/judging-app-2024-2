'use client';
import styles from './Comments.module.scss';
import { useState } from 'react';

interface CommentsProps {
  categoryScores: Map<string, number>;
}

export default function Comments({ categoryScores }: CommentsProps) {
  const [commentText, setCommentText] = useState('');
  const [commentSubmitted, setCommentSubmitted] = useState(false);

  const hasForNegativeScores = (scoresMap: Map<string, number>) => {
    let hasNegativeScore = false;
    scoresMap.forEach((score) => {
      if (score === -1) {
        hasNegativeScore = true;
      }
    });
    return hasNegativeScore;
  };

  const onCommentType = (e: any) => {
    setCommentText(e.target.value);
  };

  const onSubmitComment = () => {
    if (hasForNegativeScores(categoryScores)) {
      alert('Some fields are not inputted');
    } else {
      setCommentSubmitted(true);
      console.log(categoryScores);
    }
  };

  return (
    <div className={styles.commentContainer}>
      <h2 className={styles.commentTitle}>Comments</h2>
      <p className={styles.commentDescription}>
        Comments help us for deciding tiebreakers. If there was an exceptional
        project or one you’re suspicious of cheating, write it here!
      </p>
      <textarea
        className={styles.commentBox}
        value={commentText}
        onChange={onCommentType}
        placeholder="Write a comment here..."
      ></textarea>
      <button
        className={
          commentSubmitted ? styles.submitButtonDone : styles.submitButton
        }
        onClick={onSubmitComment}
        disabled={commentSubmitted}
      >
        {commentSubmitted ? 'Submitted' : 'Submit Score'}
      </button>
      <p className={styles.submitDescription}>
        Once submitted, results cannot be changed.
      </p>
    </div>
  );
}
