import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Scene from '../Scene';
import Objects from './Objects';

const useStyles = makeStyles(() => ({
  fullHeight: {
    minHeight: '100vh',
  },
}));

const Index = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Scene backgroundImageLink={'/InsideBoxWithOnLamp/background.png'} objects={Objects} />
  );
};


export default Index;