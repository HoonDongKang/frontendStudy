import { createSlice } from '@reduxjs/toolkit'

export interface TempState {
    tempValue: string
    count: number
}

const initialState: TempState = {
    tempValue: '',
    count: 3,
}

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        //action
        setTemp: (state, payload) => {
            state.tempValue = payload.payload
        },
        setCount: (state, payload) => {
            state.count = payload.payload
        },
    },
})

export const { setTemp, setCount } = tempSlice.actions

export default tempSlice.reducer
