import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Navbar from "./scenes/navbar/navbar.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./scenes/mainPage/mainPage.jsx";
import NaturePage from "./scenes/naturePage/naturePage.jsx";
import { themeSettings } from "./theme.js";




function App() {
    const theme = createTheme(themeSettings('dark'));
    return (
        <Box className="App">
            <Navbar />
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                  <CssBaseline/>
                    <Routes>
                        <Route path="/main" element={<MainPage />} />
                        <Route path="/nature" element={<NaturePage />} />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </Box>
    );
}

export default App;
