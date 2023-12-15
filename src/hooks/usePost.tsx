import { useEffect, useState } from 'react'
import useApi, { IPost } from './useApi';
import { CustomAlert } from '../components/Alert';
import { useNavigate, useParams } from 'react-router-dom';

const usePost = () => {
  const { fetchPost, createPost, updatePost, deletePost } = useApi();
  const [post, setPost] = useState<IPost>();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchPost(id as string).then((response) => {
        if (response) {
          setPost(response);
        }
      }).catch((err) => {
        CustomAlert({ message: err.message, severity: "error" })
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPostCreate = (post: IPost) => {
    createPost(post).then((response) => {
      if (response) {
        navigate('/')
      }
    })
      .catch((err) => {
        CustomAlert({ message: err.message, severity: "error" });
      })
  }

  const onPostUpdate = (post: IPost) => {
    updatePost(id as string, post).then((response) => {
      if (response) {
        navigate('/')
      }
    })
      .catch((err) => {
        CustomAlert({ message: err.message, severity: "error" });
      })
  }

  const onPostDelete = (post: IPost) => {
    deletePost(id as string, post).then((response) => {
      if (response) {
        navigate('/');
      }
    })
      .catch((err) => {
        CustomAlert({ message: err.message, severity: "error" });
      })
  }

  return { post, onPostCreate, onPostUpdate, onPostDelete }
}

export default usePost;