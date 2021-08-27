// https://codesandbox.io/s/github/tannerlinsley/react-query/tree/master/examples/custom-hooks?file=/src/index.js:2312-2319
// https://codesandbox.io/s/great-ellis-4d0lc?file=/src/Breadcrumbs.jsx

import { useContext } from "react";
import { PostInfoContext } from "../../context/PostInfoContext";

import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import { withRouter } from "react-router";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import useBreadcrumbStyles from "./useBreadcrumbStyles";

const Breadcrumb = props => {
    const { breadcrumbStyles } = useBreadcrumbStyles();
    const { postName } = useContext(PostInfoContext);
    const {
        history,
        location: { pathname },
    } = props;
    const pathnames = pathname.split("/").filter(x => x);

    return (
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} className={breadcrumbStyles}>
            {pathnames.length > 0 ? (
                <Link onClick={() => history.push("/posts")}>Posts</Link>
            ) : (
                <Typography> Posts </Typography>
            )}

            {console.log(pathnames)}
            {pathnames.length > 1 && <Typography>{postName}</Typography>}
        </Breadcrumbs>
    );
};

export default withRouter(Breadcrumb);
