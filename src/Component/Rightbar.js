import {
    Link,
    Avatar,
    Container,
    ImageList,
    ImageListItem,
    makeStyles,
    Typography,
    Divider,
  } from "@material-ui/core";
  import { AvatarGroup } from "@material-ui/lab";
  
  const useStyles = makeStyles((theme) => ({
    container: {
      paddingTop: theme.spacing(10),
      position: "sticky",
      top: 0,
    },
    title: {
      fontSize: 16,
      fontWeight: 500,
      color: "#555",
    },
    link: {
      marginRight: theme.spacing(2),
      color: "#555",
      fontSize: 16,
    },
  }));
  
  const Rightbar = () => {
    const classes = useStyles();
    return (
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={6} style={{ marginBottom: 20 }}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1567339200339-9e514d1724fe?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.unsplash.com/photo-1553083011-9e848135c287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.unsplash.com/photo-1535117399959-7df1714b4202?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1632583285386-a917ab2af861?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDU0fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1607625004976-be5d015ed235?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1606992500676-c82dc464964f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.unsplash.com/photo-1611024847487-e26177381a3f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </AvatarGroup>
        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
        <ImageList rowHeight={100} style={{ marginBottom: 20 }} cols={2}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1567339200339-9e514d1724fe?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1632659895656-1e4c368afd9a?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1523044832861-02368d48d715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1524622341340-6530b7d5f3ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=413&q=80"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1535117399959-7df1714b4202?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography className={classes.title} gutterBottom>
          Categories
        </Typography>
        <Link href="#" className={classes.link} variant="body2">
          Sport
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Food
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Music
        </Link>
        <Divider flexItem style={{marginBottom:5}}/>
        <Link href="#" className={classes.link} variant="body2">
          Movies
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Science
        </Link>
        <Link href="#" className={classes.link} variant="body2">
          Life
        </Link>
      </Container>
    );
  };
  
  export default Rightbar;