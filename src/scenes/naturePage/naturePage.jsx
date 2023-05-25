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

import nat2 from "../../assets/img/nat2.jpg";
import nat3 from "../../assets/img/nat3.jpg";
import nat4 from "../../assets/img/nat4.jpg";
import nat5 from "../../assets/img/nat5.jpg";
import nat6 from "../../assets/img/nat6.jpg";
import { ImageListItemComponent } from "./../../components/imageListItemComponent.jsx";

export const NaturePage = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    const isNonMobileScreen = useMediaQuery("(min-width:700px)");
    return (
        <Box>
            <Navbar />
            <FlexCenter padding={isNonMobileScreen ? 3 : 0}>
                <ImageList cols={3} gap={20}>
                    <ImageListItemComponent
                        img_url={nat2}
                        cols={3}
                        text={"explore nature"}
                    />
                    <ImageListItemComponent img_url={nat3} cols={2} rows={2} />
                    <ImageListItemComponent img_url={nat4} cols={1} rows={1} />

                    <ImageListItemComponent img_url={nat5} cols={1} rows={1} />
                    <ImageListItem cols={3} rows={2}>
                        <Typography
                            align="center"
                            variant="h3"
                            color={white}
                            padding={isNonMobileScreen ? 20 : 0}
                        >
                            Представьте себе великолепие природы, запечатленное
                            в моих фотографиях. Я как фотограф стремлюсь не
                            только передать красоту окружающего мира, но и
                            заставить вас почувствовать величие природы внутри
                            себя.
                        </Typography>
                    </ImageListItem>

                    <ImageListItemComponent img_url={nat6} cols={1} rows={1} />
                    <ImageListItemComponent img_url={nat2} cols={2} rows={1} />
                </ImageList>
            </FlexCenter>
        </Box>
    );
};

export default NaturePage;
