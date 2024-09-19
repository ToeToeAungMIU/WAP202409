import React, { useEffect, useState, useRef } from 'react';
import './App.scss';
import dayjs from 'dayjs';
import _ from 'lodash';
import classnames from 'classnames';
//import avatar from './images/bozai.png';
import savatar from './images/Song.jpg';
//import avatar from './images/Amy.jpg';
import avatar from './images/Jay.jpg';
import User from './models/user';
import Comment from './models/comment';
import UserComment from './UserComment';

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
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, []);

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

    if (commentInputRef.current) {
      commentInputRef.current.focus();
    }
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
                // className={`nav-item ${activeTab === tab.type ? 'active' : ''}`}  
                className={classnames('nav-item', { active: activeTab === tab.type })} 
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
              ref ={commentInputRef}
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
            <UserComment            
            key={comment.rpid}
            comment={comment}
            currentUser={currentUser}
            handleDelete={handleDelete}
            handleLike={handleLike}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
