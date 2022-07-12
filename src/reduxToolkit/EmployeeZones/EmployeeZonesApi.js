import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';


//List all the father zones ( pagination)
export const GetListFatherZones = createAsyncThunk("employeeZones/getListFatherZones", async (params, { dispatch, getState }) => {

    let result = await apiInstance.post(`zone-service/get-zones-and-children`, params?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});

// display all the status in the dropdown
export const GetListStatusZone = createAsyncThunk("employeeZones/getListStatusZone", async (params, { dispatch, getState }) => {

    let result = await apiInstance.get(`status-service/get-all-to-zone`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data, status } = result
    console.log(result)

    return { data, status }
});
