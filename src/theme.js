export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                      primary: {
                          main: "#FFFFFF",
                          white: "FFFFFF",
                          black: "0C0C0C",
                          grey: "#8D8D8D",
                      },
                      background: {},
                  }
                : {}),
        },
        Typography:{
            fontSize:24,
            fontWeight:'bold',
            color:'white',
            h1:{
                fontSize:100
            },
            h2:{
                fontSize:80
            },
            h3:{
                fontSize:40
            },
        }

        

    };
};
