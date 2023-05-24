
import { useNavigate } from "react-router-dom";
import FlexCenter from "./flexCenter";
import { Typography } from "@mui/material";

const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

// const PortfolioBlock = styled(Box)({
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'center',

//     width:'100%',
//     height:'20%',

export const PortfolioBlock = ({image, text, navigateUrl}) => {
    const navigate = useNavigate()
    return (
        <FlexCenter
            onClick={()=>navigate(navigateUrl)}
            sx={{
                backgroundImage: `url(${image})`,
                width: "100%",
                height: "25%",
                overflow:'hidden',

                backgroundSize: "cover",
                backgroundPosition: "center",

                padding:10,

                filter: "brightness(50%)",
                transition: "filter .3s ease-in",
                
                "&:hover": {
                    filter: "brightness(100%)",
                    cursor:'pointer',
                    
                },

            }}
        >
            
            <Typography variant="h1" color="white">
                {text}
            </Typography>
        </FlexCenter>
    );
};

export default PortfolioBlock;
