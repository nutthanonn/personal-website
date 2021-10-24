import { Box, Typography } from "@mui/material";
import TextArea from "../components/formInput";
import CardText from "../components/cardText";
import { useSelector } from "react-redux";

export default function Home() {
  const cart = useSelector((state) => state.card);
  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <TextArea />
        <Typography sx={{ textAlign: "center" }} variant="h3">
          Comment
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {cart.map((e) => {
            return <CardText data={e} key={e.id} />;
          })}
        </Box>
      </form>
    </Box>
  );
}
