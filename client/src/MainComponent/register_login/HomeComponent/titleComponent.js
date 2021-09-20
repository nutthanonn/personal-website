import { Typography, makeStyles } from "@material-ui/core";
import FadeIn from "react-fade-in";

const useStyle = makeStyles({
  title: {
    marginTop: 160,
    textAlign: "center",
  },
});

const TitleComponent = () => {
  const classes = useStyle();
  return (
    <FadeIn>
      <Typography variant="h3" className={classes.title} color="primary">
        King Mongkut's University of Technology Thonburi
        <Typography variant="body2" color="textSecondary">
          --- Apply Computer Science ---
        </Typography>
      </Typography>
    </FadeIn>
  );
};

export default TitleComponent;
