import {configureStore} from '@reduxjs/toolkit'
import { credentialReducer } from './dataReducer'

const store = configureStore({
    reducer: {
        datareducer: credentialReducer
    }
})

export default store