import newsSaga from "./news/saga";
import { all, fork } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([fork(newsSaga)]);
}

//all: chờ tất cả chạy xong, truyền mảng các saga muốn truyền
//fork : non-blocking

// blocking: call, put
//non-blocking: fork
