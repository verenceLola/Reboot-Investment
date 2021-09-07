import { all, AllEffect } from "redux-saga/effects";
import { tickersSaga } from "./handlers";

export default function* rootSaga(): Generator<AllEffect<unknown>> {
    yield all([tickersSaga()]);
}
