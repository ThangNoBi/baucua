import { combineReducers } from "redux";
import BauCuaReducer from "./BauCuaReducer";

const rootReducer = combineReducers({
  //Danh sách các state lưu trên redux
  bauCua: BauCuaReducer,
});

export default rootReducer;
