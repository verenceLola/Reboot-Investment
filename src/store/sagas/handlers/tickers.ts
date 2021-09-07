import {
    call,
    CallEffect,
    put,
    PutEffect,
    takeEvery,
} from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { loadingTickers, loadTickers, setTickers } from "../../slices";
import { requestLoadTickers } from "../requests";

function* handleLoadTickers(): Generator<
    | PutEffect<{ payload: boolean; type: string }>
    | CallEffect<AxiosResponse<{ NASDAQ: string[] }>>
    | PutEffect<{ payload: string[]; type: string }>
    | PutEffect<{ payload: boolean; type: string }>,
    void
> {
    try {
        yield put(loadingTickers(true));
        const response = yield call(requestLoadTickers);
        const { data } = response as AxiosResponse<{ NASDAQ: string[] }>;
        yield put(setTickers(data.NASDAQ));
        yield put(loadingTickers(false));
    } catch (error) {
        console.log({ error });
        yield put(loadingTickers(false));
    }
}

export function* tickersSaga(): Generator {
    yield takeEvery(loadTickers.type, handleLoadTickers);
}
