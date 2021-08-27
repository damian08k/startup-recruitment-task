import { makeStyles } from "@material-ui/styles";

const usePostDetailsStyles = makeStyles({
    containerStyles: {
        minWidth: "300px",

        "& > *": {
            textAlign: "center",

            "@media (min-width: 600px)": {
                textAlign: "left",
            },
        },
    },

    postTitleStyles: {
        fontSize: "2rem",
        fontWeight: "bold",
    },

    postBodyStyles: {
        paddingTop: "10px",
    },

    commentsStyles: {
        marginTop: "25px",
        fontSize: "1.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
});

export default usePostDetailsStyles;
