import { makeStyles } from "@material-ui/styles";

const useBreadcrumbStyles = makeStyles({
    breadcrumbStyles: {
        width: "100%",
        padding: "10px 20px",
        borderBottom: "2px solid black",
        position: "sticky",
        top: "0",
        backgroundColor: "white",
        zIndex: "1",
    },
});

export default useBreadcrumbStyles;
