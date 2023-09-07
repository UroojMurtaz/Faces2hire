import { createStyles, keyframes } from "@mantine/core";
export const bounce = keyframes({
    // from: { backgroundColor: "blue" },
    // to: { backgroundColor: "yellow" },
    // '100%': { transform: 'translate3d(0, -0.9375rem, 0)' },
    "100%": { transform: 'translateX(10px) rotate(100deg) translateY(5px)' },
    // "25%": { backgroundColor: "yellow", left: "10px", top: "0px" },
    // "50%": { backgroundColor: "blue", left: "10px", top: "500px" },
    // "75%": { backgroundColor: "green", left: "0px", top: "200px" },
    // "100%": { backgroundColor: "white", left: "10px", top: "20px" },
    // "100%":{transform:'rotateZ(360deg)'}
});
export const useStyles = createStyles({
    animatedElement: {
        backgroundColor: "red",
    },
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5px",
        animation: `${bounce} 0.5s linear`,
        // animationDuration:"3s",
        // animationDirection:"reverse",
        animationDelay: "3s"



    },

    button: {
        ":hover": {
            backgroundColor: "#2A4681",
            color: "white",


        }
    }
})