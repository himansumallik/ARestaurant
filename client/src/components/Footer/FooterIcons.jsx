import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography} from "@mui/material";


const FooterIconsInfo = () => {
    return (
        <>
        {/* SOCIAL SITES  SECTION */}
        <Box
          sx={{ textAlign: "center", bgcolor: "#34282C", color: "goldenrod", p: 0.2 }}
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
  
        {/* LOWER SECTION FOOTER */}
        <Box
          sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "goldenrod", p: "5px" }}
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
        )
    }

export default FooterIconsInfo;