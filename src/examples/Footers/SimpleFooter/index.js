// @mui material components
import Container from "@mui/material/Container";
import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";

function SimpleFooter() {
  return (
    <Container>
      <MKBox
        width="100%"
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <MKBox display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">
          &copy; {new Date().getFullYear()}, made with
          <MKBox mb={-0.5} mx={0.25}>
            <Icon color="inherit" fontSize="inherit">
              favorite
            </Icon>
          </MKBox>
          by Aditya Sowmya for a better web.
        </MKBox>
      </MKBox>
    </Container>
  );
}

export default SimpleFooter;
