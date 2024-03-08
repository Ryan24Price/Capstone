import "./App.css";
import { Paper, Switch } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Navbar";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState(prefersDarkMode);

  const appTheme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setMode(!mode);
  };

  return (
    <ThemeProvider theme={appTheme}>
      <NavBar />
      <AppRoutes />
      <Paper elevation={0} sx={{ height: "100vh" }} square>
        <h5>Dark Mode</h5>

        <Switch
          checked={mode}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Paper>
    </ThemeProvider>
  );
}

export default App;