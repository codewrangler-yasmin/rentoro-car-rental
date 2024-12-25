import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import Register from "./Register";
import Login from "./Login";

const TabAuthentication = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="container mx-auto pt-20">
      <Box className="min-h-screen flex items-start justify-center bg-gray-100">
        <Box className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="fullWidth"
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab
              label="Login"
              sx={{
                fontSize: "16px", // Adjust the font size here
                borderBottom: selectedTab === 0 ? "none" : "2px solid #d3d3d3",
              }}
            />
            <Tab
              label="Register"
              sx={{
                fontSize: "16px", // Adjust the font size here
                borderBottom: selectedTab === 1 ? "none" : "2px solid #d3d3d3",
              }}
            />
          </Tabs>
          <Box>
            {selectedTab === 0 && <Login />}
            {selectedTab === 1 && <Register />}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default TabAuthentication;
