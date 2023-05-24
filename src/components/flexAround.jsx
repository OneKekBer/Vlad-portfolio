const { default: styled } = require("@emotion/styled");
const { Box } = require("@mui/material");

const FlexAround = styled(Box)({
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    // flexDirection:'column'
})
// const FlexAroundList = styled(Box)({
    
//     display:'flex',
//     alignItems:'center',
//     justifyContent:'space-around',
//     width:'100%',
   
    
    

// })

export default FlexAround