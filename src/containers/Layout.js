import { makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: '12vh',
    backgroundColor: '#333',
    overflow: 'auto',
    whiteSpace: 'nowrap',
  },

  scrollItem: {
    display: 'inline-block',
    color: 'white',
    textAlign: 'center',
    padding: '14px',
    textDecoration: 'none',
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
    height: '100vh'
  },

  background: ({ backgroundImage }) => ({
    transform: 'scale(1.1)',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    background: `url(${process.env.PUBLIC_URL + backgroundImage}) no-repeat center center fixed`,
    opacity: '0.5',
    backgroundSize: 'cover',
    zIndex: '-1',
    animation: 'show-back 0.8s 0.3s both',
    filter: 'blur(3px)',
  }),
}));

const Layout = ({
  backgroundImage,
  ...props
}) => {
  const classes = useStyles({ backgroundImage });
  const history = useHistory();

  return (
    <>
      <div className={classes.background} />
      {/* <AppBar mode="GAME_ENVIRONMENT" position="fixed" /> */}
      <div className={classes.container}>{props.children}</div>
    </>
  );
};

export default Layout;