import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import halfPeople from "../../../../images/halfPeople.png";
import { motion } from "framer-motion";

const AllPerformance: React.FC = () => {
  return (
    <Box>
      <Box sx={{ mt: 50 }}>
        <Container>
          <Grid container>
            <Grid item md={6}>
              <motion.div
                whileInView={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img src={halfPeople} width="100%" height="" alt="คนละครึ่ง" />
              </motion.div>
            </Grid>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true }}
              >
                <Typography variant="h4">
                  เว็ปไซต์คนละครึ่ง (YWC2020)
                </Typography>
                <Typography
                  component="a"
                  href="https://github.com/nutthanonn/half-people-2020"
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
        </Container>
      </Box>
    </Box>
  );
};

export default AllPerformance;
