import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Lottie from "react-lottie";
import coding from "../../../lotties/lotties-coding.json";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    background:
      "linear-gradient(180deg, rgba(255,206,243,1) 0%, rgba(255,255,255,1) 5%, rgba(161,234,251,1) 34%)",
  },
  grid: {
    minHeight: "100vh",
  },
  title: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
  },
});

const AboutMe = () => {
  const classes = useStyles();
  const codingOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item md={6}>
          <Lottie options={codingOptions} />
        </Grid>
        <Grid item md={6}>
          <Box>
            <Typography variant="h2" color="black" className={classes.title}>
              <span>About me</span>
            </Typography>
            <Box>
              <Typography variant="h4" color="#333">
                สวัสดีครับ
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
