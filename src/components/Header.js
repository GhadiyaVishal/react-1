import React, { useState, useEffect } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
// import PersonSearchIcon from "@mui/icons-material/PersonSearch";

const Header = ({ text }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const handleInput = value => {
      setTitle(value);
      sendResult(value);
    };
  }, [title]);

  return (
    <>
      <AppBar
        // className={classes.header}
        position="static"
        color="secondary"
        sx={{ backgroundColor: "skyblue", display: "inline-flex" }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            color: "white",
            height: "4rem",
            mb: "2rem",
          }}
        >
          <SearchTwoToneIcon
            sx={{ color: "action.active", mr: 1, my: 0.5, ml: 5 }}
          />
          <TextField
            id="input-with-sx"
            label="Search Game"
            variant="standard"
            value={title}
            onChange={e => {
              handleInput(e.target.value);
            }}
            sx={{
              width: "30%",
              mt: "1",
            }}
          />
          <Typography
            sx={{
              ml: "5rem",
              fontSize: "1.5em",
              fontWeight: "bold",
              color: "black",
              mt: "1rem",
            }}
          >
            Gamer's Junction
          </Typography>
        </Box>
      </AppBar>
    </>
  );
};

export default Header;
