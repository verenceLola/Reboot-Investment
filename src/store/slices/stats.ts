import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStat {
    open: Record<string, number>;
    high: Record<string, number>;
    low: Record<string, number>;
    close: Record<string, number>;
    volume: Record<string, number>;
}

interface IInitialState {
    loading: boolean;
    stats?: Record<string, Record<string, number>>[];
    params: {
        startDate?: string;
        endDate?: string;
        interval?: "1d" | "1mo" | "1w";
    };
}

const initialState: IInitialState = {
    loading: false,
    params: {},
};

const statsSlice = createSlice({
    name: "stats",
    initialState,
    reducers: {
        loadingStats: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        loadStats: (
            state,
            {
                payload,
            }: PayloadAction<{
                startDate: string;
                endDate: string;
                interval: "1d" | "1mo" | "1w";
            }>
        ) => {
            state.params = payload;
        },
        setStats: (state, { payload }: PayloadAction<IStat>) => {
            const series = Object.keys(payload.open).map((key) => ({
                [key]: {
                    open: payload["open"][key],
                    high: payload["high"][key],
                    low: payload["low"][key],
                    close: payload["close"][key],
                    volume: payload["volume"][key],
                },
            }));
            state.stats = series;
        },
    },
});

export const {
    reducer,
    actions: { loadStats, loadingStats, setStats },
} = statsSlice;
