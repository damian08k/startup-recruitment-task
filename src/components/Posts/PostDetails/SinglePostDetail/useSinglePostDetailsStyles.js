import { makeStyles } from "@material-ui/styles";

const useSinglePostDetailsStyles = makeStyles({
    listElementStyles: {
        display: "flex",
        flexWrap: "wrap",
        margin: "25px 0",
        padding: "10px 15px",
        border: "2px solid black",
        borderRadius: "10px",
        textAlign: "center",

        "& > *": {
            flexBasis: "100%",
        },

        "@media (min-width: 600px)": {
            textAlign: "left",
        },
    },

    commentNameStyles: {
        fontSize: "1.7rem",
        fontWeight: "bold",
    },

    commentBodyStyles: {
        paddingTop: "5px",
    },
});

export default useSinglePostDetailsStyles;
