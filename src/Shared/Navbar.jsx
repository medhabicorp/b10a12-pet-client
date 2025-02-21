import React, { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { Navbar as MTUINavbar } from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { IoMoon, IoSunny } from "react-icons/io5";
import logo from "../assets/logo/logo circle.png";
import menuIcon from "../assets/logo/menuIcon.png";

const Navbar = () => {
  const [navbarToggle, setNavbarToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );
  const { user, userLogout } = useAuth();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const darkModeHandler = () => setDarkMode(!darkMode);

  return (
    <div
      className={`w-full sticky top-0 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#0b4b2c] text-white"
      }`}
    >
      <MTUINavbar
        className={`rounded-none border-none w-11/12 mx-auto px-0 py-4 shadow-none font-bold ${
          darkMode ? "bg-gray-900 text-white" : "bg-[#0b4b2c] text-white"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* icon button */}
            <IconButton
              variant="text"
              className="lg:hidden"
              onClick={() => setNavbarToggle(!navbarToggle)}
            >
              <img
                src={menuIcon}
                alt="Menu Icon"
                className="h-6 w-6 cursor-pointer"
              />
            </IconButton>

            {/* dark/light mode */}
            <button
              onClick={darkModeHandler}
              className="p-2 rounded-full cursor-pointer"
            >
              {darkMode ? (
                <IoSunny className="text-white text-xl" />
              ) : (
                <IoMoon className="text-black text-xl" />
              )}
            </button>

            {/* logo/title */}
            <Typography
              as="a"
              variant="h6"
              className="flex flex-col md:flex-row items-center md:gap-2"
            >
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full" />
              <span className="text-lg lg:text-2xl">POWTOPIA</span>
            </Typography>
          </div>

          {/* menu/button */}
          <div className="hidden lg:flex items-center space-x-6 font-bold">
            <NavLink to="/">
              <Typography className="cursor-pointer text-md font-bold">
                Home
              </Typography>
            </NavLink>
            <NavLink to="/petListing">
              <Typography className="cursor-pointer text-md font-bold">
                Pet Listing
              </Typography>
            </NavLink>
            <NavLink to="/donationCampaigns">
              <Typography className="cursor-pointer text-md font-bold">
                Donation
              </Typography>
            </NavLink>
            {user && (
              <>
                <NavLink to="/about">
                  <Typography className="cursor-pointer text-md font-bold">
                    About
                  </Typography>
                </NavLink>
                <NavLink to="/contact">
                  <Typography className="cursor-pointer text-md font-bold">
                    Contact
                  </Typography>
                </NavLink>
              </>
            )}
          </div>

          <div className="flex items-center gap-4">
            {user ? (
              <Menu>
                <MenuHandler>
                  <Avatar
                    src={user?.photoURL || "https://via.placeholder.com/40"}
                    className="cursor-pointer"
                  />
                </MenuHandler>
                <MenuList>
                  <Link to="/dashboard">
                    <MenuItem>Dashboard</MenuItem>
                  </Link>
                  <MenuItem onClick={userLogout} className="text-red-500">
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Link to="/login">
                  <Button className="bg-primary border-2 border-white rounded-l-full rounded-r-full cursor-pointer">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-primary rounded-l-full rounded-r-full border-2 border-white cursor-pointer ">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <Collapse open={navbarToggle}>
          <div className="flex flex-col items-start gap-2 mt-4 font-bold">
            <NavLink to="/">
              <Typography className="cursor-pointer">Home</Typography>
            </NavLink>
            <NavLink to="/petListing">
              <Typography className="cursor-pointer">Pet Listing</Typography>
            </NavLink>
            <NavLink to="/donationCampaign">
              <Typography className="cursor-pointer">Donation </Typography>
            </NavLink>
          </div>
        </Collapse>
      </MTUINavbar>
    </div>
  );
};

export default Navbar;
