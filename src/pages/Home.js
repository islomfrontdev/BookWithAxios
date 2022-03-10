import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { loadBooks, searchBook } from "../redux/actions";
import { dispatch } from "../redux/store";

export default function Home() {
  const { books, search } = useSelector((state) => state.data);
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(loadBooks());
  }, []);
  console.log(search);
  const newPage = (cat) => {
    navigate(`book/${cat}`);
    dispatch(searchBook(""));
  };
  return (
    <Box
      sx={{
        backgroundColor: "#eee",
        py: 10,
      }}
    >
      <Container>
        <Typography
          sx={{
            textAlign: "center",
            color: "#0B0B0B",
            lineHeight: "71px",
            fontSize: "50px",
            fontFamily: "Rozha One, serif",
          }}
        >
          Categories
        </Typography>
        <Grid container spacing={2}>
          {books.length ? (
            books.map(
              (book) =>
                book.list_name_encoded.includes(search) && (
                  <Grid key={book.list_name} item xs={12} sm={6} md={4} lg={3}>
                    <Box
                      onClick={() => newPage(book.list_name_encoded)}
                      sx={{
                        display: "flex",
                        mt: 3,
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: 2,
                        alignItems: "center",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                        borderRadius: 2,
                        minHeight: 140,
                        backgroundColor: "#fff",
                        p: 3,
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        sx={{
                          height: "70px",
                        }}
                      >
                        <img src="/book.png" width={"64px"} />
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: "Rozha One, serif",
                          color: "#0B0B0B",
                          fontSize: "18px",
                          flex: 1,
                          textAlign: "center",
                        }}
                      >
                        {book.list_name}
                      </Typography>
                    </Box>
                  </Grid>
                )
            )
          ) : (
            <Box
              sx={{
                display: "flex",
              }}
            >
              <CircularProgress />
            </Box>
          )}
        </Grid>
      </Container>
    </Box>
  );
}
