import React, { ReactElement } from "react";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface IProps {
    label: string;
    value: Date | null;
    onChange: (date: Date | null) => void;
}

export const DateTimePicker = ({
    label,
    value,
    onChange,
}: IProps): ReactElement => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={label}
            value={value}
            onChange={onChange}
            KeyboardButtonProps={{
                "aria-label": "change date",
            }}
        />
    </MuiPickersUtilsProvider>
);
