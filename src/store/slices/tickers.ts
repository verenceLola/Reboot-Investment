import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    tickers: string[];
    loading: boolean;
    selectedTicker: string;
}

const initialState: InitialState = {
    tickers: [],
    loading: false,
    selectedTicker: "AAPL",
};

const tickersSlice = createSlice({
    name: "tickers",
    initialState,
    reducers: {
        loadTickers: () => {},
        setTickers: (state, action: PayloadAction<string[]>) => {
            state.tickers = action.payload;
        },
        loadingTickers: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setSelectedTicker: (state, action: PayloadAction<string>) => {
            state.selectedTicker = action.payload;
        },
    },
});

export const { setTickers, loadTickers, loadingTickers, setSelectedTicker } =
    tickersSlice.actions;
export const { reducer } = tickersSlice;
