import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import packageImg from '../../../assets/images/package.png'
import ic_excel from '../../../assets/images/ic-excel.svg'
import meetingIcon from '../../../assets/images/meetingIcon.svg'
import icpassword from '../../../assets/images/ic-password.svg'
import icRightArrow from '../../../assets/images/ic-right-arrow.svg'
import ic_movbile_notification from '../../../assets/images/ic_movbile_notification.svg'
import ic_pc from '../../../assets/images/ic-pc.svg'
import user_circle_solid from '../../../assets/images/user-circle-solid.svg'
import car_icon from '../../../assets/images/car_icon.svg'
import { TablePagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GetListNotifications, NotificationsTypes } from '../../../reduxToolkit/Notifications/NotificationsApi';
import NoEvent from '../Events/NoEvent';

const NotificationPanel = () => {
    let body;
    var today = new Date();
    let time_in_miliseconds = today.getTime();
    const dispatch = useDispatch();
    const notificationlist = useSelector(state => state?.NotificationsSlice?.getListNotifications);
    console.log(notificationlist)

    const [toggleState, setToggleState] = useState(1);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);

    const toggleTab = (index) => {
        setToggleState(index);
        setPage(0);
        setRowsPerPage(4);
    }

    useEffect(() => {
        body = {
            date: time_in_miliseconds,
            pagination: {
                order: true,
                page: page,
                size: rowsPerPage,
                sortBy: "id"
            }
        }
        dispatch(GetListNotifications(body));
        dispatch(NotificationsTypes());
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        body = {
            date: time_in_miliseconds,
            pagination: {
                order: true,
                page: newPage,
                size: rowsPerPage,
                sortBy: "id"
            }
        }
        dispatch(GetListNotifications(body));
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value));
        setPage(0);
        body = {
            date: time_in_miliseconds,
            pagination: {
                order: true,
                page: page,
                size: parseInt(event.target.value),
                sortBy: "id"
            }
        }
        dispatch(GetListNotifications(body));
    };


    return (
        <div className="userPanel">
            <div className='head'>
                <div className='headLeft'>
                    <Link to="/dashboard/company">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </Link>
                    <h2>User Docments panel</h2>
                </div>
                <div
                    style={{
                        display: "flex",
                        gridGap: "10px"
                    }}
                >
                    <button
                        className='p-0'
                        style={{
                            height: "38px"
                        }}
                    // onClick={() => setShow(true)}
                    >
                        Export to excel
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                    {
                        toggleState === 1 ?
                            <Link to="/dashboard/company/create-notification">
                                <button
                                    className='p-0'
                                    style={{
                                        height: "38px",
                                        backgroundColor: "#65ABA0"
                                    }}
                                // onClick={() => setShow(true)}
                                >
                                    create notification
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </button>
                            </Link> : null
                    }
                </div>
            </div>

            {/* portfolio-grid */}
            <div className="container mt-5">
                <div className="row steps-row justify-content-between mb-3" id="pills-tab" role="tablist">
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 1 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(1)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Notifications</span>
                        </a>
                    </div>
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 2 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(2)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Access History</span>
                        </a>
                    </div>
                    <div className="col-4 text-center" role="presentation">
                        <a
                            className={`steps btn ${toggleState === 3 ? 'btn-bordered' : ''}`}
                            onClick={() => toggleTab(3)}
                            id="pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#pills-home"
                            type="button"
                            role="tab"
                            aria-controls="pills-home"
                            aria-selected="true"
                        >
                            <span>Logs</span>
                        </a>
                    </div>

                </div>
                <div className="tab-content" id="pills-tabContent">
                    <div
                        className={`${toggleState === 1 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <div className="col-12 mx-auto notifications">
                            {
                                notificationlist?.content?.length !== 0 ?
                                    <>
                                        {
                                            notificationlist?.content?.map(item => (
                                                <div className='notificationBox' key={item?.id}>
                                                    <div className='notificationBox-main'>
                                                        <p className='P1'><img src={packageImg} alt="package" /> Package</p>
                                                        <p className='P2'>Friday 24 de April 2021</p>
                                                    </div>
                                                    <p className='P3'>provider Arrrived</p>
                                                    <p className='P4'>Your package is in the lobby.</p>
                                                </div>
                                            ))
                                        }
                                        <div>
                                            <TablePagination
                                                component="div"
                                                rowsPerPageOptions={[2, 4, 6, 8]}
                                                count={notificationlist?.totalElements}
                                                page={page}
                                                onPageChange={handleChangePage}
                                                labelRowsPerPage="Notifications per page"
                                                rowsPerPage={rowsPerPage}
                                                onRowsPerPageChange={handleChangeRowsPerPage}
                                            />
                                        </div>
                                    </> :
                                    <NoEvent title="Notifications" />
                            }
                        </div>
                    </div>
                    <div
                        className={`${toggleState === 2 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                    >
                        <div className="col-12 mx-auto notifications">
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'>
                                        <img className='main-arrowleft' src={icpassword} alt="package" />
                                        Entry
                                        <img className='main-arrowRight' src={icRightArrow} alt="package" />
                                    </p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>Zone: Meeting Access</p>
                                <p className='P4'>Access with fingerprint {"->"} Successfully</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'>
                                        <img className='main-arrowleft' src={ic_movbile_notification} alt="package" />
                                        Entry
                                        <img className='main-arrowRight' src={icRightArrow} alt="package" />
                                    </p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>Zone: Boss Room</p>
                                <p className='P4' style={{ color: "#BC0000" }}>Access with face recognition {"->"} Failed.</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'>
                                        <img className='main-arrowleft' src={ic_pc} alt="package" />
                                        Exit
                                        <img className='main-arrowRight' src={icRightArrow} alt="package" />
                                    </p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>Zone: Meeting Access</p>
                                <p className='P4'>Access with NFC {"->"} Successfully</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'>
                                        <img className='main-arrowleft' src={icpassword} alt="package" />
                                        Entry
                                        <img className='main-arrowRight' src={icRightArrow} alt="package" />
                                    </p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>Zone: Meeting Access</p>
                                <p className='P4'>Access with fingerprint {"->"} Successfully</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'>
                                        <img className='main-arrowleft' src={icpassword} alt="package" />
                                        Entry
                                        <img className='main-arrowRight' src={icRightArrow} alt="package" />
                                    </p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>Zone: Meeting Access</p>
                                <p className='P4'>Access with fingerprint {"->"} Successfully</p>
                            </div>
                            <div>
                                <TablePagination
                                    component="div"
                                    count={notificationlist?.totalElements}
                                    page="0"
                                    onPageChange={handleChangePage}
                                    labelRowsPerPage="Notifications per page"
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`${toggleState === 3 ? 'tab-pane fade show active ' : 'tab-pane fade'}`}
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                    >
                        <div className="col-12 mx-auto notifications">
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={user_circle_solid} alt="package" style={{ backgroundColor: "#178A7B", borderRadius: "50%" }} /> Update</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>USER: Luis Enrique Cornejo Arreola</p>
                                <p className='P4'>Update a user</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={car_icon} alt="package" /> Create</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>USER: Luis Enrique Cornejo Arreola</p>
                                <p className='P4'>Create an event</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={meetingIcon} alt="package" /> Delete</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>ZONE: Meeting access</p>
                                <p className='P4'>Delete an invitation</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={user_circle_solid} alt="package" style={{ backgroundColor: "#178A7B", borderRadius: "50%" }} /> Update</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>ZONE: Boss room</p>
                                <p className='P4'>Update a event</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={meetingIcon} alt="package" /> Create</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>ZONE: Boss room</p>
                                <p className='P4'>Create a user</p>
                            </div>
                            <div className='notificationBox'>
                                <div className='notificationBox-main'>
                                    <p className='P1'><img src={meetingIcon} alt="package" /> Delete</p>
                                    <p className='P2'>Friday 24 de April 2021</p>
                                </div>
                                <p className='P3'>ZONE: Boss room</p>
                                <p className='P4'>Delete a car</p>
                            </div>
                            <div>
                                <TablePagination
                                    component="div"
                                    count={notificationlist?.totalElements}
                                    page="0"
                                    onPageChange={handleChangePage}
                                    labelRowsPerPage="Notifications per page"
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact-form */}
        </div>
    )
}

export default NotificationPanel