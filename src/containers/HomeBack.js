import { Box, Typography } from "@mui/material";
import React from "react";
export default function HomeBack() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        backgroundImage: "url(/HomeBack.png)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          maxWidth: 600,
          textAlign: "center",
          textShadow: "0px 7px 7px rgba(0, 0, 0, 0.7);",
          lineHeight: 1.5,
          color: "#fff",
          fontFamily: "Rozha One, serif",
        }}
      >
        BookShop - easy buy books online
      </Typography>
    </Box>
  );
}
