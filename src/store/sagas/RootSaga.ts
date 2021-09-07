import { all, AllEffect } from "redux-saga/effects";
import { statsSaga, tickersSaga } from "./handlers";

export default function* rootSaga(): Generator<AllEffect<unknown>> {
    yield all([tickersSaga(), statsSaga()]);
}
