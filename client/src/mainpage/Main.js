import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import ReactMarkdown from 'react-markdown';
import { Paper } from '@mui/material';

function Main(props) {
  const { posts } = props;

  return (
    <Grid container sx={{mt: 12, width: "100%", display: "box"}} columnGap={4} rowGap={4}>
      {posts.map((post) => (
        <Grid item xs={2}>
          <Paper width={200}>
            <ReactMarkdown className="markdown" key={post.substring(0, 40)}>
              {post}
            </ReactMarkdown>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;