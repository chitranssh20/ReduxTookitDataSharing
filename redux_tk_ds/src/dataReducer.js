import {createSlice} from '@reduxjs/toolkit'

const credentials = {
    a : 'romanOne',
}

const credentialReducer = createSlice({
    name: 'datareducer',
    initialState: credentials,
    reducers: {

        update: (state, action) =>{
            state.a = action.payload;
        }
    }
});
export const {update} =  credentialReducer.actions; 
export default credentialReducer.reducer