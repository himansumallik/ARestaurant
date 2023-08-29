import React from 'react'
import { Box, Typography} from "@mui/material";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const FooterForm = () => {
    return (
        <>
            <Box
                sx={{ textAlign: "center", bgcolor: "#838996", color: "black", p: 3 }}
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
                    <Button variant="contained" size="large" color="success"  sx={{p:1, my:2.5}}>SUBSCRIBE</Button>
                </div>
                </Box>
            </Box>
    </>
    )
}

export default FooterForm
