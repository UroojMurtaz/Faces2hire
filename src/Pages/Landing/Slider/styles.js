import { createStyles } from "@mantine/core";
import FirstSlide from "../../../assets/Images/Slide1.png";
import SecondSlide from "../../../assets/Images/Slide2.png";
import ThirdSlide from "../../../assets/Images/Slide3.png";

export const useStyles = createStyles({
    firstSlide: {
        backgroundImage: `url(${FirstSlide})`,
        // height:"100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"


    },
    secondSlide: {
        backgroundImage: `url(${SecondSlide})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"

    },
    thirdSlide: {
        backgroundImage: `url(${ThirdSlide})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        overflow: "hidden"

    },
    form: {
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"


    },

    form1: {
        backgroundColor: "#2A4681",
        opacity: 0.9,
        borderRadius: "20px",
        padding: "50px"
    },
    job: {
        backgroundColor: "#2A4681",
        opacity: 0.7,
        marginLeft: 0,
        width: "fit-content",
        padding: "20px 20px 10px 20px"

    },
    inner: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: " 100%",
        opacity: 1,
        backgroundColor: "#2A4681",
    },
    outer: {
        position: "relative",
        // opacity: 0.7,
        backgroundColor: "#2A4681",
    }

})