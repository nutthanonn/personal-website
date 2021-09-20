import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  title: {
    marginTop: 200,
    textAlign: "center",
  },
});

const TitleComponent = () => {
  const classes = useStyle();
  return (
    <Typography variant="h3" className={classes.title} color="primary">
      King Mongkut's University of Technology Thonburi
      <Typography variant="body2" color="textSecondary">
        --- Apply Computer Science ---
      </Typography>
    </Typography>
  );
};

export default TitleComponent;
