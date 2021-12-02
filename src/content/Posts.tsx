import Post from './Post';
import classes from '../content/Posts.module.css';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { Button, TextareaAutosize } from '@material-ui/core';
import SnackBar from './SnackBar';
import {createPost,inputText} from '../redux/postsSlice'

const Posts:React.FC = () => {
  const [isSnackOpen,setisSnackOpen] = useState(false)
  const dispatch = useAppDispatch();
  const text = useAppSelector((state) => {
    const {posts} = state
    return posts.text
  });
  const posts = useAppSelector((state) => {
    const { posts } = state;
    return posts.posts;
  });
  const submitHandler = (e:SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPost({ name: text, id: '34' }));
    dispatch(inputText(''));
    setisSnackOpen(true)
  };
  const changeHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(inputText(e.target.value));
  };
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setisSnackOpen(false);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <TextareaAutosize minRows={3}
          onChange={changeHandler}
          placeholder='enter your post'
          cols={30}
          rows={3}
          value={text}
        ></TextareaAutosize>
        <Button variant='contained' color='primary' type='submit'>Add post</Button>
      </form>
      <h1 className={`${classes.head}`}>My posts:</h1>
      {posts.map((post) => {
        return <Post name={post.name} key={post.id} id={post.id} />;
      })}
      <SnackBar open={isSnackOpen} message={'Post added!'} close={handleClose}/>
    </div>
  );
};

export default Posts;
