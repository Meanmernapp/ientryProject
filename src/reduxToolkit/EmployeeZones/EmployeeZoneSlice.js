import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const employeeProviderSlice = createSlice({
    name: "employeeZones",
    initialState: {
        getListFatherZones: [],
        getListStatusZone: [],
    },
    reducers: {},
    extraReducers: {
        ["employeeZones/getListFatherZones/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getListFatherZones slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.getListFatherZones = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to fetch data")
            }
        },
        ["employeeZones/getListStatusZone/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from getListStatusZone slice", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.getListStatusZone = data?.data
            }
            else if (status >= 400 && status < 500) {

                toast("Fail to fetch Zone Status")
            }
        },
    },

})

export const { } = employeeProviderSlice.actions;

export default employeeProviderSlice.reducer;