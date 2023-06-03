import React from "react";
import Navbar from "./../navbar/navbar.jsx";

import {
    Box,
    useTheme,
    Typography,
    useMediaQuery,
    ImageList,
    ImageListItem,
} from "@mui/material";
import FlexCenter from "../../components/flexCenter";

import wat1 from "../../assets/img/wat1.jpg";
import wat2 from "../../assets/img/wat2.jpg";
import wat3 from "../../assets/img/wat3.jpg";
import wat4 from "../../assets/img/wat4.jpg";
import wat5 from "../../assets/img/wat5.jpg";
import wat6 from "../../assets/img/wat6.jpg";

import { ImageListItemComponent } from "./../../components/imageListItemComponent.jsx";

import TrackVisibility from "react-on-screen";

import "animate.css";
import Footer from "../footer/footer.jsx";

export const LagoonPage = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    const isNonMobileScreen = useMediaQuery("(min-width:700px)");
    return (
        <Box>
            <Navbar />
            <FlexCenter>
                <ImageList cols={3} rows={2} gap={30}>
                    <ImageListItemComponent
                        img_url={wat2}
                        cols={3}
                        text={"LAGOON"}
                    />
                    <ImageListItemComponent img_url={wat1} cols={2} rows={5} />
                    <ImageListItemComponent img_url={wat3} cols={1} rows={5} />

                    {/* <ImageListItem cols={3} rows={2}>
                        <TrackVisibility once>
                            {({ isVisible }) => (
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
                            )}
                        </TrackVisibility>
                    </ImageListItem> */}

                    <ImageListItemComponent img_url={wat6} cols={2} rows={5} />

                    <ImageListItemComponent img_url={wat5} cols={1} rows={5} />
                    <ImageListItemComponent img_url={wat4} cols={3} rows={5} />
                </ImageList>
            </FlexCenter>
            <Footer />
        </Box>
    );
};

export default LagoonPage;
