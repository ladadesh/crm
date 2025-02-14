import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true); // State for sidebar toggle
  const location = useLocation();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Customers", icon: <PeopleIcon />, path: "/customers" },
    { text: "Tasks", icon: <PlaylistAddIcon />, path: "/tasks" },
    {
      text: "Notifications",
      icon: <NotificationsIcon />,
      path: "/notifications",
    },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60,
          boxSizing: "border-box",
          transition: "width 0.3s",
          backgroundColor: "#0A1F30", // Background applied to the whole drawer
          color: "#ffffff", // Optional: Text color for better contrast
        },
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: open ? "flex-end" : "center" }}
      >
        <IconButton onClick={() => setOpen(!open)}>
          <img
            src="https://ezycrm.webezy.co.uk/assets/img/logo/logo_dark.svg"
            alt="logo"
            width="180px"
            style={{ marginLeft: open ? 0 : "137px" }}
          />
        </IconButton>
      </Toolbar>

      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                backgroundColor:
                  location.pathname === item?.path ? "#123456" : "",
                justifyContent: open ? "initial" : "center",
                "&:hover": { backgroundColor: "#123456" }, // Optional hover effect
                marginLeft: open ? 0 : "30px",
              }}
            >
              <ListItemIcon sx={{ color: "#ffffff" }}>{item.icon}</ListItemIcon>
              {open && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Toolbar
        sx={{
          position: "fixed",
          bottom: "0",
          left: open ? "175px" : "-15px",
        }}
      >
        <IconButton onClick={() => setOpen(!open)}>
          {!open ? (
            <ArrowBackIosNewIcon
              sx={{
                color: "#ffffff",
              }}
            />
          ) : (
            <ArrowForwardIosIcon
              sx={{
                color: "#ffffff",
              }}
            />
          )}
        </IconButton>
      </Toolbar>
    </Drawer>
  );
};

export default Sidebar;
