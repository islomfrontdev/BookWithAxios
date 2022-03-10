import { Box, Container, Link } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#C4C4C4",
        py: 3,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <NavLink to="/">
              <img src="/Logo.png" width={"180px"} />
            </NavLink>
          </Box>
          <Box>
            <Link href="https://algorismic.uz" target={"_blank"}>
              <img src="/Algorismic.png" width={"180px"} />
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
