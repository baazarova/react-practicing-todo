import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor:"plum"}} variant="dense">
        
          <Typography variant="h6" color="inherit" component="div">
            React Task App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
