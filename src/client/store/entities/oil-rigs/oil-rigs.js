import {createSlice} from '@reduxjs/toolkit';
import {apiCallBegan} from "~store/api";

const slice = createSlice({
  name: 'oilRigs',
  initialState: {
    loading: false,
    list: [],
    detailPageRecords:[],
    rigHeading:[]
  },
  reducers: {
    oilRigsRequested: (oilRigs) => {
      oilRigs.loading = true;
    },
    oilRigsReceived: (oilRigs, action) => {
      oilRigs.list = action.payload;
      oilRigs.loading = false;
    },
    rigsDetail: (oilRigs, action) => {
      oilRigs.detailPageRecords = action.payload;
      oilRigs.loading = false;
    },
    oilRigHeading: (oilRigs, action) => {
      oilRigs.rigHeading = action.payload;
      oilRigs.loading = false;
    },
    oilRigsRequestFailed: (oilRigs) => {
      oilRigs.loading = false;
    },
  },
});

export const {
  oilRigsRequested,
  oilRigsReceived,
  oilRigsRequestFailed,
  rigsDetail,
  oilRigHeading
} = slice.actions;
export default slice.reducer;

const baseUrl = 'http://localhost:3000/api';
const url = '/oil-rigs';
export const oilRigsLoaded = () => apiCallBegan({
  baseUrl,
  url,
  onStart: oilRigsRequested.type,
  onSuccess: oilRigsReceived.type,
  onError: oilRigsRequestFailed.type,

});
