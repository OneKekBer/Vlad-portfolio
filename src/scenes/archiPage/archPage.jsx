import React from "react";
import Navbar from "./../navbar/navbar.jsx";

import "./archPage.css";

import {
    Box,
    useTheme,
    Typography,
    useMediaQuery,
    ImageList,
    ImageListItem,
} from "@mui/material";
import FlexCenter from "../../components/flexCenter";

import arch1 from "../../assets/img/arch1.jpg";
import arch2 from "../../assets/img/arch2.jpg";
import arch3 from "../../assets/img/arch3.jpg";
// import arch4 from "../../assets/img/arch4.jpg";
// import arch6 from "../../assets/img/arch6.jpg";
import { ImageListItemComponent } from "./../../components/imageListItemComponent.jsx";

import TrackVisibility from "react-on-screen";

import "animate.css";
import Footer from "../footer/footer.jsx";

export const ArchiPage = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    const isNonMobileScreen = useMediaQuery("(min-width:700px)");
    return (
        <Box>
            <Navbar />
            <FlexCenter>
                <ImageList cols={3} rows={2} gap={20}>
                    <ImageListItemComponent
                        img_url={arch1}
                        cols={3}
                        text={"explore architecture"}
                    />
                    <ImageListItemComponent img_url={arch3} cols={3} rows={2} />
                    <ImageListItemComponent img_url={arch2} cols={3} rows={5} />

                    <ImageListItem cols={3} rows={2}>
                        <TrackVisibility once >
                            {({ isVisible }) => 
                                <div
                                    className={
                                        isVisible
                                            ? "discIsVisible"
                                            : "discIsNotVisible"
                                    }
                                >
                                    <Typography
                                        align="center"
                                        variant="h3"
                                        color={white}
                                        padding={isNonMobileScreen ? 20 : 0}
                                    >
                                        Мои фотографии архитектуры призваны
                                        перенести вас в мир, где прошлое
                                        переплетается с настоящим, где эстетика
                                        и величие сливаются воедино. Позвольте
                                        себе погрузиться в эту атмосферу
                                        таинственности и увидеть архитектуру в
                                        новом свете, открывая для себя красоту в
                                        самых неожиданных и обычных местах.
                                    </Typography>
                                </div>
                            }
                        </TrackVisibility>
                    </ImageListItem>
                </ImageList>
            </FlexCenter>
            <Footer/>
        </Box>
    );
};

export default ArchiPage;
