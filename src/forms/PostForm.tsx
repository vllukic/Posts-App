import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { IPost } from '../hooks/useApi';
import { useEffect } from 'react';
import usePost from '../hooks/usePost';

interface IPostFormProps {
  post?: IPost;
}

const schema = yup.object().shape({
  title: yup.string().required(),
  body: yup.string().required('Description is required field'),
});

const PostForm = ({ post }: IPostFormProps) => {
  const { onPostCreate, onPostUpdate } = usePost();
  const mode = post?.id ? 'edit' : 'create';
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Omit<IPost, 'id' | 'userId'>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
      body: '',
    },
  });

  useEffect(() => {
    const payload = {
      ...(mode === 'edit'
        ? {
          title: post?.title,
          body: post?.body,
        }
        : {}),
    };

    reset(payload as IPost);
  }, [post]);

  const onSubmit: SubmitHandler<Omit<IPost, 'id' | 'userId'>> = (data) => {
    if (mode === 'create') {
      onPostCreate(data);
    } else {
      onPostUpdate({
        id: post?.id,
        title: data.title,
        body: data.body
      })
    }
  };
  return (
    <Box sx={{
      bgcolor: 'background.paper',
      p: 2,
      minWidth: 300,
    }}>
      <Controller
        name="title"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="Title"
            variant="outlined"
            error={!!errors.title}
            helperText={errors.title ? errors.title?.message : ''}
            fullWidth
            margin="dense"
          />
        )}
      />
      <br />
      <Controller
        name="body"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            type="text"
            label="Description"
            variant="outlined"
            error={!!errors.body}
            helperText={errors.body ? errors.body?.message : ''}
            fullWidth
            margin="dense"
          />
        )}
      />
      <Button
        variant="outlined"
        onClick={handleSubmit(onSubmit)}
      >{mode === 'create' ? 'Create' : 'Save'}</Button>
    </Box>
  )
}

export default PostForm