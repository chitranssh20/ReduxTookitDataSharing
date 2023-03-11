import {createReducer} from '@reduxjs/toolkit'

const credentials = {
    a : 'romanOne',
}

export const credentialReducer = createReducer(credentials, {
    update: (state, action) =>{
        state.a = action.a;
        console.log('state', state);
        return state
    }
})