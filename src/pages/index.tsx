import React, { ReactElement } from "react";

import { Box, Container, Grid } from "@material-ui/core";
import { CandleStickChart, Tickers } from "../components/molecules";

const IndexPage = (): ReactElement => (
    <Container maxWidth={false}>
        <Box padding={4}>
            <Grid container direction="column">
                <Grid item>
                    <Tickers />
                </Grid>
                <Grid item>
                    <CandleStickChart />
                </Grid>
            </Grid>
        </Box>
    </Container>
);

IndexPage.displayName = "IndexPage";

export default IndexPage;
