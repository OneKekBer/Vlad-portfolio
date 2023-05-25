import FlexCenter from "./../../components/flexCenter";
import { useTheme } from '@mui/material';

export const Footer = () => {

    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    return <FlexCenter fontSize={10} color={grey} padding={5}>
        Made by IT BEREZOWSKI
        </FlexCenter>;
};

export default Footer;
