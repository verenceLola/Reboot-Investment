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
        const params = yield select((state: RootState) => state.stats.params);
        const { startDate, endDate } = params as {
            startDate: string;
            endDate: string;
        };

        const requestData = {
            ticker: tickerSymbol as string,
            ...{ start_date: startDate, end_date: endDate },
        };

        yield put(loadingStats(true));
        const response = yield call(requestTickerStats, requestData);

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
