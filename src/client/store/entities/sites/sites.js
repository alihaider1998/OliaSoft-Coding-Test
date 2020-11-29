import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";

const slice = createSlice({
  name: 'sites',
  initialState: {
    loading: false,
    list: [],
  },
  reducers: {
    sitesRequested: (stories) => {
      stories.loading = true;
    },
    sitesReceived: (stories, action) => {
      stories.list = action.payload;
      stories.loading = false;
    },
    sitesRequestFailed: (stories) => {
      stories.loading = false;
    },
  },
});

export const {
  sitesRequested,
  sitesReceived,
  sitesRequestFailed,
} = slice.actions;
export default slice.reducer;

const baseUrl = 'http://localhost:3000/api';
const url = '/sites';
export const sitesLoaded = () => apiCallBegan({
  baseUrl,
  url,
  onStart: sitesRequested.type,
  onSuccess: sitesReceived.type,
  onError: sitesRequestFailed.type,
});
