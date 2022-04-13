import { combineReducers } from "redux";
import starWars from "./starWars";

export const rootReducer = combineReducers({
  starWars
});

export type RootState = ReturnType<typeof rootReducer>;
