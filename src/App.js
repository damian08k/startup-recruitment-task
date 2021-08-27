import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { Box } from "@material-ui/core";

import Posts from "./components/Posts/Posts";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
});

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Box width="100%" display="flex" justifyContent="center">
                <Posts />
            </Box>
        </QueryClientProvider>
    );
};

export default App;
