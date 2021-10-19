import { DefaultApi, Phone, PhonesGetRequest, PhonesIdBorrowPostRequest, PhonesPostRequest } from "../generated"

const devicesAPI = new DefaultApi()

export const getDevices = (token: PhonesGetRequest): Promise<Phone[]> => {
   return devicesAPI.phonesGet(token)
}

export const createDevice = (payload: PhonesPostRequest): Promise<Phone> => {
   return devicesAPI.phonesPost(payload)
}

export const borrowDeviceById = (payload: PhonesIdBorrowPostRequest): Promise<Phone> => {
   return devicesAPI.phonesIdBorrowPost(payload)
}