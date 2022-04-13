import {createStore} from 'redux'
import { doctorReducer } from './reducer'


export const store = createStore(doctorReducer);