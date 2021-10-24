import * as React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Button,
  Typography,
  CardActions,
  Tooltip,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addMemory } from "../slices/programSlice";

export default function CardProgram({ data }) {
  const dispatch = useDispatch();
  return (
    <Box>
      <Box sx={{ display: { xs: "none", sm: "flex" } }}>
        <Card>
          <CardMedia component="img" image={data.url} height="200" />
          <CardContent>
            <Typography component="div" variant="h5">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.comment}
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title={data.size}>
              <Button onClick={() => dispatch(addMemory({ ...data }))}>
                Download
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
      <Box sx={{ display: { sx: "flex", sm: "none" } }}>
        <Card>
          <CardMedia component="img" image={data.url} />
          <CardContent>
            <Typography component="div" variant="h5">
              {data.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {data.comment}
            </Typography>
          </CardContent>
          <CardActions>
            <Tooltip title={data.size}>
              <Button onClick={() => dispatch(addMemory({ data }))}>
                Download
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
