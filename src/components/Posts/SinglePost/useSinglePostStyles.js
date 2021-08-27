import { makeStyles } from "@material-ui/styles";

const useSinglePostStyles = makeStyles({
    listElementStyles: {
        display: "flex",
        flexWrap: "wrap",
        margin: "25px 0",
        minWidth: "300px",
        border: "2px solid black",
        textAlign: "center",

        "& > *": {
            flexBasis: "100%",
        },

        "&:first-child": {
            margin: "0",
        },

        "@media (min-width: 640px)": {
            textAlign: "left",
        },
    },

    postTitleStyles: {
        fontSize: "2rem",
        fontWeight: "bold",
    },

    postBodyStyles: {
        padding: "10px 0",
    },

    showFullVersionButtonContainerStyles: {
        display: "flex",
        justifyContent: "center",

        "@media (min-width: 640px)": {
            justifyContent: "flex-end",
        },
    },

    linkStyles: {
        textDecoration: "none",
    },

    showFullVersionButtonStyles: {
        textTransform: "capitalize",
    },

    postsContainerStyles: {
        padding: "0 5px",
    },
});

export default useSinglePostStyles;
