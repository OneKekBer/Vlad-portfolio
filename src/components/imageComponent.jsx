
import Box from '@mui/material/Box';

export const ImageComponent = ({img_url}) => (
    <Box
        sx={{
            backgroundImage: `url(${img_url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width:'100%',
            height:'50%'
        }}
    >da</Box>
    // <Box>
    //     <img src={img_url} alt=''/>
    // </Box>
);

export default ImageComponent;
