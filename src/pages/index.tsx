import React, { ReactElement, useState } from "react";
import { subMonths } from "date-fns";
import { Box, Container, Grid } from "@material-ui/core";

import { Charts, Header } from "../components/organisms";

const LAST_MONTH = subMonths(new Date(), 1);

const IndexPage = (): ReactElement => {
    const [startDate, setStartDate] = useState<Date | null>(LAST_MONTH);
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [interval, setInterval] = useState<"1d" | "1mo" | "1w">("1d");

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
                            interval={interval}
                            onChangeInterval={(value: "1d" | "1mo" | "1w") =>
                                setInterval(value)
                            }
                        />
                    </Grid>
                    <Grid item>
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
