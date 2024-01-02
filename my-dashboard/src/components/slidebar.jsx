import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import HelpIcon from "@mui/icons-material/Help";

function Slidebar() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemIcon>
              <RestaurantIcon />
            </ListItemIcon>
            <ListItemText primary="Owner of the Restaurant" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <AccountBalanceWalletIcon />
            </ListItemIcon>
            <ListItemText primary="Transaction" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="FAQs" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default Slidebar;
