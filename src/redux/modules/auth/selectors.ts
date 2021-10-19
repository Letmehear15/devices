import { RootState } from "../../store";

const selectAuthReducer = (state: RootState) => state.authReducer

export const selectAuthStatus = (state: RootState) => selectAuthReducer(state).status

export const selectUserInfo = (state: RootState) => selectAuthReducer(state).user

export const selectUserRole = (state: RootState) => selectAuthReducer(state).user.type

