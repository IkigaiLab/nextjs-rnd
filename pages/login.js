import React from 'react';
import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
  Link,
} from '@mui/material';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NextLink from 'next/link';
import Layout from '../components/Layout';

export default function Login() {
  return (
    <Layout title="Login">
      <form
        css={css`
          max-width: 800px;
          margin: 0 auto;
        `}
      >
        <Typography component="h1" variant="h1">
          Login
        </Typography>
        <List>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="email"
              label="Email"
              inputProps={{ type: 'email' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <TextField
              variant="outlined"
              fullWidth
              id="password"
              label="Password"
              inputProps={{ type: 'password' }}
            ></TextField>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Login
            </Button>
          </ListItem>
          <ListItem>
            Do not have an account? &nbsp;
            <NextLink href="/register" passHref>
              <Link>Register</Link>
            </NextLink>
          </ListItem>
        </List>
      </form>
    </Layout>
  );
}
