import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TextField from '@mui/material/TextField';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import { Box, Typography} from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        display="grid"
        gap="30px"
        sx={{ textAlign: "center", bgcolor: "#34282C", color: "white", p: 2 }}
      >
          <Box>
            <Typography
              fontSize='30px'
              sx={{
                "@media (max-width:600px)": {
                  fontSize: "20px",
                },
              }}
            >
              CONTACT US
            </Typography>
            <Typography
              fontSize='15px'
              sx={{
                "@media (max-width:600px)": {
                  fontSize: "10px",
                },
              }}
            >
              Call us now on the number at the top of the page and a member of our team will be delighted to offer our assistance to you.
              Alternatively we can be reached by sending an email via the handy contact us page on this website.
            </Typography>
          </Box>
          <Box display="flex" gap="50px" alignItems="center" justifyContent="space-around" sx={{ fontSize: "70px",
              "@media (max-width:600px)": {
                fontSize: "30px",
                display:"grid", 
                alignItems:"center", 
                justifyContent:"space-around",
                gap:"30px"
              },
              "& svg": {
                fontSize: "70px",
                cursor: "pointer",
              }
            }}>
            <Box display="flex">
              <Box><CallIcon/></Box>
              <Box>
                <Typography>GIVE US A CALL</Typography>
                <Typography>Telephone:778-476-2273</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box><PlaceIcon/></Box>
              <Box>
                <Typography>ADRESS</Typography>
                <Typography>Ashoka Indian Restaurant
                    101 Westminster Ave W,
                    Penticton, BC V2A 1J7</Typography>
              </Box>
            </Box>
            <Box display="flex">
              <Box><EmailIcon/></Box>
              <Box>
                <Typography>SEND US A MESSAGE</Typography>
                <Typography>lalitarora25@yahoo.ca</Typography>
              </Box>
            </Box>
          </Box>
      </Box>


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
              color: "green",
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