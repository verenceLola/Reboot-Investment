import React, { ReactElement, useEffect, useState } from "react";
import { loadTickers, setSelectedTicker } from "../../store/slices";

import { useAppDispatch, useAppSelector } from "../../utils";
import { Select } from "../atoms";

export const Tickers = (): ReactElement => {
    const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);

    const dispatch = useAppDispatch();
    const { tickers, loading, selectedTicker } = useAppSelector(
        (state) => state.tickers
    );

    useEffect(() => {
        dispatch(loadTickers());
    }, []);

    const onChange = (value?: string) => {
        dispatch(setSelectedTicker(value || ""));
    };

    const onOpen = () => {
        setIsSelectOpen(true);
    };

    const onClose = () => {
        setIsSelectOpen(false);
    };

    return (
        <Select
            loading={loading}
            value={selectedTicker}
            onChange={onChange}
            onOpen={onOpen}
            isOpen={isSelectOpen}
            onClose={onClose}
            options={tickers}
            label="Select a Stock"
        />
    );
};
