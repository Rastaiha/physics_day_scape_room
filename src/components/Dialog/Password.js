import {
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Paper,
  Slide,
  TextField,
  Typography,
  Zoom,
} from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router'

import {
  getProblemFromGroupAction,
} from '../../redux/slices/problem'

const useStyles = makeStyles((theme) => ({
  description: {
    padding: '10px',
    align: 'left',
    textAlign: 'justify',
  },
  paper: {
    padding: theme.spacing(2),
    width: '100%',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    maxHeight: '400px',
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '250px',
      maxHeight: '250px',
      width: '100%',
    }
  }
}));

function Index({
  open,
  handleClose,
  callbackFunction = () => { },

  image,
}) {
  const classes = useStyles();
  const [inputText, setInputText] = React.useState();

  return (
    <Dialog maxWidth="xs" open={open} onClose={handleClose} PaperComponent='false'>
      {image &&
        <DialogTitle>
          <Grid container spacing={2} justify='center'>
            <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
          </Grid>
        </DialogTitle>
      }
      <DialogActions>
        <Grid container component={Paper} direction='column' spacing={2} justify='center'>
          <Grid item>
            <TextField
              inputProps={{ className: 'ltr-input' }}
              onChange={(e) => setInputText(e.target.value)}
              fullWidth variant='outlined' label='بزن رمزو!' />
          </Grid>
          <Grid item>
            <Button fullWidth variant='contained' color='primary'
              onClick={() => { callbackFunction(inputText); handleClose(); }}>
              {'ثبت'}
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </Dialog >
  );
}


export default Index;