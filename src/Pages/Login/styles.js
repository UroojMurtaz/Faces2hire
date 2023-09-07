import { createStyles, em } from "@mantine/core";

export const useStyles = createStyles({
    container: {
        height: "calc(100vh - 50px)", // Use "calc" to perform the height calculation
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "red",


    },
    loginTitle: {
        top: "150px",
        color: "lightgray",
        position: "absolute",
        padding: "10px",
        [`@media (max-width: ${em(992)})`]: {
            display: "none"

        },
    },
    wrapper: {
        width: "60%",
        height: "75%",
        WebkitBoxShadow: '0px 5px 33px -21px rgba(66, 68, 90, 1)',
        MozBoxShadow: '0px 5px 33px -21px rgba(66, 68, 90, 1)',
        boxShadow: '0px 5px 33px -21px rgba(66, 68, 90, 1)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 20,

        [`@media (max-width: ${em(992)})`]: {
            width: "65%",
            height: "90%",
            flexDirection: "column"

        },

    },
    left: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",

        [`@media (max-width: ${em(992)})`]: {
            padding: "20px"
        },

    },
    right: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        [`@media (max-width: ${em(992)})`]: {
            padding: "20px"
        },


    },
    loginButton: {
        width: 170,
        padding: "15px 25px",
        borderRadius: 5,
        color: "white",
        display: "flex",
        alignItems: "center",
        fontWeight: "bold",
        marginBottom: 20,
        cursor: "pointer",
    },
    google: {
        backgroundColor: "#df4930",
    },
    facebook: {
        backgroundColor: "#507cc0",
    },
    github: {
        backgroundColor: "black",
    },
    icon: {
        width: "20px",
        height: "20px",
        marginRight: "15px"
    },
    submit: {
        width: 200,
        height: "100%", // Set the width to 100% to ensure it takes the full width of the container
        backgroundColor: "#37496F",
        color: "white",
        fontWeight: "bold",
        border: "none",
        padding: "15px 20px",
        borderRadius: 5,
        cursor: "pointer",
        textAlign: "center", // Center-align the text
        overflow: "hidden", // Prevent text overflow
        textOverflow: "ellipsis", // Add ellipsis for long text (optional)
        whiteSpace: "nowrap", // Prevent text from wrapping (optional)
        "&:hover": {
            backgroundColor: "#37496F",
        },
    },
    center: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",

        [`@media (max-width: ${em(800)})`]: {
            width: "100%",
            position: "relative"

        },

    },
    or: {
        border: "2px solid lightgray",
        borderRadius: "50%",
        padding: "10px",
        color: "gray",
        backgroundColor: "white",
        fontWeight: "bold"

    },
    line: {
        width: "0.5px",
        height: "70%",
        backgroundColor: "lightgray",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        zIndex: -1,

        [`@media (max-width: ${em(992)})`]: {
            height: "0.5px",
            width: "200px",
        },
    },



});
