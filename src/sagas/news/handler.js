import { call, put } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";

//worker Saga
export default function* handleGetNews({ payload, type }) {
  try {
    yield put(setLoading(true));
    const respone = yield call(requestGetNews, payload);
    const { hits } = respone.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
