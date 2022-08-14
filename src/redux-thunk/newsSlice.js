import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    const response = await requestGetNews(query);
    return response.data.hits;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: { hits: [], loading: false, errorMessage: "", query: "" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleFetchNews.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.loading = false;
    });
    builder.addCase(handleFetchNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleFetchNews.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default newsSlice.reducer;
