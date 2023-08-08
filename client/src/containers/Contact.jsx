import React from "react";
import Layout from "../components/layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box >
        <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
          <Typography variant="h4">Contact My Resturant</Typography>
          <p>
            Call us now on the number at the top of the page and a member of our team will 
            be delighted to offer our assistance to you. Alternatively we can be reached by 
            sending an email via the handy contact us page on this website.
          </p>
        </Box>
        <Box
          sx={{
            m: 3,
            width: "600px",
            ml: 10,
            "@media (max-width:600px)": {
              width: "300px",
            },
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{ bgcolor: "black", color: "white" }}
                    align="center"
                  >
                    Contact Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 778-476-2273
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color: "skyblue", pt: 1 }} /> lalitarora25@yahoo.ca
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <PlaceIcon sx={{ color: "green", pt: 1 }} /> Ashoka Indian Restaurant 101 Westminster Ave W, Penticton, BC V2A 1J7
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <iframe 
                      title="location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.1715365832283!2d-119.5971790234984!3d49.50015457142633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482627aa3bcec6d%3A0x4756932ef3e70d02!2sAshoka%20Indian%20Cuisine!5e0!3m2!1sen!2snp!4v1691421011029!5m2!1sen!2snp" 
                      width="100%" 
                      height="450" 
                      style={{ border: "0" }} 
                      allowfullscreen="" 
                      loading="lazy" 
                      referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;