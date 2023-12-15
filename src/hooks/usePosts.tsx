import { useEffect, useState } from 'react'
import useApi, { IPost } from './useApi';
import { CustomAlert } from '../components/Alert';

const usePosts = () => {
  const { fetchPosts } = useApi();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loadingPosts, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts()
      .then((response) => {
        if (response) {
          setPosts(response);
        }
      }).catch((err) => {
        CustomAlert({ message: err.message, severity: "error" })
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { posts, loadingPosts }
}

export default usePosts;