import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
    value: number
 }

const initialState: CounterState = {
    value: 0
} 

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        increment: (state:CounterState) => {
            state.value += 1 
        },
        decrement: (state:CounterState) => {
            state.value -= 1
        },
        incrementByValue: (state:CounterState, action: PayloadAction<number>) => {
            state.value = action.payload
        }

    }
})

export const { increment, decrement, incrementByValue} = counterSlice.actions;
export default counterSlice.reducer;
