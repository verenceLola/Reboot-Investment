import React, { ReactElement } from "react";

import { Box, Container, Grid, Typography } from "@material-ui/core";
import { Tickers } from "../components/molecules";

const IndexPage = (): ReactElement => (
    <Container maxWidth={false}>
        <Box padding={4}>
            <Grid container direction="column">
                <Grid item>
                    <Tickers />
                </Grid>
                <Grid item>
                    <Typography variant="h3">Charts Here</Typography>
                </Grid>
            </Grid>
        </Box>
    </Container>
);

IndexPage.displayName = "IndexPage";

export default IndexPage;
