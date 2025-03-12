import { createSlice } from "@reduxjs/toolkit";

export const venueSlice = createSlice({
    name: "venue",
    initialState:[
        {
        img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
        name: "Conference Room (Capacity:15)",
        cost: 3500,
        quantity: 0,
        },
        {
        img: "https://pixabay.com/images/download/event-venue-1597531_640.jpg",
        name: "Auditorium Hall (Capacity:200)",
        cost: 5500,
        quantity: 0,
        },
        {
        img: "https://pixabay.com/images/download/convention-center-3908238_640.jpg",
        name: "Presentation Room (Capacity:50)",
        cost: 700,
        quantity: 0,
        },
        {
        img: "https://pixabay.com/images/download/chairs-2181916_640.jpg",
        name: "Large Meeting Room (Capacity:10)",
        cost: 900,
        quantity: 0,
        },
        {
        img: "https://pixabay.com/images/download/laptops-593296_640.jpg",
        name: "Small Meeting Room (Capacity:5)",
        cost: 1100,
        quantity: 0,
        },
    ],
    reducers:{
        incrementQuantity: (state, action) => {
            const item = state[action.payload]
            if (item){
                if(item.name === "Auditorium Hall (Capacity:200)" && item.quantity >= 10){
                    return
                }
                if (item.name === "Large Meeting Room (Capacity:10)" && item.quantity >= 10){
                    return
                }   
                if(item.name ===  "Presentation Room (Capacity:50)" && item.quantity >= 10){
                    return
                }
                if (item.name === "Small Meeting Room (Capacity:5)" && item.quantity >= 10){
                    return
                }
                if(item.name === "Conference Room (Capacity:15)" && item.quantity >= 10){
                    return
                }
                item.quantity++
            }
            },
        decrementQuantity: (state, action) => {
            const item = state[action.payload]
            if (item && item.quantity>0){
                item.quantity--
            }
            },
    }
})

export const { incrementQuantity, decrementQuantity } = venueSlice.actions;

export default venueSlice.reducer;
