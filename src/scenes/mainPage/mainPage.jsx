import { Box, useTheme, Typography, IconButton } from "@mui/material";
import React from "react";

import FlexCenter from "./../../components/flexCenter";
import Navbar from "../navbar/navbar.jsx";
import FlexAround from "../../components/flexAround";

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import FlexComponent from "./../../components/flexComponent";
import PortfolioBlock from "../../components/portfolioBlock";

import Nature_Img from "../../assets/img/natue.jpg";
import Arch1_Img from "../../assets/img/arch1.jpg";
import Nat2_Img from "../../assets/img/nat2.jpg";
import Hero_Img from "../../assets/img/DSC_3774.jpg";


export const Hero = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;
    return (
        <FlexCenter
            sx={{
                backgroundImage: `url(${Hero_Img})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Typography variant="h1" color="white">
                Hello there
            </Typography>
        </FlexCenter>
    );
};

export const About = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;
    return (
        <FlexCenter sx={{ height: "100vh" }}>
            <FlexAround flexDirection="column">
                <Typography align="center" variant="h1">
                    Hello, Im Vlad and Im profesional photographer
                </Typography>
                <Typography align="center">
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                    lorem ipsum
                </Typography>
                <FlexAround justifyContent="space-around" flexDirection="">
                    {/* <IconButton aria-label="social" onClick={h}>
                      
                    </IconButton> */}
                    <IconButton color={white} href="" aria-label="social">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color={white} href="" aria-label="social">
                        <TelegramIcon />
                    </IconButton>
                    <IconButton color={white} href="" aria-label="social">
                        <EmailIcon />
                    </IconButton>
                </FlexAround>
            </FlexAround>
        </FlexCenter>
    );
};

const MainPage = () => {
    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    return (
        <Box backgroundColor={black} sx={{}}>
            <Navbar />
            {/*Hero*/}
            <FlexCenter
                sx={{
                    backgroundImage: `url(${Hero_Img})`,
                    width: "100vw",
                    height: "100vh",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <Typography variant="h1" color="wh  ite">
                    Hello there
                </Typography>
            </FlexCenter>

            {/*about*/}

            <FlexCenter sx={{ height: "100vh" }} padding='0 20 0 20'>
                <FlexAround width='100%' flexDirection="column" justifyContent='space-around' gap={10}>
                    <Typography align="center" variant="h1" >
                        Hello, Im Vlad<br/> and Im profesional<br/> photographer
                    </Typography>
                    <Typography align="center">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem<br/> ipsum lorem ipsum lorem ipsum lorem ipsum
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem<br/>
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum<br/>
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Typography>
                    <FlexComponent justifyContent="center" gap={5}>
                        <IconButton color={white}  href="" aria-label="social">
                            <InstagramIcon sx={{fontSize:'70px'}} />
                        </IconButton>
                        <IconButton color={white} href="" aria-label="social">
                            <TelegramIcon sx={{fontSize:'70px'}}/>
                        </IconButton>
                        <IconButton color={white} href="" aria-label="social">
                            <EmailIcon sx={{fontSize:'70px'}}/>
                        </IconButton>
                    </FlexComponent>
                </FlexAround>
            </FlexCenter>

            {/*portfolio*/}

            <FlexComponent flexDirection="column">
                <PortfolioBlock
                    text="NATURE"
                    image={Nature_Img}
                    navigateUrl="/nature"
                />
                 <PortfolioBlock
                    text="ARCHITECTURE"
                    image={Arch1_Img}
                    navigateUrl="/nature"
                />
                 <PortfolioBlock
                    sx={{backgroundPosition: "bottom"}}
                    text="AMFITHEATER"
                    image={Nat2_Img}
                    navigateUrl="/nature"
                />
                 <PortfolioBlock
                    text="NATURE"
                    image={Nature_Img}
                    navigateUrl="/nature"
                />
            </FlexComponent>


            {/*WhyMe*/}

        </Box>
    );
};

export default MainPage;
