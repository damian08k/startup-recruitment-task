import { useContext } from "react";
import { withRouter } from "react-router";

import { PostInfoContext } from "../../context/PostInfoContext";

import { Breadcrumbs, Link, Typography } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import useBreadcrumbStyles from "./useBreadcrumbStyles";

const Breadcrumb = props => {
    const { breadcrumbStyles, navigationStyles } = useBreadcrumbStyles();

    const { postTitle } = useContext(PostInfoContext);

    const {
        history,
        location: { pathname },
    } = props;

    const splittedPath = pathname.split("/").filter(path => path);

    const breadcrumbSeparatar = <NavigateNextIcon fontSize="small" />;

    const handlePagesLinkClicked = () => history.push("/posts");

    const showPostsPageOnBreadcrumb =
        splittedPath.length > 0 ? (
            <Link onClick={handlePagesLinkClicked} className={navigationStyles}>
                Posts
            </Link>
        ) : (
            <Typography>Posts</Typography>
        );

    const showPostTitleOnBreadcrumb = splittedPath.length > 1 && <Typography>{postTitle}</Typography>;

    return (
        <Breadcrumbs separator={breadcrumbSeparatar} className={breadcrumbStyles}>
            {showPostsPageOnBreadcrumb}
            {showPostTitleOnBreadcrumb}
        </Breadcrumbs>
    );
};

export default withRouter(Breadcrumb);
