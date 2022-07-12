import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiInstance } from '../../Apis/Axios';


//List all the father zones ( pagination)
export const GetListNotifications = createAsyncThunk("notifications/getListNotifications", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`notification-service/get-all-pageable/incoming-date/${body.date}`, body?.pagination).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});

export const NotificationsTypes = createAsyncThunk("notifications/notificationsTypes", async ({ dispatch, getState }) => {

    let result = await apiInstance.get(`notification-service/notification-type/get-all`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});

export const CreateNotification = createAsyncThunk("notifications/createNotification", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`notification-service/create`, body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});

export const SendToAllScope = createAsyncThunk("notifications/sendToAllScope", async (notificationId, { dispatch, getState }) => {

    let result = await apiInstance.get(`notification-service/user-notification/send-to-all/by-notification-id/${notificationId}`).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});

export const SendByTopicScope = createAsyncThunk("notifications/sendByTopicScope", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`notification-service/user-notification/create/by-topic`, body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});

export const SendToSomeEmployees = createAsyncThunk("notifications/sendToSomeEmployees", async (body, { dispatch, getState }) => {

    let result = await apiInstance.post(`notification-service/user-notification/create/by-employees-ids`, body).then(function (response) {
        return response
    }).catch(function (error) {
        return error.response
    })
    const { data: { data }, status } = result

    return { data, status }
});