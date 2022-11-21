import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import{userReducer} from "./services/reducers/userReducer"
import { composeWithDevTools } from 'redux-devtools-extension'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

export const store =createStore(userReducer, composedEnhancer)