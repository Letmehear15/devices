import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Loading } from '../../components/Loading'
import { borrowDevice, fetchDevices, hasToBeSorted, selectDevices, selectFetchStatus, selectSortedDevices } from '../../redux/modules/device'
import { Devices } from './Devices'

export const DevicesContainer = () => {
    const devices = useSelector(selectDevices)
    const sortedDevices = useSelector(selectSortedDevices)
    const shouldSort = useSelector(hasToBeSorted)
    const {loading} = useSelector(selectFetchStatus)
    const dispatch = useDispatch()

    const onBorrow = useCallback((id: string) => {
        dispatch(borrowDevice(id))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchDevices())
    }, [dispatch])

    if(loading) {
        return <Loading/>
    }

    return (
        <Devices devices={shouldSort ? sortedDevices : devices} onBorrow={onBorrow}/>
    )
}
