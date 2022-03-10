import { Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Footer from "./containers/Footer";
import Header from "./containers/Header";
import HomeBack from "./containers/HomeBack";
import Book from "./pages/Book";
// import AddUser from "./pages/AddUser";
// import EditUser from "./pages/EditUser";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBack />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="book/:category" element={<Book />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
