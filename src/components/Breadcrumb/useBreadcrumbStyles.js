import { makeStyles } from "@material-ui/styles";

const useBreadcrumbStyles = makeStyles({
    breadcrumbStyles: {
        position: "sticky",
        top: "0",
        marginBottom: "25px",
        padding: "10px 20px",
        width: "100%",
        borderBottom: "2px solid black",
        backgroundColor: "white",
        zIndex: "1",
    },

    navigationStyles: {
        cursor: "pointer",
    },
});

export default useBreadcrumbStyles;
