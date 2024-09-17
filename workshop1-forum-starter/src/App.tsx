import React, { useState } from 'react';
import './App.scss';
import avatar from './images/bozai.png';
import savatar from './images/Song.jpg'
import aavatar from './images/Amy.jpg'
import javatar from './images/Jay.jpg'
import User from './models/user';
import Comment from './models/comment';

const defaultList: Comment[] = [
  new Comment(3, new User('13258165', javatar, 'Jay Zhou'), 'Nice, well done', '10-18 08:15', 22),
  new Comment(2, new User('36080105', savatar, 'Song Xu'), 'I search for you thousands of times, from dawn till dusk.', '11-13 11:29', 56),
  new Comment(1, new User('30009257', avatar, 'John'), 'I told my computer I needed a break... now it will not stop sending me vacation ads.', '10-19 09:00', 89),
  new Comment(4, new User('30009259', aavatar, 'Amy'), 'Good!.', '6-19 09:00', 10),
];

const currentUser: User = {
  uid: '30009257',
  avatar,
  uname: 'John',
};

// Nav Tab
const tabs = [
  { type: 'hot', text: 'Top' },
  { type: 'newest', text: 'Newest' },
];

const App = () => {
  const [comments, setComments] = useState<Comment[]>(defaultList);
  const [activeTab, setActiveTab] = useState<string>('hot');
  const [newComment, setNewComment] = useState<string>('');
  
  // Track the next available rpid
  const [nextRpid, setNextRpid] = useState<number>(Math.max(...defaultList.map(comment => comment.rpid)) + 1);

  const handleTabClick = (type: string) => {
    setActiveTab(type);
    if (type === 'hot') {
      setComments([...comments].sort((cm1, cm2) => cm2.like - cm1.like));
    } else {
      setComments([...comments].sort((cm1, cm2) => new Date(cm2.ctime).getTime() - new Date(cm1.ctime).getTime()));
    }
  };

  const handlePostComment = () => {
    if (!newComment.trim()) return;   
    const maxRpid = comments.reduce((max, comment) => Math.max(comment.rpid, max), 0);

    const newEntry: Comment = {
      rpid: maxRpid + 1,
      user: { ...currentUser },
      content: newComment,
      ctime: new Date().toLocaleString(),
      like: 0,
    };
    setComments([newEntry, ...comments]);
    setNewComment('');
  };

  const handleDelete = (rpid: number) => {
    setComments(comments.filter(comment => comment.rpid !== rpid));
  };

  return (
    <div className="app">
      {/* Nav Tab */}
      <div className="reply-navigation">
        <ul className="nav-bar">
          <li className="nav-title">
            <span className="nav-title-text">Comments</span>
            <span className="total-reply">{comments.length}</span>
          </li>
          <li className="nav-sort">
            {tabs.map((tab) => (
              <span key={tab.type} 
                className={`nav-item ${activeTab === tab.type ? 'active' : ''}`} 
                onClick={() => handleTabClick(tab.type)}>
                {tab.text}              
              </span>
            ))}
          </li>
        </ul>
      </div>

      <div className="reply-wrap">
        {/* comments */}
        <div className="box-normal">
          {/* current logged in user profile */}
          <div className="reply-box-avatar">
            <div className="bili-avatar">
              <img className="bili-avatar-img" src={avatar} alt="Profile" />
            </div>
          </div>
          <div className="reply-box-wrap">
            {/* comment */}
            <textarea
              className="reply-box-textarea"
              placeholder="tell something..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            {/* post button */}
            <div className="reply-box-send">
              <div className="send-text" onClick={handlePostComment}>post</div>
            </div>
          </div>
        </div>
        {/* comment list */}
        <div className="reply-list">
          {comments.map((comment) => (
            <div className="reply-item" key={comment.rpid}>
              {/* profile */}
              <div className="root-reply-avatar">
                <div className="bili-avatar">
                  <img
                    className="bili-avatar-img" src={comment.user.avatar || avatar}
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
                    <span className="reply-time">{comment.ctime}</span>
                    {/* total likes */}
                    <span className="reply-time">Like: {comment.like}</span>
                    <span className="delete-btn" onClick={() => handleDelete(comment.rpid)}>
                      Delete
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
