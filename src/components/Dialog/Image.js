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
  Typography,
  Zoom,
} from '@material-ui/core';
import React from 'react';

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
    // maxWidth: '400px',
    maxHeight: '600px',
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      // maxWidth: '250px',
      maxHeight: '300px',
      width: '100%',
    }
  }
}));

function Index({
  open,
  handleClose,
  image: inputImage,
  text,
}) {
  const classes = useStyles();
  const image = inputImage || '/logo.png';
  return (
    <Dialog maxWidth='lg' open={open} onClose={handleClose} PaperComponent='false'>
      <DialogTitle>
        <Grid container spacing={2} justify='center'>
          <img className={classes.image} alt='' src={process.env.PUBLIC_URL + image} />
        </Grid>
      </DialogTitle>
      {text &&
        <DialogActions>
          <Grid container component={Paper} direction='column' spacing={2} justify='center'>
            <Grid item>
              <Typography variant='h2' align='center'>
                {text}
              </Typography>
            </Grid>
          </Grid>
        </DialogActions>
      }
    </Dialog >
  );
}


export default Index;