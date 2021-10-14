import React, { useContext, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
  Switch,
  Badge,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Store } from '../Utils/Store';

import styled from '@emotion/styled';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Buttons = styled.div`
  color: lightgreen;
  display: flex;
  justify-content: center;
  }
`;

const Footer = styled.div`
  text-align:center;
  }
`;

export const Layout = ({ title, children }) => {
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { darkMode, cart, userInfo } = state;
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#872007',
      },
      secondary: {
        main: '#357A38',
      },
      navcolor: {
        main: '#2c2957',
      },
    },
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
      h2: {
        fontSize: '1.4rem',
        fontWeight: 400,
        margin: '1rem 0',
      },
    },
  });

  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = () => {
    setAnchorEl(null);
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
  };

  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Flipkarta` : 'Next Flipkarta'}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" color="navcolor">
          <Toolbar>
            <NextLink href="/" passHref>
              <Link
                sx={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.5rem',
                  }}
                >
                  flipkarta
                </Typography>
              </Link>
            </NextLink>
            <div
              css={css`
                flex-grow: 1;
              `}
            ></div>
            <div>
              <Switch
                checked={darkMode}
                onChange={() => {
                  dispatch({
                    type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
                  });
                }}
              ></Switch>
              <NextLink href="/cart" passHref>
                <Link
                  sx={{
                    textDecoration: 'none',
                    color: 'white',
                    m: 3,
                  }}
                >
                  {cart.cartItems.length > 0 ? (
                    <Badge
                      color="secondary"
                      badgeContent={cart.cartItems.length}
                    >
                      Cart
                    </Badge>
                  ) : (
                    'Cart'
                  )}
                </Link>
              </NextLink>
              {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    sx={{ color: 'white', textTranform: 'initial' }}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                    <MenuItem onClick={loginMenuCloseHandler}>Profile</MenuItem>
                    <MenuItem onClick={loginMenuCloseHandler}>
                      My account
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link
                    sx={{
                      textDecoration: 'none',
                      color: 'white',
                    }}
                  >
                    Login
                  </Link>
                </NextLink>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <Container style={{ minHeight: '80vh' }}>{children}</Container>
        {/* <Buttons>This is a hotpink button.</Buttons> */}
        <Footer>
          <Typography sx={{ mt: 4, mb: 1 }}>
            All rights reserved. Next Flipkarta
          </Typography>
        </Footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
