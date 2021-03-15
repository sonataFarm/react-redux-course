import React from 'react';
import Faker from 'faker';

const CommentDetail = props => (
  <div className="comment">
    <a href="/" className="avatar">
    <img alt="avatar" src={props.avatarUrl} />
    </a>
    <div>
      <a href="/" className="author">
        { props.username }
      </a>
      <div className="metadata">
        <span className="date">Today at 6:00PM</span>
      </div>
      <div className="text">
        {props.body}
      </div>
    </div>
  </div>
);

export default CommentDetail;
