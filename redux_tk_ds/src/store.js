import {configureStore} from '@reduxjs/toolkit'
import  credentialReducer  from './dataReducer'

const store = configureStore({
    reducer: {
        datareducer: credentialReducer
    }
})

store.subscribe(() => {
    console.log(store.getState());
  });
export default store