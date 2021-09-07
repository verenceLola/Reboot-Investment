import { Box, Grid } from "@material-ui/core";
import React, { ReactElement } from "react";
import { DateTimePicker } from "../atoms/DateTimePicker";
import { TickersSelect } from "../molecules";

interface IProps {
    startDate: Date | null;
    endDate: Date | null;
    onStartDateChange: (date: Date | null) => void;
    onEndDateChange: (date: Date | null) => void;
}

export const Header = ({
    startDate,
    endDate,
    onStartDateChange,
    onEndDateChange,
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
            </Grid>
        </Box>
    );
};
