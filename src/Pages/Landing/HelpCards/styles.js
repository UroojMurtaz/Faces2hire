import { createStyles } from "@mantine/core";
export const useStyles = createStyles({
    mainContainer: {
        padding: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",



    },
    card: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // ':hover': {
        //     backgroundColor:"#D0EBFF",
        //     transform: 'scale(1.05)', // Increase the scale on hover
        //   },
        ":hover":{
            backgroundColor:"#D0EBFF",
            transform:'scale(1.03)'
        }
    },
  

})