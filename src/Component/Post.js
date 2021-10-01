import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
  } from "@material-ui/core";
  
  
  const useStyles = makeStyles((theme) => ({
    card: {
      marginBottom: theme.spacing(5),
    },
    media: {
      height: 250,
      [theme.breakpoints.down("sm")]: {
        height: 150,
      },
    },
  }));
  
  const Post = ({ img, title }) => {
    const classes = useStyles();
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1569560346548-488e1f821687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
{/* *********************************************** */}
        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1625225573601-ea8e3e720498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>

{/* ***************************************************************** */}

        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1558765385-be57b4a7c3af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>

        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>

        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>

        <CardActionArea>
          <CardMedia className={classes.media} 
          image='https://images.unsplash.com/photo-1596796679119-7cf1a9e5448b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80'
          title="My Post" />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              consectetur earum est.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default Post;
  