import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";

export const slice = createSlice({
  name: 'sites',
  initialState: {
    loading: true,
    list: [],
  },
  reducers: {
    sitesRequested: (sites,action) => {
      sites.loading = action.payload;
    },
    sitesReceived: (sites, action) => {
      sites.list = action.payload;
      sites.loading = false;
    },
    sitesRequestFailed: (sites) => {
      sites.loading = false;
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
