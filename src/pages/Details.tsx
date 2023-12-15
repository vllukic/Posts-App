import Header from '../components/Header';
import Post from '../components/Post';
import { List } from '@mui/material';
import usePost from '../hooks/usePost';
import { useNavigate, useParams } from 'react-router-dom';
import { IPost } from '../hooks/useApi';

const Details = () => {
  const { post, onPostDelete } = usePost();
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickOnUpdate = () => {
    navigate(`/posts/edit/${id}`);
  }
  
  const onClickOnDelete = () => {
    onPostDelete(post as IPost);
    navigate(`/`);
  }
  
  return (
    <>
      <Header
        title='Post Details'
        formButtonTitle='Edit post'
        formAction={onClickOnUpdate}
        deleteButtonTitle='Delete Post'
        deleteAction={onClickOnDelete}
      />
      <List sx={{ width: '100%', marginTop: 12 }}>
        <Post title={post?.title || ''} body={post?.body || ''} />
      </List>
    </>
  )
}

export default Details;