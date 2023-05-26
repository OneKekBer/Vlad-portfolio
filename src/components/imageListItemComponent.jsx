import { ImageListItem, Typography, useMediaQuery } from "@mui/material";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
};
const AnimBox = ({ text }) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
        >
            <h1> </h1>
        </motion.div>
    );
};

export const ImageListItemComponent = ({
    img_url,
    cols,
    rows = 1,
    text = "",
}) => {
    const isNonMobileScreen = useMediaQuery("(min-width:700px)");
    return (
        <ImageListItem
            position="relative"
            cols={isNonMobileScreen ? cols : 3}
            rows={rows}
        >
            
            <img src={img_url} alt="photo" />
            <Typography
                align="center"
                sx={{
                    position: "absolute",
                    top: "30%",
                    right: "20%",
                    left: "20%",
                    zIndex: 10,
                    opacity: 0.7,
                    paddingBottom: "10px",
                    borderBottom: text.length > 0 ? "2px solid white" : " ",
                }}
                variant="h1"
            >
                {text}
            </Typography>
            {/* <ImageListItemBar title={text} /> */}
        </ImageListItem>
    );
};
export default ImageListItemComponent;
