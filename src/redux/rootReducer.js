import { combineReducers } from "redux";

// Reducers
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
     productsState: productsReducer
})

export default rootReducer;