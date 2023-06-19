import { createStyles } from "@mantine/core";
import buildProfile from "../../assets/Images/buildProfile.svg"

export const useStyles = createStyles({
    p1: {
        backgroundColor: "white",
        marginTop: "-700%",
        marginLeft: "-1200%",
        position: "absolute",
        border: "1 px solid white",
        padding: "5px",
        width: "1400%",
        borderRadius: "5px",
        boxShadow: "10px 5px 30px 4px #F1F3F5"
    },
    p2: {
        backgroundColor: "white",
        position: "absolute",
        marginTop: "-160px",
        marginLeft: "-350px",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        borderRadius: "5px",
        boxShadow: "10px 5px 30px 10px #F1F3F5"

    }
    ,
    p3: {
        backgroundColor: "white",
        marginLeft: "-300px",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        borderRadius: "5px",
        position: "absolute",
        marginTop: "-90px",
        boxShadow: "10px 5px 20px 10px #F1F3F5"



    }
    ,
    p4: {
        backgroundColor: "white",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        borderRadius: "5px",
        position: "absolute",
        marginTop: "-20px",
        boxShadow: "10px 5px 30px 4px #F1F3F5",

        marginLeft: "-250px",

    }
    ,
    p5: {
        backgroundColor: "white",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        borderRadius: "5px",
        position: "absolute",
        marginLeft: "-300px",
        boxShadow: "10px 5px 30px 10px #F1F3F5",
        marginTop: "60px",



    }
    ,
    p6: {
        backgroundColor: "white",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        borderRadius: "5px",
        position: "absolute",
        marginLeft: "-350px",
        boxShadow: "10px 5px 20px 10px #F1F3F5",
        marginTop: "140px",


    },
    p7: {
        backgroundColor: "white",
        border: "1 px solid white",
        padding: "5px",
        width: "500px",
        position: "absolute",
        marginLeft: "-400px",
        borderRadius: "5px",
        boxShadow: "10px 5px 20px 10px #F1F3F5",
        marginTop: "200px",


    },

    container: {
        position: "relative",
        marginLeft: "320px"


    },
    Container: {
        // backgroundImage: `linear-gradient(rgba(0,0,1,.5), rgba(0,0,10,.5)),url(${buildProfile})`,
        backgroundImage: `url(${buildProfile})`,
        padding: "80px",
        position: 'relative',
        "& > *": {
            position: 'relative',
            zIndex: 10,
        },
        ": after": {
            content: '""',
            width: '100%',
            height: '100%',
            position: 'absolute',
            backgroundColor: "rgb(13, 27,57, 0.8)",
            top: 0,
            left: 0,
            zIndex: 0
        }

    },

    
    EmployeeContainer:{
        padding:"50px",
        backgroundColor: "#F3F3F3",

    }

})