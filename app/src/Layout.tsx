import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Toolbar, Typography } from '@mui/material';
import {Link } from 'remix';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Layout({ children }: { children: React.ReactNode }) {
  //TODO: add dark mode
  return (
    <Container maxWidth='xl'>
        <Toolbar component='nav' variant="regular" sx={{borderBottom: 1, borderColor: 'divider' }} >
          <Typography variant="h6" align="left" sx={{flex: 1}}>
            luisplatzer.de
          </Typography>
          <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} to="/">
            Home
          </Button>
          <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} to="/about">
            About Me
          </Button>
          <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} to="/blog">
            Blog
          </Button>
          <Button sx={{margin: '1em'}} variant="text" disableElevation component={Link} to="/contact">
            Contact
          </Button>
          <IconButton href="https://github.com/lplatzer">
            <GitHubIcon/>
          </IconButton>
        </Toolbar>
      <Box padding="2em" sx={{ my: 4 }}>
        {children}
      </Box>
      <Toolbar variant="regular" sx={{borderTop: 1, borderColor: 'divider'}}>
      <Typography variant="body2" color="text.secondary" align="left">
        <Link to="/imprint">
          Imprint
        </Link>
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center" sx={{flex: 1}}>
        {'Copyright © '}
        <Link to="/">
          luisplatzer.de
        </Link>{' '}
        {new Date().getFullYear()}.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="right">
        <Link to="/privacy-policy">
          Privacy Policy
        </Link>
      </Typography>
    </Toolbar>
    </Container>
  );
}
