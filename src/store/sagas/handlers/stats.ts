import {
    call,
    CallEffect,
    put,
    PutEffect,
    select,
    SelectEffect,
    takeEvery,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { Action } from "redux";
import { RootState } from "../..";

import { loadingStats, setStats, loadStats } from "../../slices";
import { IStat } from "../../slices/stats";
import { requestTickerStats } from "../requests";

function* handleLoadTickerStats(): Generator<
    PutEffect | CallEffect | SelectEffect,
    void
> {
    try {
        const tickerSymbol = yield select(
            (state: RootState) => state.tickers.selectedTicker
        );
        yield put(loadingStats(true));
        const response = yield call(requestTickerStats, {
            ticker: tickerSymbol as string,
            start_date: "2021-07-01",
            end_date: "2021-08-05",
        });

        const { data } = response as AxiosResponse<IStat>;
        yield put(setStats(data));
        yield put(loadingStats(false));
    } catch (error) {
        console.log({ error });
    }
}

export function* statsSaga(): Generator {
    const tickerSymbol = yield select(
        (state: RootState) => state.tickers.selectedTicker
    );
    yield takeEvery(
        (action: Action) =>
            action.type === loadStats.type && tickerSymbol !== "",
        handleLoadTickerStats
    );
}
