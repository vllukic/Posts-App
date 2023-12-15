const API_URL = 'https://jsonplaceholder.typicode.com/posts';

interface IOptions {
  method?: string;
  headers?: {
    'Content-Type': string,
  },
  body?: string,
}

export interface IPost {
  id?: string;
  title: string;
  body: string;
  userId?: string;
}

const useApi = () => {

  const sendRequest = async (url: string, options?: IOptions) => {
    const response = await fetch(url, options);
    return await response.json();
  };

  const createRequestOptions = (method: string, data: IPost) => {
    return {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  }

  const fetchPosts = async () => {
    return await sendRequest(API_URL);
  }

  const fetchPost = async (id: string) => {
    return await sendRequest(`${API_URL}/${id}`);
  }

  const createPost = async (post: IPost) => {
    const options = createRequestOptions('POST', post);
    return await sendRequest(API_URL, options)
  }

  const updatePost = async (id: string, post: IPost) => {
    const options = createRequestOptions('PUT', post);
    return await sendRequest(`${API_URL}/${id}`, options)
  }

  const deletePost = async (id: string, post: IPost) => {
    const options = createRequestOptions('DELETE', post);
    return await sendRequest(`${API_URL}/${id}`, options)
  }

  return {
    fetchPost,
    fetchPosts,
    createPost,
    updatePost,
    deletePost,
  }
}

export default useApi;
