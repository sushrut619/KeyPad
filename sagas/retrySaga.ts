import { call } from "redux-saga/effects";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* retrySaga(saga: any, maxTimes: number) {
  for (let i = 0; i < maxTimes; i++) {
    console.log("starting saga attempt: ", i);
    try {
      yield call(saga);
      console.error("unexpected root saga termination: ", saga);
      // break;
    } catch (err) {
      continue;
    }
    yield delay(1000); // Workaround to avoid blocking ui
  }
}

export { retrySaga };
