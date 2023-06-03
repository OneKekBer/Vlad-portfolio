import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MainPage from "./scenes/mainPage/mainPage.jsx";
import NaturePage from "./scenes/naturePage/naturePage.jsx";
import { themeSettings } from "./theme.js";
import ArchiPage from "./scenes/archiPage/archPage.jsx";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LagoonPage } from "./scenes/lagoonPage/lagoonPage.jsx";

function App() {
    const theme = createTheme(themeSettings("dark"));

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Box className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/" element={<MainPage />} />{" "}
                    {/*костыль ебаный надо будет как нибудь сделать редирект и начинать м /main */}
                    <Route path="/nature" element={<NaturePage />} />
                    <Route path="/architecture" element={<ArchiPage />} />
                    <Route path="/lagoon" element={<LagoonPage />} />
                </Routes>
            </ThemeProvider>
        </Box>
    );
}

export default App;
