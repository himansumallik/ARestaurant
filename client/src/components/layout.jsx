import React from "react";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;