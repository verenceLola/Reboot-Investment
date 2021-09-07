import React, { ReactElement, useState } from "react";

import { Box, Container, Grid } from "@material-ui/core";
import { CandleStickChart } from "../components/molecules";
import { Header } from "../components/organisms";
import { subDays } from "date-fns";

const LAST_WEEK = subDays(new Date(), 7);

const IndexPage = (): ReactElement => {
    const [startDate, setStartDate] = useState<Date | null>(LAST_WEEK);
    const [endDate, setEndDate] = useState<Date | null>(new Date());

    return (
        <Container maxWidth={false}>
            <Box padding={4}>
                <Grid container direction="column">
                    <Grid item>
                        <Header
                            onStartDateChange={(date: Date | null) =>
                                setStartDate(date)
                            }
                            onEndDateChange={(date: Date | null) =>
                                setEndDate(date)
                            }
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Grid>
                    <Grid item>
                        <CandleStickChart
                            startDate={startDate}
                            endDate={endDate}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

IndexPage.displayName = "IndexPage";

export default IndexPage;
