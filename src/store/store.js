import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addData(state, action) {
            state.data = action.payload;
        },
        onDelete(state, action) {
            state.data = state.data.filter(ele => ele.id !== action.payload)
        },
        onUpdate(state, action) {
            const newData = action.payload;

            state.data.map(ele => {
                if (ele.id === newData.id) {
                    ele.address.suite = newData.input;
                    ele.address.street = "";
                    ele.address.city = "";
                    ele.address.zipcode = "";
                }
            })

        },
    },
});

const store = configureStore({
    reducer: dataSlice.reducer,
});
export const dataActions = dataSlice.actions;
export default store;
