import React from 'react';
import dayjs from 'dayjs';
import User from './models/user';
import Comment from './models/comment';

interface UserCommentProps {
  comment: Comment;
  currentUser: User;
  handleDelete: (rpid: number) => void;
  handleLike: (rpid: number) => void;
}

const UserComment = ({ comment, currentUser, handleDelete, handleLike }: UserCommentProps) => {
  return (
    <div className="reply-item">
      <div className="root-reply-avatar">
        <div className="bili-avatar">
          <img
            className="bili-avatar-img" src={comment.user.avatar || currentUser.avatar}
            alt="User Profile"
          />
        </div>
      </div>

      <div className="content-wrap">
        {/* username */}
        <div className="user-info">
          <div className="user-name">{comment.user.uname}</div>
        </div>
        {/* comment content */}
        <div className="root-reply">
          <span className="reply-content">{comment.content}</span>
          <div className="reply-info">
            {/* comment created time */}
            <span className="reply-time">{dayjs(comment.ctime).format('YYYY-MM-DD HH:mm:ss')}</span>
            {/* total likes */}
            <span className="reply-time">Like: {comment.like}</span>
            {/* delete button only for current user */}
            {
              comment.user.uid === currentUser.uid &&
                <span className="delete-btn" onClick={() => handleDelete(comment.rpid)}>
                Delete
                </span>
            }
            {/* like button */}
            <span className="like-btn" onClick={() => handleLike(comment.rpid)}>
              👍 Like
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserComment;
