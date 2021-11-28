import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Performance } from "../../../../api/performanceApi";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Item: React.FC = () => {
  return (
    <Box>
      {Performance.map((item) => {
        return (
          <Grid container sx={{ mt: 10 }} spacing={5}>
            <Grid item md={6} sm={12}>
              <img src={item.pic} width="100%" height="" alt="คนละครึ่ง" />
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4">{item.name}</Typography>
              <Typography variant="body1">
                Responsive :{" "}
                {item.responsive === "y" ? (
                  <AiOutlineCheck />
                ) : (
                  <AiOutlineClose />
                )}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Tools
              </Typography>

              <ul>
                {item.tools.map((e) => {
                  return <li>{e}</li>;
                })}
              </ul>
              <Typography
                component="a"
                href={item.link}
                target="_blank"
                color="black"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                You can see more...
              </Typography>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Item;
