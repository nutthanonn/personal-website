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
import { useDispatch } from "react-redux";
import { deleteText } from "../slices/cartSlice";

export default function CardText({ data }) {
  const dispatch = useDispatch();

  return (
    <Box sx={{ m: 3 }}>
      <Card sx={{ width: 500 }}>
        <CardHeader
          title={data.title}
          avatar={<Avatar></Avatar>}
          action={
            <IconButton onClick={() => dispatch(deleteText({ id: data.id }))}>
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
