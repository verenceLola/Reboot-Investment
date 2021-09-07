import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "./sagas/RootSaga";

import { reducer as tickersReducer } from "./slices";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tickers: tickersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
