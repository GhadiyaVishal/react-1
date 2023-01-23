import React, { useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import { Chip } from "@mui/material";

const Games = ({ data }) => {
  const [text, setText] = useState("");

  return (
    <>
      {/* HEADER PART */}
      <AppBar
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
            value={text}
            onChange={e => {
              setText(e.target.value);
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

      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.5rem",
        }}
      >
        List Of Games
      </Typography>
      <Card sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {data
          .filter(item => {
            if (text == "") {
              return item;
            } else if (item.title.toLowerCase().includes(text.toLowerCase())) {
              return item;
            }
          })
          .map((item, i) => {
            return (
              <Card
                key={i}
                columns={{ xs: 4, sm: 8, md: 12 }}
                sx={{ width: "33%" }}
              >
                <CardContent sx={{ ml: "2rem" }}>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.platform}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    <strong>Rating: {item.score}/10</strong>
                    <br />
                    <Chip
                      avatar={<Avatar size={32}>{item.genre[0]}</Avatar>}
                      label={item.genre}
                      style={{ margin: "5% 0 0 0" }}
                    />
                    {/* <Avatar sx={{}}>{item.genre[0]}</Avatar>
                  {item.genre} */}
                  </Typography>
                  <Typography variant="body2">
                    {item.editors_choice && item.editors_choice == "Y" ? (
                      <Chip
                        avatar={<Avatar size={32}>E</Avatar>}
                        label="Editors Choice "
                        // style={{ margin: "5% 0 5% 0" }}
                      />
                    ) : (
                      ""
                    )}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
      </Card>
    </>
  );
};

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

export default Games;

// .filter(item => {
//   if (text == "") {
//     return item;
//   } else if (item.title.toLowerCase().includes(text.toLowerCase())) {
//     return item;
//   }
// })
