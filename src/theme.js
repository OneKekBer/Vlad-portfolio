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
                      background: {
                        
                      }
                  }
                : {}),
        },
        typography:{
            fontSize:24,
            fontWeight:'bold',
            color:'white',
            h1:{
                fontSize:'6rem',
                fontWeight:900,
            },
            h2:{
                fontSize:80,
                fontWeight:'bold',
            },
            h3:{
                fontSize:40,
                fontWeight:'bold',
            },
        }

        

    };
};
