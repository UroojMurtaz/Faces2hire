import { createStyles } from "@mantine/core";
export const useStyles = createStyles({
    card: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "5px",



    },
    button: {
        ":hover": {
            backgroundColor: "#2A4681",
            color: "white"
        }
    }
})