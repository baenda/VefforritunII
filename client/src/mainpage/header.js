import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';

function Header (props) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Button size="small">Vöruflokkar</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            sx={{ flex: 1 }}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="contained" size="small" color="secondary">
            <Link to="https://dev-5603y9-a.us.auth0.com/authorize?
            response_type=code|token&
            client_id=JK1alJD9ELz3x7vcGBfb2w3jVVx9Xzp4&
            connection=CONNECTION&
            redirect_uri=http://localhost:3000/callback&
            state=STATE">
            Sign in
            </Link>
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
          {sections.map((section) => (
            <Button sx={{color: "white"}} key={section.title}>
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                sx={{ p: 1, flexShrink: 0 }}
              >
                {section.title}
              </Link>
            </Button>
          ))}
        </Toolbar>
      </AppBar>

    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;