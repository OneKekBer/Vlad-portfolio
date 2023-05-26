import { ImageListItem, Typography, useMediaQuery } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import FlexCenter from "./flexCenter";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

export const SwiperSlideComponent = ({ img_url }) => {
    const isNonMobileScreen = useMediaQuery("(min-width:700px)");
    return (
        <FlexCenter
            sx={{
                backgroundImage: `url(${img_url})`,
                width: "100vw",
                height: "100vh",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        ></FlexCenter>
    );
};
export default SwiperSlideComponent;
