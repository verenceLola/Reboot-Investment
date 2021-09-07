import React, { ChangeEvent, ReactElement } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";

interface IProps {
    label: string;
    options: Record<string, string>;
    onChange: (event: ChangeEvent<{ value: unknown }>) => void;
    value: string;
}

export const SimpleSelect = ({
    onChange,
    value,
    label,
    options,
}: IProps): ReactElement => (
    <FormControl variant="outlined" style={{ width: "100%" }}>
        <InputLabel>{label}</InputLabel>
        <Select
            SelectDisplayProps={{
                style: {
                    textTransform: "capitalize",
                },
            }}
            MenuProps={{
                style: {
                    textTransform: "capitalize",
                },
            }}
            value={value}
            onChange={onChange}
            label={label}
        >
            {Object.entries(options).map((entry) => (
                <MenuItem key={entry[0]} value={entry[1]}>
                    {entry[0]}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);
