import React, { useEffect, useState } from 'react';
import './App.scss';
//import avatar from './images/bozai.png';
import savatar from './images/Song.jpg';
//import avatar from './images/Amy.jpg';
import avatar from './images/Jay.jpg';
import User from './models/user';
import Comment from './models/comment';
import dayjs from 'dayjs';
import _ from 'lodash';

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

  const [comments, setComments] = useState<Comment[]>([]);
  const [activeTab, setActiveTab] = useState<string>('hot');
  const [newComment, setNewComment] = useState<string>(''); 

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch('http://localhost:3004/comments');
        const data = await res.json();       
        const sortedComments = _.orderBy(data, ['like'], ['desc']);
        setComments(sortedComments);
      } catch (error) {
        console.error('Error fetching list:', error);
      }
    };
  
    fetchComments();
  }, []);


 
  const handleTabClick = (type: string) => {
    setActiveTab(type);
    
    if (type === 'hot') {    
      setComments(_.orderBy(comments, ['like'], ['desc']));
    } else {    
      setComments(_.orderBy(comments, [(comment) => new Date(comment.ctime)], ['desc']));
    }
  };

  const handlePostComment = () => {
    if (!newComment.trim()) return;

    const newMessage: Comment = {
      rpid: comments.length+1,
      user: { ...currentUser },
      content: newComment,
      ctime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
      like: 0,
    };
    setComments([newMessage, ...comments]);
    setNewComment('');
  };

  const handleDelete = (rpid: number) => {
    setComments(comments.filter(comment => comment.rpid !== rpid));
  };

  const handleLike = (rpid: number) => {
    setComments(comments.map(comment => 
      comment.rpid === rpid ? { ...comment, like: comment.like + 1 } : comment
    ));
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
              <img className="bili-avatar-img" src={savatar} alt="Profile" />
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
            <div className="reply-box-send" onClick={handlePostComment}>
              <div className="send-text">post</div>
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
                    <span className="reply-time">{dayjs(comment.ctime).format('YYYY-MM-DD HH:mm:ss')}</span>
                    {/* total likes */}
                    <span className="reply-time">Like: {comment.like}</span>        
                    {
                      comment.user.uid === currentUser.uid &&
                        <span className="delete-btn" onClick={() => handleDelete(comment.rpid)}>
                        Delete 
                        </span> 
                    }
                                    
                    <span className="like-btn" onClick={() => handleLike(comment.rpid)}>
                      👍 Like
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
