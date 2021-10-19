import { BorrowedObj, EditPhone, Phone, PhonesIdBorrowPostRequest, PhonesPostRequest } from "../../../api/generated"
import { getTokenFromLocalStorage } from "../../../utils/localstorage"

export enum VendorsEnum {
    APPLE = 'apple',
    ACER = 'acer',
    SAMSUNG = 'samsung',
    MOTOROLA = 'motorola',
    HUAWEI = 'huawei',
    LG = 'lg',
    VODAFONE = 'vodafone',
    ASUS = 'asus',
    XIAOMI = 'xiaomi',
    LENOVO = 'lenovo'  
} 

export const getVendors = () => Object.keys(VendorsEnum)

export const payloadForCreatingDevice = (payload: EditPhone): PhonesPostRequest => {
    const {authToken} = getTokenFromLocalStorage()
    return {
        authToken,
        editPhone: payload
    }
}


export const payloadForBorrowDevice = (id: string): PhonesIdBorrowPostRequest => {
    const {authToken} = getTokenFromLocalStorage()
    return {
        authToken,
        id
    }
}


type SetBorrowedInStateArgs = {
    devices: Phone[],
    borrowedId: string,
    borrowed: BorrowedObj | undefined
}

export const setBorrowedInState = ({borrowed, devices, borrowedId}: SetBorrowedInStateArgs) => {
    if(borrowed) {
        return devices.map(device => {
            if(device.id === borrowedId) {
                return {
                    ...device,
                    borrowed: {
                        date: borrowed.date,
                        user: borrowed.user
                    }
                }
            }
            return device
        })
    }
    return devices
}