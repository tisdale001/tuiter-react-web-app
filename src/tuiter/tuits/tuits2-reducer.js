import { createSlice } from "@reduxjs/toolkit";
import tuits2 from './tuits2.json';

const tuitsSlice = createSlice({
    name: 'tuits2',
    initialState: tuits2
});

export default tuitsSlice.reducer;

