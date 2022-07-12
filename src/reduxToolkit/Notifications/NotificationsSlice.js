import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

const NotificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        getListNotifications: [],
        notificationsTypes: [],
    },
    reducers: {},
    extraReducers: {
        ["notifications/getListNotifications/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.getListNotifications = data
            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
        ["notifications/notificationsTypes/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                state.notificationsTypes = data
            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
        ["notifications/createNotification/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                // state.notificationsTypes = data
                toast.success("Notification Created Successfully..!")

            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
        ["notifications/sendToAllScope/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                // state.notificationsTypes = data
                toast.success("Notification Created Successfully..!")

            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
        ["notifications/sendByTopicScope/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                // state.notificationsTypes = data
                toast.success("Notification Created Successfully..!")

            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
        ["notifications/sendToSomeEmployees/fulfilled"]: (state, action) => {
            const { data, status } = action.payload || {}
            if (status >= 200 && status < 300) {
                // state.notificationsTypes = data
                toast.success("Notification Created Successfully..!")

            }
            else if (status >= 400 && status < 500) {
                toast("Fail to fetch data")
            }
        },
    },

})

export const { } = NotificationsSlice.actions;

export default NotificationsSlice.reducer;