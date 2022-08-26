// import Footer from "../components/footer";
import { Box, Grid } from "@mui/material";
// import Header from "../components/header";
import React from "react";
import { MarketingFooter, NavBar } from "../ui-components";

// import { motion } from "framer-motion";

function DefaultLayout(props) {
  const { children } = props;
  return (
    // <div id="paper">
        <Box sx={{ width: "100vw" }}>
      <NavBar/>
      <main>
        {children}
        <MarketingFooter/>
      </main>
        </Box>

    // </div>
  );
}
export default DefaultLayout;
