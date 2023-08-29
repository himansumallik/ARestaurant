import React from 'react'
import { Box, Typography} from "@mui/material";
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';


const FooterContact = () => {
    return (
        <>
            <Box
                display="grid"
                gap="30px"
                sx={{ textAlign: "center", bgcolor: "#34282C", color: "goldenrod", p: 2 }}
                >
                <Box>
                    <Typography
                        fontSize='30px'
                        color="white"
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
                    alignItems:"left", 
                    justifyContent:"space-around",
                    gap:"30px"
                    },
                    "& svg": {
                    fontSize: "70px",
                    cursor: "pointer",
                    }
                    }}>
                    <Box display="flex" >
                        <Box sx={{
                            mr:1,
                            "& svg:hover": {
                            color: "green",
                            transform: "translateX(5px)",
                            transition: "all 400ms",
                                }
                            }}><CallIcon/>
                        </Box>
                        <Box> 
                            <Typography color="white" fontSize="20px">GIVE US A CALL</Typography>
                            <Typography>Telephone:778-476-2273</Typography>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box sx={{
                            mr:1,
                            "& svg:hover": {
                            color: "green",
                            transform: "translateX(5px)",
                            transition: "all 400ms",
                                }
                            }}><PlaceIcon/>
                        </Box>
                        <Box>
                            <Typography color="white" fontSize="20px">ADDRESS</Typography>
                            <Typography
                                
                            >Ashoka Indian Restaurant 101 Westminster Ave W, Penticton, BC V2A 1J7</Typography>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box sx={{
                            mr:1,
                            "& svg:hover": {
                            color: "green",
                            transform: "translateX(5px)",
                            transition: "all 400ms",
                                }
                            }}><EmailIcon/>
                        </Box>
                        <Box>
                            <Typography color="white" fontSize="20px">SEND US A MESSAGE</Typography>
                            <Typography>lalitarora25@yahoo.ca</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}       

export default FooterContact;
