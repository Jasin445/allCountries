import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";


const initialCountryData = {data: null}

const dataReducer: any = createSlice({
    name: 'countryData',
    initialState: initialCountryData,
    reducers: {
        getData(state, action){
            state.data = action.payload;
        }
    }
})


let store = configureStore({
    reducer: {countryData: dataReducer.reducer}
})

export const countryReducerAction = dataReducer.actions

export default store;


