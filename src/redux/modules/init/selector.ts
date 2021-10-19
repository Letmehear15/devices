import { RootState } from "../../store";

const selectInitReducer = (state: RootState) => state.initReducer

export const selectInitStatus = (state: RootState) => selectInitReducer(state).isAppInit