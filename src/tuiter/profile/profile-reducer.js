import profileArray from "./profile-array.json"
import { createSlice } from "@reduxjs/toolkit";

const profSlice = createSlice({
    name: "prof",
    initialState: profileArray,
    reducers: {
        updateProfile(state, action) {
            const profile = state.find((profile) => profile._id === action.payload._id);
            profile.firstName = action.payload.firstName;
            profile.lastName = action.payload.lastName;
            profile.bio = action.payload.bio;
            profile.location = action.payload.location;
            profile.website = action.payload.website;
            profile.dateOfBirth = action.payload.dateOfBirth;
        }
    }
})
export const {updateProfile} = profSlice.actions;
export default profSlice.reducer;