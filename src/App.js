import React from "react";

import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { Box } from "@material-ui/core";

import Error from "./components/Error/Error";
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
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/posts" />
                        </Route>
                        <Route exact path="/posts">
                            <Posts />
                        </Route>
                        <Route path="*">
                            <Error message="Page not found." />
                        </Route>
                    </Switch>
                </Router>
            </Box>
        </QueryClientProvider>
    );
};

export default App;
