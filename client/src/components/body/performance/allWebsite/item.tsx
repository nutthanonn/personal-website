import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Performance } from "../../../../api/performanceApi";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const Item: React.FC = () => {
  return (
    <Box>
      {Performance.map((item) => {
        return (
          <Grid container sx={{ mt: 10 }} spacing={5}>
            <Grid item md={6}>
              <motion.div
                whileInView={{ scale: 1, opacity: 1 }}
                initial={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img src={item.pic} width="100%" height="" alt="คนละครึ่ง" />
              </motion.div>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
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
                  Libraby ที่ใช้
                </Typography>

                <ul>
                  {item.libraries.map((e) => {
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
              </motion.div>
            </Grid>
          </Grid>
        );
      })}
    </Box>
  );
};

export default Item;
