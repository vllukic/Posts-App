import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { IPost } from '../hooks/useApi';

const Post = ({ title, body }: Omit<IPost, 'id' | 'userId'>) => (
    <ListItem>
      <ListItemText
        primary={title}
        primaryTypographyProps={{ fontSize: 20 }}
        secondary={<>
          <Typography
            sx={{ display: 'inline' }}
            component="span"
            variant="body2"
            color="text.primary"
          >
            {body}
          </Typography>
        </>} />
    </ListItem>
  );

export default Post;