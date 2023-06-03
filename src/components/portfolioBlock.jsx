import { useNavigate } from "react-router-dom";
import FlexCenter from "./flexCenter";
import { Typography } from "@mui/material";

import TrackVisibility from "react-on-screen";
import "./portfolioBlockComponent.css";
import "animate.css";

// const PortfolioBlock = styled(Box)({
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',

//     width:'100%',
//     height:'20%',

export const PortfolioBlock = ({ image, text, navigateUrl }) => {
    const navigate = useNavigate();
    return (
        <TrackVisibility once>
            {({ isVisible }) => (
                <div
                    className={
                        isVisible
                            ? "PortfolioIsVisible"
                            : "PortfolioIsNotVisible"
                    }
                >
                    <FlexCenter
                        onClick={() => navigate(navigateUrl)}
                        sx={{
                            backgroundImage: `url(${image})`,
                            width: "100%",
                            height: "50vh",
                            overflow: "hidden",

                            backgroundSize: "cover",
                            backgroundPosition: "center",

                            padding: 10,

                            filter: "brightness(50%)",
                            transition: "filter .3s ease-in",

                            "&:hover": {
                                filter: "brightness(100%)",
                                cursor: "pointer",
                            },
                        }}
                    >
                        <Typography variant="h2" color="white">
                            {text}
                        </Typography>
                    </FlexCenter>
                </div>
            )}
        </TrackVisibility>
    );
};

export default PortfolioBlock;
