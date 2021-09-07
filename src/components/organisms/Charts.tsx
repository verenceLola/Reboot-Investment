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
    <Box paddingX={3} height="100%">
        <Grid
            container
            alignContent="center"
            justifyContent="center"
            direction="column"
            style={{ height: "100%" }}
        >
            <Grid item style={{ width: "100%", flexGrow: 0.6 }}>
                <CandleStickChart
                    startDate={startDate}
                    endDate={endDate}
                    interval={interval}
                />
            </Grid>
            <Grid item style={{ flexGrow: 0.4 }}>
                <BarChart />
            </Grid>
        </Grid>
    </Box>
);
