import { makeStyles } from "@material-ui/styles";

const useSinglePostDetailsStyles = makeStyles({
    listElementStyles: {
        display: "flex",
        flexWrap: "wrap",

        "& > *": {
            flexBasis: "100%",
        },

        "& .name": {
            fontSize: "1.8rem",
        },
    },
});

export default useSinglePostDetailsStyles;
