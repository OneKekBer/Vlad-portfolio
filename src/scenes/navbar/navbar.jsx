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

const useStyles = makeStyles({
    drawer: {
        width: "100%",
        height: "100%",
        backgroundColor: "linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",
        background: "linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",
    },
    drawerPaper: {
        width: "100%",
        height: "100%",
        backgroundColor: "linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",
        background: "linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",

        // borderRight:'2px solid white'
    },
});

const Navbar = () => {
    const [isMenuToggle, setIsMenuToggle] = useState(false);
    const theme = useTheme();

    const classes = useStyles();

    return (
        <Box>
            {isMenuToggle ? (
                <CloseIcon
                    sx={{
                        fontSize: 50,
                        color: "white",
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        zIndex: "100000",
                        "&:hover": {
                            cursor: "pointer",
                            color: "grey",
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
                        color: "white",
                        position: "absolute",
                        top: "5%",
                        left: "5%",
                        zIndex: "100000",
                        "&:hover": {
                            cursor: "pointer",
                            color: "grey",
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
                <Box
                    sx={{
                        display: "flex",
                        height: "100%",

                        // backgroundColor: "linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",
                        // background:"linear-gradient (45deg, #fe6b8b 30%, #ff8e53 90%)",
                        background: "black",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    {/* <ul>
                        <li>
                            <a href={`/main`}>mainPage</a>
                        </li>
                        <li>
                            <a href={`/nature`}>nature</a>
                        </li>
                    </ul> */}
                    <List sx={{ display: "flex", flexDirection: "column", justifyContent:'center', alignItems:'center', textAlign:'center'}}>
                        <ListItem>
                            <ListItemButton sx={{textAlign:'center'}} component="a" href={`/main`}>
                                <Typography  variant="h1" color="white">
                                    Main Page
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                        <ListItem >
                            <ListItemButton component="a" href={`/nature`}>
                                <Typography variant="h1" color="white">
                                    Nature
                                </Typography>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Navbar;
