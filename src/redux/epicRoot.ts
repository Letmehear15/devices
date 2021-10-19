import { combineEpics } from "redux-observable";
import authEpic from './modules/auth/epic'
import initEpic from './modules/init/epic'
import deviceEpic from './modules/device/epic'
import routeEpic from './modules/router/epic'

export const epicRoot = combineEpics<any>(authEpic, initEpic, deviceEpic, routeEpic)