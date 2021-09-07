import React, { ReactElement, useState } from "react";
import { addDays, isBefore, isFuture, subMonths } from "date-fns";
import { Box, Container, Grid } from "@material-ui/core";

import { Charts, Header } from "../components/organisms";

const LAST_MONTH = subMonths(new Date(), 1);

const IndexPage = (): ReactElement => {
    const [startDate, setStartDate] = useState<Date | null>(LAST_MONTH);
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [interval, setInterval] = useState<"1d" | "1mo" | "1w">("1d");

    const onStartDateChange = (date: Date | null) => {
        if (date) {
            if (isFuture(date)) {
                setStartDate(new Date());
                setEndDate(addDays(new Date(), 7));
            } else {
                setStartDate(date);
            }
        }
    };

    const onEndDateChange = (date: Date | null) => {
        if (date) {
            const ammendStartDate = startDate ?? new Date();
            if (isBefore(date, ammendStartDate)) {
                // get data for the next 7 days
                setEndDate(addDays(ammendStartDate, 7));
            } else {
                setEndDate(date);
            }
        }
    };

    return (
        <Container maxWidth={false} style={{ height: "100%" }}>
            <Box paddingX={4} style={{ height: "100%" }}>
                <Grid container direction="column" style={{ height: "100%" }}>
                    <Grid item>
                        <Header
                            onStartDateChange={onStartDateChange}
                            onEndDateChange={onEndDateChange}
                            startDate={startDate}
                            endDate={endDate}
                            interval={interval}
                            onChangeInterval={(value: "1d" | "1mo" | "1w") =>
                                setInterval(value)
                            }
                        />
                    </Grid>
                    <Grid item style={{ flexGrow: 1 }}>
                        <Charts
                            startDate={startDate}
                            endDate={endDate}
                            interval={interval}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

IndexPage.displayName = "IndexPage";

export default IndexPage;
