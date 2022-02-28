import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Main(props) {
  const { posts } = props;

  return (
    <Grid container sx={{mt: 12, width: "100%", display: "box"}} columnGap={4} rowGap={4}>
      {posts.map((post) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={`img/${post}.jpg`}
              alt={post}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {post} er hægt að finna út um allan bóndabæ, frá Búðardals til skarshlíð
                </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Skoða nánar
            </Button>
          </CardActions>
        </Card>
      ))}
    </Grid>
  );
  /*
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
  */
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;