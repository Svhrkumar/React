import {createStore,combineReducers,compose,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {productReducer} from "./reducers/productReducer"
const initialState = {

}
const composeEnhencer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
    products:productReducer,
}),
initialState,
composeEnhencer(applyMiddleware(thunk))
);

export default store; 