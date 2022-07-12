import {createSlice } from "@reduxjs/toolkit";
import {GetEmployeeContractor} from "./EmployeeContractorsApi"
import { toast } from 'react-toastify';

const employeeContractorSlice = createSlice({
    name: "employeeContractor",
    initialState: {
        createContract: [],

    },
    reducers: {
       
    },
    extraReducers: {
        [GetEmployeeContractor.fulfilled]: (state, action) => {
            const { data, status } = action.payload || {}
            console.log("from slice ", data)
            if (status >= 200 && status < 300) {
                toast(data.message)
                state.createContract = data
            }
            else if (status >= 400 && status < 500) {
                // state.errorCreateCutomer= data.errors
                toast("Fail to Create Contract")
            }
        },
    }
})

export const { } = employeeContractorSlice.actions;
export const getAllcontractorss = (state) => state.EmployeeContractors.createContract
export default employeeContractorSlice.reducer;