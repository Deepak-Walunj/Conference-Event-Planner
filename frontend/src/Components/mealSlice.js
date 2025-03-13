import { createSlice } from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
    name: "meals",
    initialState: [
        { name: 'Breakfast', cost: 15, selected: false},
        { name: 'High Tea', cost: 5, selected: false},
        { name: 'Lunch', cost: 50, selected: false},
        { name: 'Dinner', cost: 60, selected: false},
        { name: 'Beverage', cost: 8, selected: false},
        { name: 'Dessert', cost: 20, selected: false}
    ],
    reducers: {
        toggleMealSelection: (state, action) => {
            state[action.payload].selected = !state[action.payload].selected;
        },
    }
})

export const {toggleMealSelection} = mealsSlice.actions
export default mealsSlice.reducer