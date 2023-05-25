import {
    ImageListItem,
    Typography,
    
    useMediaQuery,
} from "@mui/material";

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
            <img
                src={img_url} alt='photo'
            />
            <Typography
                align="center"
                sx={{
                    position: "absolute",
                    top: "30%",
                    right: "20%",
                    left: "20%",
                    zIndex: 10,
                    opacity: 0.7,
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
