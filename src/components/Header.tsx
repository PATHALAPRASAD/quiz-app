import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ADMIN } from "../constants/constants";
import { logoutAction } from "../store/quizSlice";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // State for User Profile Dropdown
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // const isLoggedIn = useSelector((state: any) => state.LoginReducer.isLoggedIn);
  const isLoggedIn = useSelector((state: any) => state.quiz.isLoggedIn);
  // const role = useSelector((state: any) => state.LoginReducer.role);
  const role = useSelector((state: any) => state.quiz.role);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    handleCloseUserMenu();
    dispatch(logoutAction(false));
    navigate("/login");
  };

  const handleLogin = () => {
    handleCloseUserMenu();
    navigate("/login");
  };

  const handleClickMenuIcon = () => {
    if (isLoggedIn) {
      if (role === ADMIN) {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } else {
      navigate("/login");
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon onClick={handleClickMenuIcon} />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Quiz App
        </Typography>

        {/* RIGHT SIDE: Navigation and Profile */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {/* Navigation Links */}
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
            onClick={() => navigate("/about")}
          >
            About
          </Button>
          <Button
            color="inherit"
            sx={{ display: { xs: "none", md: "block" } }}
            onClick={() => navigate("/help")}
          >
            Help
          </Button>

          {/* User Profile Avatar */}
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="User Name" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>

          <Menu
            sx={{ mt: "45px" }}
            anchorEl={anchorElUser}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem
              onClick={() => {
                navigate("/profile");
                handleCloseUserMenu();
              }}
            >
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                navigate("/account");
                handleCloseUserMenu();
              }}
            >
              Account
            </MenuItem>
            {isLoggedIn ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              <MenuItem onClick={handleLogin}>Login</MenuItem>
            )}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
