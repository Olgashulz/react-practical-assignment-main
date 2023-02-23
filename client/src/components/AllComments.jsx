import React from 'react';
import Comment from './Comment';
import { useSelector } from 'react-redux';

export default function AllComments({postId}) {
  const post = useSelector(store => store.post.posts.find(el => el.id === postId));

  const commentsCount = post.comments.length;
  const commentsList = commentsCount === 0
      ? <div>NO COMMENTS</div>
      : (
          <ul className='comment_list'>
            <p>Total comments: {commentsCount}</p>
            {post.comments.map((el, index) => <Comment key={index} {...el}/>)}
          </ul>
      );

  return commentsList;
}
