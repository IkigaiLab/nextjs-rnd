import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Head from 'next/head';
import NextLink from 'next/link';
import { AppBar, Container, Toolbar, Typography, Link } from '@mui/material';
import styled from '@emotion/styled';

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
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Next Flipkarta` : 'Next Flipkarta'}</title>
      </Head>
      <AppBar position="static">
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
            <NextLink href="/cart" passHref>
              <Link
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  m: 3,
                }}
              >
                Cart
              </Link>
            </NextLink>
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
          </div>
        </Toolbar>
      </AppBar>
      <Container style={{ minHeight: '80vh' }}>{children}</Container>
      {/* <Buttons>This is a hotpink button.</Buttons> */}
      <Footer>
        <Typography sx={{ mt: 4 }}>
          All rights reserved. Next Flipkarta
        </Typography>
      </Footer>
    </div>
  );
};

export default Layout;
