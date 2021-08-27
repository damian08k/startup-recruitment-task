import { makeStyles } from "@material-ui/styles";

const useLoaderStyles = makeStyles({
    loaderStyles: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: "20px",

        "& > p": {
            flexBasis: "100%",
            paddingBottom: "10px",
            textAlign: "center",
        },
    },
});

export default useLoaderStyles;
