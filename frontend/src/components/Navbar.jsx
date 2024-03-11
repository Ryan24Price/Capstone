import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Typography, Button, InputBase, IconButton, Menu, MenuItem } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function NavBar() {
  const [animeAnchorEl, setAnimeAnchorEl] = useState(null);
  const [forumAnchorEl, setForumAnchorEl] = useState(null);

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

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ background: "#991E00", display:"flex", flexDirection:"row"}}>
        <Toolbar style={{width: "90%" }}>
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
          <Button color="inherit" aria-controls="anime-menu" aria-haspopup="true" onClick={handleAnimeClick}>
            Anime List
          </Button>
          <Menu
            id="anime-menu"
            anchorEl={animeAnchorEl}
            keepMounted
            open={Boolean(animeAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={NavLink} to="/anime">Top Picks For You</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/anime/comedy">Most Popular</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/anime/romance">Staff Favorites</MenuItem>
          </Menu>
          <Button color="inherit" aria-controls="forum-menu" aria-haspopup="true" onClick={handleForumClick}>
            Forum
          </Button>
          <Menu
            id="forum-menu"
            anchorEl={forumAnchorEl}
            keepMounted
            open={Boolean(forumAnchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={NavLink} to="/forum">General</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/forum/questions">Questions</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/forum/suggestions">Suggestions</MenuItem>
          </Menu>
        </Toolbar>
        <Toolbar>
          <div style={{ position: 'relative', borderRadius: '2px', backgroundColor: '#f2f2f2', marginLeft: 0, width: '300px' }}>
            <IconButton type="submit" aria-label="search">
              <Search />
            </IconButton>
            <InputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{ paddingLeft: '10px' }}
            />
          </div>
          <Button color="inherit" component={NavLink} to="/">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

