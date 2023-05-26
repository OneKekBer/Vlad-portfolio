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

import arch1 from "../../assets/img/arch1.jpg";
import arch2 from "../../assets/img/arch2.jpg";
import arch3 from "../../assets/img/arch3.jpg";
// import arch4 from "../../assets/img/arch4.jpg";
// import arch6 from "../../assets/img/arch6.jpg";
import { ImageListItemComponent } from "./../../components/imageListItemComponent.jsx";

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

                    
                </ImageList>
            </FlexCenter>
        </Box>
    );
};

export default ArchiPage;
