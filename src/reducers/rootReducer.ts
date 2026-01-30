import { combineReducers } from "redux";
import quizSlice from "../store/quizSlice";
import authSlice from "../store/authSlice";

const rootReducer = combineReducers({ auth: authSlice, quiz: quizSlice });

export default rootReducer;
