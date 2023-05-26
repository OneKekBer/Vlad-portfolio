import {
    Box,
    useTheme,
    Typography,
    IconButton,
    useMediaQuery,
} from "@mui/material";
import React from "react";

import FlexCenter from "./../../components/flexCenter";
import Navbar from "../navbar/navbar.jsx";
import FlexAround from "../../components/flexAround";

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import EmailIcon from "@mui/icons-material/Email";
import PaletteIcon from "@mui/icons-material/Palette";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

import FlexComponent from "./../../components/flexComponent";
import PortfolioBlock from "../../components/portfolioBlock";

import Nature_Img from "../../assets/img/natue.jpg";
import Arch1_Img from "../../assets/img/arch1.jpg";
import Nat2_Img from "../../assets/img/nat2.jpg";
import Hero_Img from "../../assets/img/DSC_3774.jpg";
import Footer from "../footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination,EffectFade, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/effect-fade';

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
                <FlexAround justifyContent="space-around">
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

    const isNonMobileScreen = useMediaQuery("(min-width:700px)");

    return (
        <Box backgroundColor={black} sx={{}}>
            <Navbar />
            {/*Hero*/}
            <Swiper
                sx={{ position: "relative" }}
                spaceBetween={50}
                loop
                slidesPerView={1}
                effect="fade"
                autoplay={{
                    delay: 3500,
                    
                }}
                
                modules={[Autoplay,EffectFade]}
            >
                <SwiperSlide sx={{ width: "100vw", height: "100vh" }}>
                    <FlexCenter
                        sx={{
                            backgroundImage: `url(${Nat2_Img})`,
                            width: "100vw",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></FlexCenter>
                </SwiperSlide>

                <SwiperSlide sx={{ width: "100vw", height: "100vh" }}>
                    <FlexCenter
                        sx={{
                            backgroundImage: `url(${Arch1_Img})`,
                            width: "100vw",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    >
                        {/* <Typography variant="h1" sx={{opacity:0.7}} color="white">
                    ЙОУ СОБАКИ
                </Typography> */}
                    </FlexCenter>
                </SwiperSlide>

                <SwiperSlide sx={{ width: "100vw", height: "100vh" }}>
                    <FlexCenter
                        sx={{
                            backgroundImage: `url(${Hero_Img})`,
                            width: "100vw",
                            height: "100vh",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                    ></FlexCenter>
                </SwiperSlide>
                <Typography
                    variant="h1"
                    align="center"
                    sx={{
                        opacity: 0.7,
                        position: "absolute",
                        
                        textAlign:'center',
                        left: "30%",
                        right:'30%',
                        top: "40%",

                        zIndex: 10,
                    }}
                    color="white"
                >
                    ЙОУ СОБАКИ
                </Typography>
            </Swiper>

            {/*about*/}

            <FlexCenter sx={{ height: isNonMobileScreen ? "110vh" : "" }}>
                <FlexAround
                    width="100%"
                    flexDirection="column"
                    justifyContent="space-around"
                    gap={10}
                >
                    <Typography align="center" mt={10} variant="h1">
                        Привет, я Влад
                        <br /> и я проффесиональный
                        <br /> фотограф
                    </Typography>
                    <Typography align="center" variant="text">
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem
                        <br /> ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        <br />
                        ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                        <br />
                        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
                        ipsum lorem ipsum lorem ipsum lorem ipsum
                    </Typography>
                    <FlexComponent
                        justifyContent="center"
                        flexDirection={isNonMobileScreen ? "row" : "column"}
                        gap={1}
                    >
                        <IconButton color={white} href="" aria-label="social">
                            <InstagramIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "70px"
                                        : "50px",
                                }}
                            />
                        </IconButton>
                        <IconButton color={white} href="" aria-label="social">
                            <TelegramIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "70px"
                                        : "50px",
                                }}
                            />
                        </IconButton>
                        <IconButton color={white} href="" aria-label="social">
                            <EmailIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "70px"
                                        : "50px",
                                }}
                            />
                        </IconButton>
                        <IconButton color={white} href="" aria-label="social">
                            <MusicNoteIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "70px"
                                        : "50px",
                                }}
                            />
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
                    sx={{ backgroundPosition: "bottom" }}
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
            <FlexCenter sx={{ height: "100vh" }} padding="0 20 0 20">
                <FlexAround
                    width="100%"
                    flexDirection="column"
                    justifyContent="space-around"
                    gap={20}
                >
                    <Typography align="center" variant="h1">
                        Почему вы должны
                        <br /> выбрать меня?
                    </Typography>
                    <FlexAround
                        flexDirection={isNonMobileScreen ? "row" : "column"}
                        gap={5}
                    >
                        <FlexCenter flexDirection="column">
                            <PaletteIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "90px"
                                        : "50px",
                                }}
                            />
                            <Typography align="center" variant="h3">
                                творческий подход
                            </Typography>
                        </FlexCenter>

                        <FlexCenter flexDirection="column">
                            <BorderColorIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "90px"
                                        : "50px",
                                }}
                            />
                            <Typography align="center" variant="h3">
                                владение <br />
                                редакторами фото
                            </Typography>
                        </FlexCenter>

                        <FlexCenter flexDirection="column">
                            <TipsAndUpdatesIcon
                                sx={{
                                    fontSize: isNonMobileScreen
                                        ? "90px"
                                        : "50px",
                                }}
                            />
                            <Typography align="center" variant="h3">
                                большой опыт
                            </Typography>
                        </FlexCenter>
                    </FlexAround>
                </FlexAround>
            </FlexCenter>
            <Footer />
        </Box>
    );
};

export default MainPage;
