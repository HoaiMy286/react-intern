import { configureStore } from "@reduxjs/toolkit";
import rootreducer from './rootReducer';
import productSaga from "./productSaga";
import createSagaMiddleware from 'redux-saga';

// const store = createStore(rootreducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootreducer,
    middleware:() => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default store;