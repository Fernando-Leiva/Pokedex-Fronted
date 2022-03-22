import { createStore , applyMiddleware} from 'redux';
import { countReducer } from './reducer';
import  thunk  from 'redux-thunk'

const middleWare = applyMiddleware(thunk)
export const store = createStore(countReducer, middleWare)