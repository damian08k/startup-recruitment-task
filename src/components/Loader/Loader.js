import { Box, CircularProgress, Typography } from "@material-ui/core";

import useLoaderStyles from "./useLoaderStyles";

const Loader = () => {
    const { loaderStyles } = useLoaderStyles();

    return (
        <Box component="div" className={loaderStyles}>
            <Typography variant="body1">Loading posts...</Typography>
            <CircularProgress />
        </Box>
    );
};

export default Loader;
