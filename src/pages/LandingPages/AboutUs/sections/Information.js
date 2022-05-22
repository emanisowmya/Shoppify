// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import axios from "axios";

function Information() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/getorder").then((res) => {
      setCart(res.data);
    });
  });

  const images = require.context(`../../../../assets/images/Purse`, true);
  const renderData = cart.map(({ id, index, itemtype, itemname }) => {
    const bgImage0 = images(`./${itemtype.toLowerCase()}${index}.jpg`).default;
    const id1 = "ORDER# ".concat(id.toString());
    return (
      <CenteredBlogCard
        image={bgImage0}
        title={id1}
        description={itemname}
        action={{
          type: "internal",
          route: "/track-order",
          color: "info",
          label: "Track order",
        }}
      />
    );
  });

  return (
    <MKBox component="section">
      <Container>
        <Grid item xs={8} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }} display="flex">
          {renderData}
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
