// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import axios from "axios";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

function Team() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getcart").then((res) => {
      setCart(res.data);
    });
  });

  const images = require.context(`../../../../assets/images/Purse`, true);
  const renderData = cart.map(({ itemname, itemtype, index }) => {
    const bgImage0 = images(`./${itemtype.toLowerCase()}${index}.jpg`).default;
    return (
      <Grid item xs={12} lg={6}>
        <MKBox mb={1}>
          <HorizontalTeamCard
            image={bgImage0}
            name={itemtype}
            position={{ color: "info", label: "Buy Now" }}
            description={itemname}
          />
        </MKBox>
      </Grid>
    );
  });

  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Cart
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Please buy them before they go out of stock.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
