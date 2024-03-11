import { useState } from "react";
import { NavLink } from "react-router-dom";
import {AppBar,Box,Typography,Button,InputBase,IconButton,Menu,MenuItem,} from "@mui/material";
import { Toolbar } from "@mui/material";
import { Search } from "@mui/icons-material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NavBar() {
  const [animeAnchorEl, setAnimeAnchorEl] = useState(null);
  const [forumAnchorEl, setForumAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleAnimeClick = (event) => {
    setAnimeAnchorEl(event.currentTarget);
  };

  const handleForumClick = (event) => {
    setForumAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnimeAnchorEl(null);
    setForumAnchorEl(null);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ background: "#991E00", display: "flex", flexDirection: "row" }}
      >
        <Toolbar style={{ width: "90%" }}>
          <Button color="inherit" component={NavLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login">
            Login
          </Button>
          <Button color="inherit" component={NavLink} to="/SignUp">
            Sign Up
          </Button>
          <Button color="inherit" component={NavLink} to="/profile">
            Profile
          </Button>
          <Button
            color="inherit"
            aria-controls="anime-menu"
            aria-haspopup="true"
            onClick={handleAnimeClick}
          >
            Anime List
          </Button>
          <Menu
            id="anime-menu"
            anchorEl={animeAnchorEl}
            keepMounted
            open={Boolean(animeAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={NavLink} to="/anime">
              Top Picks For You
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/anime/comedy"
            >
              Most Popular
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/anime/romance"
            >
              Staff Favorites
            </MenuItem>
          </Menu>
          <Button
            color="inherit"
            aria-controls="forum-menu"
            aria-haspopup="true"
            onClick={handleForumClick}
          >
            Forum
          </Button>
          <Menu
            id="forum-menu"
            anchorEl={forumAnchorEl}
            keepMounted
            open={Boolean(forumAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={NavLink} to="/forum">
              General
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/forum/questions"
            >
              Questions
            </MenuItem>
            <MenuItem
              onClick={handleClose}
              component={NavLink}
              to="/forum/suggestions"
            >
              Suggestions
            </MenuItem>
          </Menu>
        </Toolbar>
        <Toolbar>
          <div
            style={{
              position: "relative",
              borderRadius: "2px",
              backgroundColor: "#f2f2f2",
              marginLeft: 0,
              width: "300px",
            }}
          >
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              style={{ paddingLeft: "10px" }}
            />
          </div>
          <Button color="inherit" onClick={handleOpenModal}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Are you sure you want to logout?</h2>
          <p id="parent-modal-description"></p>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            onClick={handleCloseModal}
          >
            Logout
          </Button>

          <Button onClick={handleCloseModal}>Cancel</Button>
        </Box>
      </Modal>
    </Box>
  );
}


