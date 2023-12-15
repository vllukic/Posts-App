import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

interface IHeaderProps {
  title: string;
  formButtonTitle?: string;
  deleteButtonTitle?: string;
  formAction?: () => void;
  deleteAction?: () => void;
}

const Header = ({ title, formButtonTitle, deleteButtonTitle, formAction, deleteAction }: IHeaderProps) => {
  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Box>
        {formButtonTitle ?
          <Button
            variant="outlined"
            onClick={() => {
              if (formAction) {
                formAction();
              }
            }}
            sx={{
              backgroundColor: 'white',
              '&:hover': {
                backgroundColor: 'white'
              },
            }}>{formButtonTitle}</Button> : null}
        {deleteButtonTitle ?
          <Button
            variant="outlined"
            onClick={() => {
              if (deleteAction) {
                deleteAction();
              }
            }}
            sx={{
              backgroundColor: 'red',
              marginLeft: 2,
              color: 'white',
              '&:hover': {
                backgroundColor: 'red',
                color: 'white',
              },
              }}>{deleteButtonTitle}</Button> : null}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header;