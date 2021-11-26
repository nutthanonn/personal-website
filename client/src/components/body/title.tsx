import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { motion } from "framer-motion";

const Title: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <Typography variant="h2" color="#f48882">
            Kawpad Studio
          </Typography>
        </motion.div>
      </Box>

      <Divider sx={{ width: "100%" }} />
    </Box>
  );
};

export default Title;
