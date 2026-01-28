import { combineReducers } from "redux";
import quizSlice from "../store/quizSlice";

const rootReducer = combineReducers({ quiz: quizSlice });

export default rootReducer;
