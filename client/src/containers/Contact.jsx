import React from "react";
import Layout from "../components/layout";
import ContactForm from "./contactForm";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box className="container" display="flex" flexDirection="column" justifyContent="center" sx={{p:3}}>
        <Box className="intro">
          <Typography variant="h4" fontFamily="sans-serif">Contact My Resturant</Typography>
            <p>
              Call us now on the number at the top of the page and a member of our team will 
              be delighted to offer our assistance to you. Alternatively we can be reached by 
              sending an email via the handy contact us page on this website.
            </p>
        </Box>
        <Box className="body" display="flex" flexDirection="row" justifyContent="center" sx={{
          gap:10,
          border:1,
          borderColor:"brown"
          

        }}>
          <Box className="contactDetails" display="flex" flexDirection="column" justifyContent="center">
            <Box display="flex" flexDirection="row" justifyContent="center" sx={{background:"#704214", color:"white" }}>
              Contact Details
            </Box>
            <Box>
              <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 778-476-2273
            </Box>
            <Box>
              <MailIcon sx={{ color: "skyblue", pt: 1 }} /> lalitarora25@yahoo.ca
            </Box>
            <Box>
              <PlaceIcon sx={{ color: "green", pt: 1 }} /> Ashoka Indian Restaurant 101 Westminster Ave W, Penticton, BC V2A 1J7
            </Box>
            <Box>
              <iframe 
                        title="location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2591.1715365832283!2d-119.5971790234984!3d49.50015457142633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5482627aa3bcec6d%3A0x4756932ef3e70d02!2sAshoka%20Indian%20Cuisine!5e0!3m2!1sen!2snp!4v1691421011029!5m2!1sen!2snp" 
                        width="100%" 
                        height="450" 
                        style={{ border: "0" }} 
                        allowFullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Box>
          </Box>
          <Box className="contactForm" display="flex" flexDirection="column" justifyContent="center" >
            <Box display="flex" flexDirection="row" justifyContent="center" sx={{background:"#704214", color:"white"}}>Contact Form</Box>
            <Box><ContactForm/></Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;