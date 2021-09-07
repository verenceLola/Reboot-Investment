import React, { ReactElement } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, CircularProgress } from "@material-ui/core";

interface IProps {
    options: string[];
    loading: boolean;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    value: string;
    onChange: (value?: string) => void;
    label: string;
}

export const Select = ({
    options,
    loading,
    onOpen,
    onClose,
    isOpen,
    value,
    onChange,
    label,
}: IProps): ReactElement => (
    <Autocomplete
        style={{ width: 300 }}
        open={isOpen}
        value={value}
        onChange={(_event, value) => onChange(value || undefined)}
        onOpen={onOpen}
        onClose={onClose}
        getOptionSelected={(option, value) => option === value}
        getOptionLabel={(option) => option}
        options={options}
        loading={loading}
        renderInput={(params) => (
            <TextField
                {...params}
                label={label}
                variant="outlined"
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <React.Fragment>
                            {loading ? (
                                <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    ),
                }}
            />
        )}
    />
);
Select.displayName = "Select";
