import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useTheme,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import FlexCenter from "./../../components/flexCenter";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
    drawer: {
        width: "100%",
        height: "100%",
    },
    drawerPaper: {
        width: "100%",
        height: "100%",
    },
});

const Navbar = () => {
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const navigate = useNavigate();

    const theme = useTheme();
    const black = theme.palette.primary.black;
    const white = theme.palette.primary.white;
    const grey = theme.palette.primary.grey;

    const classes = useStyles();

    return (
        <Box>
            {isMenuToggle ? (
                <CloseIcon
                    sx={{
                        fontSize: 50,
                        color: white,
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        zIndex: "100000",
                        "&:hover": {
                            cursor: "pointer",
                            color: grey,
                            transition: "all .1s ease-in-out",
                        },
                    }}
                    onClick={() => {
                        setIsMenuToggle(!isMenuToggle);
                    }}
                />
            ) : (
                <MenuIcon
                    sx={{
                        fontSize: 50,
                        color: white,
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        zIndex: "100000",
                        "&:hover": {
                            cursor: "pointer",
                            color: grey,
                            transition: "all .1s ease-in-out",
                        },
                    }}
                    onClick={() => {
                        setIsMenuToggle(!isMenuToggle);
                    }}
                />
            )}

            <Drawer
                open={isMenuToggle}
                onClose={() => {
                    setIsMenuToggle(!isMenuToggle);
                }}
                classes={{
                    paper: classes.drawerPaper,
                }}
                className={classes.drawer}
                variant="temporary"
                anchor="left"
            >
                <FlexCenter
                    sx={{
                        height: "100%",

                        flexDirection: "column",
                        backgroundColor: black,
                    }}
                >
                    <List sx={{ flexDirection: "column" }}>
                        <ListItem>
                            <ListItemButton
                                sx={{
                                    justifyContent: "center",
                                   
                                }}
                                onClick={() => navigate("/main")}
                            >
                                <Typography variant="h1" color="white">
                                    Main Page
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                sx={{
                                    justifyContent: "center",
                                   
                                }}
                                onClick={() => navigate("/nature")}
                            >
                                <Typography variant="h1" color="white">
                                    Nature
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem>
                            <ListItemButton
                                sx={{
                                    justifyContent: "center",
                                   
                                }}
                                onClick={() => navigate("/architecture")}
                            >
                                <Typography variant="h1" color="white">
                                    Architecture
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </FlexCenter>
            </Drawer>
        </Box>
    );
};

export default Navbar;
