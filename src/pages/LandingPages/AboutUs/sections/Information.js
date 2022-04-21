// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

function Information() {
  return (
    <MKBox component="section">
      <Container>
        <Grid item xs={12} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }} display="flex">
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Order# "
            description="Checkout your order on 20/11/2022 date"
            action={{
              type: "internal",
              route: "pages/company/about-us",
              color: "info",
              label: "find out more",
            }}
          />
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Order# "
            description="Checkout your order on 20/11/2022 date"
            action={{
              type: "internal",
              route: "pages/company/about-us",
              color: "info",
              label: "find out more",
            }}
          />
          <CenteredBlogCard
            image="https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            title="Order# "
            description="Checkout your order on 20/11/2022 date"
            action={{
              type: "internal",
              route: "pages/company/about-us",
              color: "info",
              label: "find out more",
            }}
          />
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
