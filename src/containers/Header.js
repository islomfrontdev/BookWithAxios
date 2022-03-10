import { Box, Container, IconButton, InputBase, Link } from "@mui/material";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchBook } from "../redux/actions";
import { dispatch } from "../redux/store";
export default function Header() {
  const [name, setName] = useState("");
  const { search } = useSelector((state) => state.data);
  const handleChange = (event) => {
    if (!event.target.value) return;
    setName(event.target.value);
    dispatch(searchBook(name.toLowerCase()));
  };
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: 1,
          }}
        >
          <Box>
            <NavLink to={"/"}>
              <img src="/Logo.png" width={"180px"}></img>
            </NavLink>
          </Box>
          <Box
            sx={{
              border: "1px solid #DDDDDD",
              borderRadius: 2,
              px: 2,
              py: 0.2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <InputBase
              placeholder="Search"
              onChange={(e) => handleChange(e)}
            ></InputBase>
            <IconButton>
              <BiSearch color="#1B1B1B" size={20} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </>
  );
}
