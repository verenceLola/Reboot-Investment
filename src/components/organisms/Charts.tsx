import React, { ReactElement } from "react";

import { Box, Grid } from "@material-ui/core";
import { BarChart, CandleStickChart } from "../molecules";

interface IProps {
    startDate: Date | null;
    endDate: Date | null;
    interval: "1d" | "1mo" | "1w";
}

export const Charts = ({
    startDate,
    endDate,
    interval,
}: IProps): ReactElement => (
    <Box padding={3}>
        <Grid
            container
            alignContent="center"
            justifyContent="center"
            direction="column"
        >
            <Grid item style={{ width: "100%" }}>
                <CandleStickChart
                    startDate={startDate}
                    endDate={endDate}
                    interval={interval}
                />
            </Grid>
            <Grid item>
                <BarChart />
            </Grid>
        </Grid>
    </Box>
);
