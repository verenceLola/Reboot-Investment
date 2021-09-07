import { Box, Grid } from "@material-ui/core";
import React, { ChangeEvent, ReactElement } from "react";
import { MARKET_INTERVALS } from "../../utils/constants";
import { DateTimePicker, SimpleSelect } from "../atoms";
import { TickersSelect } from "../molecules";

interface IProps {
    startDate: Date | null;
    endDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    onEndDateChange: (date: Date | null) => void;
    interval: "1d" | "1mo" | "1w";
    onChangeInterval: (value: "1d" | "1mo" | "1w") => void;
}

export const Header = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
    onChangeInterval,
    interval,
}: IProps): ReactElement => {
    return (
        <Box paddingY={3}>
            <Grid
                container
                alignItems="center"
                spacing={3}
                justifyContent="space-around"
            >
                <Grid item>
                    <TickersSelect />
                </Grid>
                <Grid item>
                    <DateTimePicker
                        onChange={onStartDateChange}
                        value={startDate}
                        label="Pick Start Date"
                    />
                </Grid>
                <Grid item>
                    <DateTimePicker
                        onChange={onEndDateChange}
                        value={endDate}
                        label="Pick End Date"
                    />
                </Grid>
                <Grid item style={{ flexGrow: 0.5 }}>
                    <SimpleSelect
                        options={MARKET_INTERVALS}
                        value={interval}
                        onChange={(event: ChangeEvent<{ value: unknown }>) =>
                            onChangeInterval(
                                event.target.value as "1d" | "1mo" | "1w"
                            )
                        }
                        label="Select Interval"
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
