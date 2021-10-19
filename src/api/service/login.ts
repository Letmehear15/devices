import { DefaultApi, LoginPostRequest, User, UsersIdGetRequest, UserWithToken } from "../generated";

const loginAPI = new DefaultApi()

export const login = (payload: LoginPostRequest):Promise<UserWithToken> => {
    return loginAPI.loginPost(payload)
}
export const getUser = (payload: UsersIdGetRequest):Promise<User> => {
    return loginAPI.usersIdGet(payload)
}