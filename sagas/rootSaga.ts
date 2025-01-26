import { all, spawn } from "redux-saga/effects";

import { retrySaga } from "./retrySaga";

function* rootSaga() {
    const sagas: any[] = [
    //   bluetoothSaga, //
    ];

    yield all(sagas.map((saga) => spawn(retrySaga, saga, 5)));
}

export { rootSaga };
