import { Phone } from "../../../api/generated";
import { RootState } from "../../store";

const selectDeviceReducer = (state: RootState) => state.deviceReducer

export const selectDevices = (state: RootState) => selectDeviceReducer(state).devices

export const selectFetchStatus = (state: RootState) => selectDeviceReducer(state).status

export const hasToBeSorted = (state: RootState) => {
    const {sortOs, sortVendor, areAllowed} =  selectDeviceReducer(state)
    return sortOs !== 'All' || sortVendor !== 'All' || areAllowed
}

export const selectSortedDevices = (state: RootState) => {
    const {sortOs, sortVendor, devices, areAllowed} = selectDeviceReducer(state)

    let sortedDevices = [] as Phone[]

    if(sortOs !== 'All') {
        sortedDevices = [...devices.filter(device => device.os === sortOs)]
    }
    if(sortVendor !== 'All') {
        sortedDevices = [...devices.filter(device => device.vendor?.toLowerCase() === sortVendor.toLowerCase())]
    }

    if(sortOs !== 'All' && sortVendor !== 'All') {
        sortedDevices = [...devices.filter(device => device.os === sortOs && device.vendor?.toLowerCase() === sortVendor.toLowerCase())]
    }

    if(areAllowed) {
        const areSortedDevices = sortedDevices.length && sortOs !== 'All' && sortVendor !== 'All'
        const sortingArray = areSortedDevices ? sortedDevices : devices
        sortedDevices = sortingArray.filter(device => !Boolean(device.borrowed?.user))
    }

    return sortedDevices
}