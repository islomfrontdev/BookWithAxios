import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Link,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getSingleBook } from "../redux/actions";
import { dispatch } from "../redux/store";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
export default function Book() {
  const params = useParams();
  const { book } = useSelector((state) => state.data);
  React.useEffect(() => {
    dispatch(getSingleBook(params.category));
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const [publisher, setPublisher] = useState("");
  const [desc, setDesc] = useState("");
  const [contributor, setContributor] = useState("");
  const handleOpen = (book) => {
    setPublisher(book.publisher);
    setDesc(book.description);
    setContributor(book.contributor);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        backgroundColor: "#eeeee",
        py: 11,
      }}
    >
      <Container>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Contributor : {contributor}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {desc}
            </Typography>
            <Typography variant="h6">Publisher : {publisher}</Typography>
          </Box>
        </Modal>
        <Typography
          sx={{
            textAlign: "center",
            color: "#0B0B0B",
            lineHeight: "71px",
            fontSize: "40px",
            fontFamily: "Rozha One, serif",
            textTransform: "capitalize",
          }}
        >
          {params.category}
        </Typography>

        <Grid container spacing={2}>
          {book.length ? (
            book.map((b) => (
              <Grid key={book.list_name} item xs={12} sm={6} md={4} lg={3}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: 450,
                    mt: 3,
                  }}
                >
                  {b.book_image ? (
                    <CardMedia
                      component="img"
                      height="220"
                      image={b.book_image}
                      alt="green iguana"
                    />
                  ) : (
                    <Skeleton
                      variant="rectangular"
                      width={"100%"}
                      height={220}
                    />
                  )}
                  <CardContent
                    sx={{
                      flex: 1,
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        color: "#0B0B0B",
                        fontFamily: "Rozhe One",
                        fontSize: "18px",
                      }}
                    >
                      Title : {b.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#8f8f8f",
                        lineHeight: "20px",
                        fontFamily: "Rozhe One",
                      }}
                    >
                      Author: {b.author}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: "Rozhe One",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#8f8f8f",
                          fontFamily: "Rozhe One",
                        }}
                      >
                        Price:
                      </Typography>
                      <Typography
                        variant="body2"
                        color="orangered"
                        sx={{
                          fontFamily: "Rozhe One",
                        }}
                      >
                        {b.price}$
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      mb: 2,
                      display: "flex",
                      justifyContent: "space-around",
                      flexWrap: "wrap",
                      gap: 2,
                    }}
                  >
                    <Link href={b.amazon_product_url} target="_blank">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#14668C",
                          fontFamily: "Rozhe One",
                          borderRadius: "12px",
                          px: 3,
                          width: 90,
                        }}
                      >
                        Buy
                      </Button>
                    </Link>
                    <Button
                      onClick={() => handleOpen(b)}
                      variant="contained"
                      sx={{
                        backgroundColor: "#14668C",
                        fontFamily: "Rozhe One",
                        borderRadius: "12px",
                        width: 90,
                      }}
                    >
                      More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
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
