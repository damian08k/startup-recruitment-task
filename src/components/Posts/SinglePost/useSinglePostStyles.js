import { makeStyles } from "@material-ui/styles";

const useSinglePostStyles = makeStyles({
    listElementStyles: {
        margin: "20px 0",
        display: "flex",
        textAlign: "center",
        flexWrap: "wrap",
        minWidth: "200px",
        border: "1px solid black",

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

    showFullVersionButtonStyles: {
        textTransform: "capitalize",
    },
});

export default useSinglePostStyles;
