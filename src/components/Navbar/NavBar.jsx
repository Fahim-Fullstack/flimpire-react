import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Avatar,
  Button,
  useMediaQuery,
} from '@mui/material';
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const NavBar = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(Max-width: 600px)');
  return (
    <AppBar position='fixed'>
      <Toolbar className={classes.toolbar} />
      {isMobile && (
        <IconButton
          color='inherit'
          edge='start'
          style={{ outline: 'none' }}
          onClick={() => {}}
          className={classes.menuButton}
        >
          <Menu />
        </IconButton>
      )}
    </AppBar>
  );
};

export default NavBar;
