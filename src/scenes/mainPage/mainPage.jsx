import { Box, useTheme } from "@mui/material";
import React from "react";
import Hero_Img from "../../assets/img/DSC_3774.jpg";

export const Hero = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url(${Hero_Img})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        ></Box>
    );
};

const MainPage = () => {
    const theme = useTheme();

    return (
        <Box backgroundColor={theme.palette.primary.black} sx={{}}>
            <Hero />
            <Hero />
            <Hero />
        </Box>
    );
};

export default MainPage;
