import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
    name: "meals",
    initialState: [

    ],
    reducers: {
        toggleMealSection: (state, action) =>{

        }
    }
})

export const {toggleMealSection} = mealsSlice.actions
export default mealsSlice.reducer