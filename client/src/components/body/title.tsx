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
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 2 }}
        >
          <Typography variant="h2" color="#f48882">
            Nutthanon
          </Typography>
        </motion.div>
      </Box>
      <Box>
        <motion.div>
          <Divider sx={{ width: 300 }} />
        </motion.div>
      </Box>
    </Box>
  );
};

export default Title;
