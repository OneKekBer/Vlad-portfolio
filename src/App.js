import { Box, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MainPage from "./scenes/mainPage/mainPage.jsx";
import NaturePage from "./scenes/naturePage/naturePage.jsx";
import { themeSettings } from "./theme.js";
import ArchiPage from "./scenes/archiPage/archPage.jsx";


function App() {
    const theme = createTheme(themeSettings("dark"));
    
    return (
        <Box className="App">
            

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path="/main" element={<MainPage />} />
                    <Route path="/"  element={<MainPage />} /> {/*костыль ебаный надо будет как нибудь сделать редирект и начинать м /main */}
                    <Route path="/nature" element={<NaturePage />} />
                    <Route path="/architecture" element={<ArchiPage />} />
                </Routes>
            </ThemeProvider>
        </Box>
    );
}

export default App;
