import Header from '../components/Header';
import Box from '@mui/material/Box';
import PostForm from '../forms/PostForm';

const CreatePost = () => {
  return (
    <>
      <Header title='Create Post' />
      <Box sx={{marginTop: 16, justifyContent: 'center', display: 'flex'}}>
        <PostForm />
      </Box>
    </>
  )
}

export default CreatePost;