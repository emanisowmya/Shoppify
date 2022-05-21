// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// Images
// import bgImage0 from "assets/images/Purse/purse1.jpg";

function HeaderOne({ title, index }) {
  const images = require.context(`../../../../../../assets/images/Purse`, true);
  const bgImage0 = images(`./${title.toLowerCase()}${index}.jpg`).default;
  console.log(title);
  return (
    <MKBox component="header" position="relative" height="100%">
      <MKBox
        display="flex"
        alignItems="center"
        minHeight="100%"
        sx={{
          backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.5),
              rgba(gradients.dark.state, 0.5)
            )}, url(${bgImage0})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} md={7} lg={6} flexDirection="column" justifyContent="center">
            <MKTypography
              variant="h1"
              color="white"
              mb={3}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              {title}
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} pr={6} mr={6}>
              Best quality product with reasonable price.
            </MKTypography>
            <Stack direction="row" spacing={1} mt={3}>
              <MKButton color="white">Buy Now</MKButton>
              <MKButton variant="text" color="white">
                Add to cart
              </MKButton>
            </Stack>
          </Grid>
        </Container>
      </MKBox>
    </MKBox>
  );
}

HeaderOne.propTypes = {
  title: PropTypes.string.isRequired,
  index: PropTypes.isRequired,
};

export default HeaderOne;
