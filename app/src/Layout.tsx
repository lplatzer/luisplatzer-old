import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ProTip from './ProTip';
import Copyright from './Copyright';
import { AppBar, Toolbar, Typography } from '@mui/material';
import {Link } from 'remix';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <AppBar>
        <Toolbar variant="regular">
          <Typography variant="h6">
            luisplatzer.de
          </Typography>
          <Button variant="contained" disableElevation component={Link} to="/">
            Home
          </Button>
          <Button variant="contained" disableElevation component={Link} to="/about">
            About Me
          </Button>
          <Button variant="contained" disableElevation component={Link} to="/blog">
            Blog
          </Button>
          <Button variant="contained" disableElevation component={Link} to="/contact">
            Contact
          </Button>
          <IconButton href="https://github.com/lplatzer">
            <GitHubIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box padding="2em"sx={{ my: 4 }}>
        {children}
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
