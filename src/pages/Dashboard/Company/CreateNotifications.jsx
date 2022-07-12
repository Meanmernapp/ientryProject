import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { DesktopDatePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../../assets/images/person.png'
import { useState } from 'react';
import { CreateNotification, SendByTopicScope, SendToAllScope, SendToSomeEmployees } from '../../../reduxToolkit/Notifications/NotificationsApi';
import { toast } from 'react-toastify';

const inputLableProps = {
    style: {
        fontSize: "10px",
        fontWeight: 600,
        background: "#ffffff",
        padding: "0px 0px 0px 4px",
    },
}

const textinputProps = {
    sx: {
        border: "none",
        outline: "none",
        fontSize: "10px",
        letterSpacing: "0px",
        color: "#707070",
        "&::placeholder": {
            color: "#707070",
            fontSize: "12px",
        },
    },
}

const CreateNotifications = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let scope = ['ALL ( EMPLOYEES, SUPPLIERS , CONTRACTORS)', 'ONLY EMPLOYEES', 'ONLY CONTRACTORS', 'ONLY SUPPLIERS', 'CHOOSE SOME EMPLOYEES']
    let notifyType = ['MEETING', 'AD', 'OTHER'];
    const dispatch = useDispatch();
    // const notificationTypes = useSelector(state => state?.NotificationsSlice?.notificationsTypes);
    // console.log(notificationTypes)

    const [title, setTitle] = useState();
    const [message, setMessage] = useState();
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [type, setType] = useState();
    const [selectedScope, setSelectedScope] = useState();
    const [selectedType, setSelectedType] = useState();


    const handleCreate = () => {
        const body = {
            dateMeeting: 0,
            // file: "string",
            // image: "string",
            message: message,
            notificationType: {
                id: 0,
                name: "AD"
            },
            title: title,
            type: type,
        }

        dispatch(CreateNotification(body))
            .then(({ payload: { data: { data } } }) => {
                // console.log(data)
                if (selectedScope === scope[0]) {
                    dispatch(SendToAllScope(data?.id))
                        .then(({ payload: { data: { data } } }) => {
                            toast.success("sent to all")
                        })
                }
                if (selectedScope === scope[1] || scope[2] || scope[3]) {
                    const body = {
                        notificationId: data?.id,
                        topic: selectedScope === scope[1] ? "EMPLOYEE" : selectedScope === scope[2] ? "PROVIDER" : selectedScope === scope[3] ? "CONTRACTOR" : ""
                    }
                    dispatch(SendByTopicScope(body))
                        .then(({ payload: { data: { data } } }) => {
                            toast.success(`sent to ${selectedScope}`)
                        })
                }
                if (selectedScope === scope[4]) {
                    const body = {
                        employeesIds: [
                            "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                        ],
                        notificationId: data?.id
                    }
                    dispatch(SendToSomeEmployees(body))
                        .then(({ payload: { data: { data } } }) => {
                            toast.success("sent to some employees")
                        })
                }
            })
    }

    return (
        <div className='row createNotification'>
            <div className="head">
                <div className='headLeft'>
                    <Link to="/dashboard/company/notification-panel">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>Create Notification</h2>
                </div>
            </div>
            <div className="col-8 mx-auto mt-5">
                <div className="subTitle">
                    <p>Data</p>
                    <hr style={{ width: "87%" }} />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            size="small"
                            label="TITLE"
                            defaultValue=" "
                            id="TITLE"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            InputLabelProps={inputLableProps}
                            inputProps={textinputProps}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                NOTIFICATION TYPE
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue="NOTIFICATION TYPE"
                                label="NOTIFICATION TYPE"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                sx={{
                                    fontSize: "14px",
                                }}
                            >
                                {
                                    notifyType.map(item => (
                                        <MenuItem
                                            value={item}
                                            sx={{
                                                fontSize: "14px",
                                            }}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="Diego´s Birthday"
                            label="MESSAGE"
                            defaultValue=" "
                            id="MESSAGE"
                            multiline={true}
                            rows="3"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            InputLabelProps={inputLableProps}
                            inputProps={textinputProps}
                        />
                    </Grid>
                    {
                        selectedType === 'MEETING' ?
                            <Grid item xs={12} md={6} className="notificationDate">
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        ampm={false}
                                        openTo="hours"
                                        views={["hours", "minutes", "seconds"]}
                                        inputFormat="HH:mm:ss"
                                        mask="__:__:__"
                                        className="timeInput"
                                        label="TIME"
                                        value={time}
                                        onChange={(e) => setTime(e)}
                                        sx={{ width: '100%' }}
                                    />
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack>
                                        <DesktopDatePicker
                                            renderInput={(params) => <TextField {...params} />}
                                            label="DATE"
                                            inputFormat="dd/MM/yyyy"
                                            textFieldStyle={{ width: '100%' }}
                                            disablePast
                                            value={date}
                                            onChange={(e) => setDate(e)}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </Grid> : null
                    }
                    {
                        selectedType === 'OTHER' ?
                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="TYPE"
                                    defaultValue=" "
                                    id="NAME"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    InputLabelProps={inputLableProps}
                                    inputProps={textinputProps}
                                />
                            </Grid> : null
                    }
                </Grid>

                <div className="subTitle mt-3">
                    <p>Scope</p>
                    <hr style={{ width: "87%" }} />
                </div>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                PEOPLE
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                defaultValue="PEOPLE"
                                label="PEOPLE"
                                value={selectedScope}
                                onChange={(e) => setSelectedScope(e.target.value)}
                                sx={{
                                    fontSize: "14px",
                                }}
                            >
                                {
                                    scope?.map(item => (
                                        <MenuItem
                                            value={item}
                                            sx={{
                                                fontSize: "14px",
                                            }}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {
                    selectedScope === 'CHOOSE SOME EMPLOYEES' ?
                        <>
                            <p className='empTitle'>employees</p>
                            <p className='chooseEmp'>CHOOSE EMPLOYEES TO SEND IT</p>
                            <div className="row">
                                {
                                    arr.map(item => (
                                        <div className="col-6">
                                            <div className="empBox">
                                                <div className="leftSide">
                                                    <img src={profile} className="empImg" alt="img" />
                                                    <div className='textFields'>
                                                        <p>
                                                            <span>Name: </span>Luis Enrique Cornejot
                                                        </p>
                                                        <p>
                                                            <span>Phone Number: </span>4427065909
                                                        </p>
                                                        <p>
                                                            <span>Role: </span>Empleado General
                                                        </p>
                                                    </div>
                                                </div>
                                                <label className="container1">
                                                    <input
                                                        type="checkbox"
                                                        name="check"
                                                    // checked={value.check}
                                                    // onChange={(e) => handleCheckBox(e, value)}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </> : null
                }
                <div className="createBtns">
                    <Link to="/dashboard/company/notification-panel" className="previousBtn">
                        Cancel
                    </Link>
                    <button
                        className="nextBtn"
                        onClick={handleCreate}
                    >
                        Create Notification
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateNotifications