import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiInstance } from '../../Apis/Axios'


export const GetEmployeeContractor = createAsyncThunk("employeeContractor/getEmployeeContractor", async (params, { dispatch, getState }) => {

    const { user } = params || {};
    let result = await apiInstance.post('contractor-service/create',).then(function (response) {
            console.log("this is th store call",response)
            return response
        }).catch(function (error) {
            return error.response
        })
    const { data, status } = result
    return { data, status }
});