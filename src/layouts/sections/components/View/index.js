import { useState, useEffect } from "react";

// prop-types is a library for type checking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import Button from "@mui/material/Button";
import axios from "axios";

function View({ children, code, title, height, index, name, ...rest }) {
  const buyerid = 567;
  const sellerid = 100;
  const itemnumber = 789;

  const [activeTab, setActiveTab] = useState(0);
  const [success, setSuccess] = useState(false);
  const [buyername, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleTabType = (event, newValue) => setActiveTab(newValue);

  const AddOrder = () => {
    console.log(itemnumber, buyerid, sellerid, buyername, address, index, title, name);
    axios
      .post("http://localhost:8080/addorder", {
        itemnumber,
        buyerid,
        sellerid,
        buyername,
        address,
        index,
        title,
        name,
      })
      .then((res) => {
        console.log("inserted", res);
        window.location.reload(false);
      });
  };

  useEffect(() => {
    setTimeout(() => setSuccess(false), 3000);
  }, [success]);

  return (
    <MKBox
      width="100%"
      position="relative"
      borderRadius="xl"
      shadow="lg"
      mb={12}
      sx={{ overflow: "hidden" }}
      {...rest}
    >
      <MKBox
        px={3}
        sx={{
          borderBottom: ({ borders: { borderWidth, borderColor } }) =>
            `${borderWidth[1]} solid ${borderColor}`,
        }}
      >
        <Grid container spacing={2} justifyContent="space-between" py={1}>
          <Grid item xs={12} lg={3}>
            <MKTypography variant="body1" pt={0.5}>
              {title}
            </MKTypography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleTabType}>
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-desktop"
                    />
                  }
                  label="Preview"
                />
                <Tab
                  icon={
                    <MKBox
                      component="i"
                      color="dark"
                      mr={1.25}
                      sx={{ fontSize: ({ typography: { size } }) => size.sm }}
                      className="fas fa-code"
                    />
                  }
                  label="Buy Now"
                />
              </Tabs>
            </AppBar>
          </Grid>
        </Grid>
      </MKBox>
      <MKBox display={activeTab === 0 ? "block" : "none"}>
        <MKBox width="100%" p={3}>
          <MKBox
            bgColor="grey-100"
            width="100%"
            height={height}
            maxHeight="40rem"
            borderRadius="xl"
            sx={{ overflowX: "hidden", overflowY: "scroll" }}
          >
            {children}
          </MKBox>
        </MKBox>
      </MKBox>
      <MKBox display={activeTab === 1 ? "block" : "none"} p={3}>
        <MKBox
          bgColor="grey-200"
          position="relative"
          width="100%"
          borderRadius="xl"
          padding="3%"
          sx={{ overflow: "hidden" }}
        >
          <TextField
            id="filled-helperText"
            label="Name"
            defaultValue="Default Value"
            helperText="Enter your full name"
            variant="filled"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </MKBox>
        <MKBox
          bgColor="grey-200"
          position="relative"
          width="100%"
          borderRadius="xl"
          paddingLeft="3%"
          sx={{ overflow: "hidden" }}
        >
          <TextField
            id="filled-helperText"
            label="Address"
            defaultValue="Default Value"
            helperText="Enter your full address"
            variant="filled"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </MKBox>
        <MKBox
          bgColor="grey-200"
          position="relative"
          width="100%"
          borderRadius="xl"
          paddingLeft="40%"
          paddingTop="5%"
          sx={{ overflow: "hidden" }}
        >
          <Button
            variant="contained"
            onClick={() => {
              AddOrder();
            }}
          >
            Submit
          </Button>
        </MKBox>
      </MKBox>
    </MKBox>
  );
}

// Setting default props for the View
View.defaultProps = {
  height: "auto",
};

// Typechecking props for the View
View.propTypes = {
  children: PropTypes.node.isRequired,
  code: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  index: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default View;
