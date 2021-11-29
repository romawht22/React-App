import React from 'react';
import c from '../content/Post.module.css';

type PostPropsType = {
  id:string 
  name:string
}

const Post:React.FC<PostPropsType> = (props) => {
  return (
    <div key={props.id} className={`${c.postHead}`}>
      {props.name}
    </div>
  );
};

export default Post;
