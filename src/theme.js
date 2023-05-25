export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      primary: {
                          main: "#FFFFFF",
                          white: "#FFFFFF",
                          black: "#0C0C0C",
                          grey: "#8D8D8D",
                      },
                      background: {},
                  }
                : {}),
        },
        typography: {
            fontSize: 16,
            
            fontWeight: "bold",
            color: "white",
            h1: {
                fontSize: "6rem",
                fontWeight: 900,
                "@media (max-width:992px)": {
                    fontSize: "5rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "3rem",
                },
                "@media (max-width:400px)": {
                    fontSize: "2rem",
                },
            },
            h2: {
                fontSize: '4rem',
                fontWeight: 900,
                "@media (max-width:992px)": {
                    fontSize: "3rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "2.5rem",
                },
            },
            h3: {
                fontSize: '2.5rem',
                fontWeight: 900,
                "@media (max-width:992px)": {
                    fontSize: "2rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "1.5rem",
                },
            },
            text:{
                fontSize:'1.5rem',
                "@media (max-width:992px)": {
                    fontSize: "1rem",
                },
                "@media (max-width:600px)": {
                    fontSize: "1rem",
                },
                "@media (max-width:400px)": {
                    fontSize: "0.75rem",
                },
            }
        },
    };
};
