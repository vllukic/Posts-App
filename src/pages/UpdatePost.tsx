import Header from '../components/Header';
import Box from '@mui/material/Box';
import PostForm from '../forms/PostForm';
import usePost from '../hooks/usePost';

const EditPost = () => {
  const { post } = usePost();
  return (
    <>
      <Header title='Edit Post' />
      <Box sx={{ marginTop: 16, justifyContent: 'center', display: 'flex' }}>
        <PostForm post={post} />
      </Box>
    </>
  )
}

export default EditPost;