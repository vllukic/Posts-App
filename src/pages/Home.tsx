import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';
import usePosts from '../hooks/usePosts';
import EmptyScreen from '../components/EmptyScreen';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const { posts, loadingPosts } = usePosts();
  const navigate = useNavigate();

  const addPost = () => {
    navigate(`/posts/add`);
  }

  const onRowClick = (id?: string) => {
    navigate(`/posts/${id}`);
  }

  return (
    <Box>
      <Header title='Posts List' formButtonTitle='Add post' formAction={addPost} />
      {posts.length < 1 ?
        <EmptyScreen /> :
        <List sx={{ width: '100%', marginTop: 6 }}>
          {loadingPosts ? <CircularProgress /> : null}
          {posts.map(post => (
            <Box key={post.id}>
              <ListItemButton
                onClick={() => onRowClick(post.id)}
              >
                <Post title={post.title} body={post.body} />
              </ListItemButton>
              <Divider variant="inset" component="li" sx={{ marginLeft: 0 }} />
            </Box>))}
        </List>
      }
    </Box>
  )
}

export default Home;