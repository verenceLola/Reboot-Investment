import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/RootSaga";

import { tickersReducer, statReducer } from "./slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tickers: tickersReducer,
        stats: statReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
