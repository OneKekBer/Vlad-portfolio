import {
    Box,
    useTheme,
    Typography,
    IconButton,
    useMediaQuery,
    Tooltip,
} from "@mui/material";
import React from "react";

import "./mainPage.css";

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
import nat10 from "../../assets/img/nat10.jpg";

import nat8 from "../../assets/img/nat8.jpg";
import nat9 from "../../assets/img/nat9.jpg";

import Footer from "../footer/footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import SwiperSlideComponent from "../../components/swiperSlideComponent";

import TrackVisibility from "react-on-screen";

import "animate.css";

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
            <TrackVisibility once>
                {({ isVisible }) => (
                    <div
                        className={
                            isVisible
                                ? "animate__animated animate__fadeIn animate__slower"
                                : ""
                        }
                    >
                        <Swiper
                            sx={{ position: "relative" }}
                            spaceBetween={50}
                            loop
                            slidesPerView={1}
                            effect="fade"
                            autoplay={{
                                delay: 3000,
                            }}
                            modules={[Autoplay, EffectFade]}
                        >
                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={Nature_Img} />
                            </SwiperSlide>
                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={nat10} />
                            </SwiperSlide>

                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={Arch1_Img} />
                            </SwiperSlide>
                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={nat8} />
                            </SwiperSlide>
                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={Nat2_Img} />
                            </SwiperSlide>
                            <SwiperSlide
                                sx={{ width: "100vw", height: "100vh" }}
                            >
                                <SwiperSlideComponent img_url={nat9} />
                            </SwiperSlide>

                            {/* <Typography
                                variant="h1"
                                align="center"
                                sx={{
                                    opacity: 0.7,
                                    position: "absolute",

                                    textAlign: "center",
                                    left: "30%",
                                    right: "30%",
                                    top: "40%",

                                    zIndex: 10,
                                }}
                                color="white"
                            >
                                ЙОУ СОБАКИ
                            </Typography> */}
                        </Swiper>
                    </div>
                )}
            </TrackVisibility>

            {/*about*/}

            <TrackVisibility once>
                <FlexCenter sx={{ height: isNonMobileScreen ? "110vh" : "" }}>
                    <FlexAround
                        width="100%"
                        flexDirection="column"
                        justifyContent="space-around"
                        gap={5}
                    >
                        <Typography align="center" mt={10} variant="h1">
                            Привет, я Влад
                            <br />и я фотограф
                        </Typography>

                        <Typography
                            align="center"
                            padding={
                                isNonMobileScreen
                                    ? "0 150px 0 150px"
                                    : "0 0 0 0"
                            }
                            variant="text"
                        >
                            Каждая фотография, созданная мной, несет в себе моё
                            восхищение природой и старой архитектурой. Я
                            стремлюсь передать эмоции и заставить зрителя
                            задуматься, раскрывая новые грани красоты и загадки,
                            скрытые в темных тонах. Мои работы приглашают вас на
                            увлекательный исследовательский путь, где вы можете
                            открыть новые миры и ощутить вдохновение, которое
                            природа и архитектура могут подарить.
                        </Typography>
                        <FlexComponent
                            justifyContent="center"
                            flexDirection={isNonMobileScreen ? "row" : "column"}
                            gap={1}
                        >
                            <IconButton
                                color={white}
                                href="https://instagram.com/exxd.ed?igshid=OGQ5ZDc2ODk2ZA=="
                                aria-label="social"
                                target="_blank"
                            >
                                <InstagramIcon
                                    sx={{
                                        fontSize: isNonMobileScreen
                                            ? "70px"
                                            : "30px",
                                    }}
                                />
                            </IconButton>

                            <IconButton
                                color={white}
                                href="@jxxxxeddd"
                                aria-label="social"
                                target="_blank"
                            >
                                <TelegramIcon
                                    sx={{
                                        fontSize: isNonMobileScreen
                                            ? "70px"
                                            : "30px",
                                    }}
                                />
                            </IconButton>
                            <Tooltip title="hbtour12@gmail.com">
                                <IconButton
                                    color={white}
                                    href="mailto:hbtour12@gmail.com"
                                    aria-label="social"
                                    target="_blank"
                                >
                                    <EmailIcon
                                        sx={{
                                            fontSize: isNonMobileScreen
                                                ? "70px"
                                                : "30px",
                                        }}
                                    />
                                </IconButton>
                            </Tooltip>

                            <IconButton
                                color={white}
                                href="https://www.tiktok.com/@somejunkphotos?_t=8ckE7uAuPnZ&_r=1"
                                aria-label="social"
                                target="_blank"
                            >
                                <MusicNoteIcon
                                    sx={{
                                        fontSize: isNonMobileScreen
                                            ? "70px"
                                            : "30px",
                                    }}
                                />
                            </IconButton>
                        </FlexComponent>
                    </FlexAround>
                </FlexCenter>
            </TrackVisibility>

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
                    navigateUrl="/architecture"
                />
                <PortfolioBlock
                    sx={{ backgroundPosition: "bottom" }}
                    text="LAGOON"
                    image={nat8}
                    navigateUrl="/lagoon"
                />
                {/* <PortfolioBlock
                    text="NATURE"
                    image={Nature_Img}
                    // navigateUrl="/nature"
                /> */}
            </FlexComponent>

            {/*WhyMe*/}
            <FlexCenter sx={{ height: "100vh" }} padding="0 20 0 20">
                <TrackVisibility once>
                    {({ isVisible }) => (
                        <FlexAround
                            width="100%"
                            flexDirection="column"
                            justifyContent="space-around"
                            gap={10}
                        >
                            <div
                                className={
                                    // isVisible ? "textVisible" : "textNotVisible"
                                    isVisible
                                        ? "animate__animated animate__pulse animate__slow"
                                        : " "
                                }
                            >
                                <Typography align="center" variant="h1">
                                    Почему вы должны
                                    <br /> выбрать меня?
                                </Typography>
                            </div>
                            <FlexAround
                                flexDirection={
                                    isNonMobileScreen ? "row" : "column"
                                }
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
                    )}
                </TrackVisibility>
            </FlexCenter>
            <Footer />
        </Box>
    );
};

export default MainPage;
