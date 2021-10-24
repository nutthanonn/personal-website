import {
  Card,
  Avatar,
  CardHeader,
  CardContent,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

export default function CardText({ data }) {
  return (
    <Box sx={{ m: 3 }}>
      <Card sx={{ width: 500 }}>
        <CardHeader
          title={data.title}
          avatar={<Avatar></Avatar>}
          action={
            <IconButton>
              <HighlightOffIcon />
            </IconButton>
          }
        />
        <CardContent>
          <Typography variant="h5">{data.text}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
