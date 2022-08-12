import { takeLatest } from "redux-saga/effects";
import handleGetNews from "./handler";
import { getNews } from "./newsSlice";

//watcher Saga
export default function* newsSaga() {
  yield takeLatest(getNews.type, handleGetNews);
}
