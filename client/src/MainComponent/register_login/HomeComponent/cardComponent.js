import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Typography, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
  cardIncard: {
    margin: 10,
  },
  button: {
    opacity: 0.8,
  },
});

const CardComponent = () => {
  const classes = useStyle();
  return (
    <Card
      className={classes.cardIncard}
      sx={{ maxWidth: 345, borderColor: "grey.500" }}
    >
      <CardMedia
        component="img"
        image="https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.6435-9/175004239_5353525294690180_4496663203887172264_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeETaemQRRn9vP_sKHDLVqH1l44OdLlC9umXjg50uUL26e5eMslrsC8biybUUlMQ7VWtLyjtdllIu6KcUEJE0FtJ&_nc_ohc=ggx4V74mh78AX9VVU3m&_nc_ht=scontent.fbkk6-1.fna&oh=6fd54a1945b3809f69aa66b24f5b8673&oe=616EA5C0"
        height="200"
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          APPLY COMPUTER SCIENCE
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          obcaecati, ipsum reiciendis ea quisquam iure.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={() => console.log("ts")}
        >
          View
        </Button>
        <Button variant="contained" size="small">
          SEE More
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
