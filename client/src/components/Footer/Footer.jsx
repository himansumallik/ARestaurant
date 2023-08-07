import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, Typography} from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#838996", color: "white", p: 3 }}
      >
        <Typography
          variant="h4"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          SIGN UP FOR LATEST EXCITING DEALS!
        </Typography>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 2, width: '35ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Your Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Your Email"
              size="normal"
            />
            <Button variant="contained" size="large" color="success" sx={{p:1, my:2.5}}>SUBSCRIBE</Button>
          </div>
        </Box>
      </Box>


      <Box
        sx={{ textAlign: "center", bgcolor: "#34282C", color: "white", p: 0.2 }}
      >
        <Box
          sx={{
            my: 1,
            "& svg": {
              fontSize: "30px",
              cursor: "pointer",
              mr: 3,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
      </Box>


      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: "5px" }}
      >
        <Typography
          variant="h6"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          All Rights Reserved &copy; MY RESTAURANT
        </Typography>
      </Box>
    </>
  );
};

export default Footer;