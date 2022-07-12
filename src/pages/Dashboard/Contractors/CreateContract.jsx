import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SaveIcon from "@mui/icons-material/Save";

import {
  Checkbox,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import { Box } from "@mui/system";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AccessRightCard from "../Company/Employees/AccessRightCard";
import { Button } from "react-bootstrap";
import apiInstance from "../../../Apis/Axios";
import axios from "axios";
import { useEffect } from "react";
// import { useDispatch,useSelector } from "react-redux";
// import { GetEmployeeContractor } from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsApi";
// import { getAllcontractorss } from "../../../reduxToolkit/EmployeeContractors/EmployeeContractorsSlice";
export const CreateContractor = () => {
  // let dispatch = useDispatch();
  const [contractor, setContractor] = useState();
  const [deliveryDate, setdeliveryDate] = useState();
  const [item, setItem] = useState();
  const [serviceType, setServiceType] = useState();
  const [description, setDescription] = useState();
  const [checkboxState, setCheckboxState] = useState(false);
  const [startContract, setstartContract] = useState();
  const [endContract, setendContract] = useState();

 

  const miliseconds = 1604395966369;
  const date = new Date(miliseconds);
  var startContractSeconds = new Date(startContract); // some mock date
  var startMilliseconds = startContractSeconds.getTime(); 

  var endContractSeconds = new Date(endContract); // some mock date
  var endMilliseconds = endContractSeconds.getTime(); 
  
  // This will return you the number of milliseconds
  // elapsed from January 1, 1970 
  // if your date is less than that date, the value will be negative
  
  console.log("start miliseconds",startMilliseconds);
  console.log("End miliseconds",endMilliseconds);

  console.log("delivery date",deliveryDate ,"start contract",startContract,"Description",description);

  const [getAllContractor, setAllContractor] = useState([]);

  const workSchdule = async () => {
    const result = await apiInstance
      .get("work-shift-service/get-all")
      .then(function (response) {
        console.log("Result data", response);
        return response;
      })
      .catch(function (error) {
        return error.response;
      });
  };

  const allContractors = async () => {
    const result = await apiInstance.get("contractor-service/get-all").then(function (response) {
        setAllContractor(response.data.data);
      })
      .catch(function (error) {
        return error.response;
      });
  };

  const handleSubmit = async() => {
    const data= [ 
      {
        "id": 1,
      },
      {
        "id": 2,
      },
    ]
    
    const result = await apiInstance.post("contractor-service/create",).then(function (response) {
    })
    .catch(function (error) {
      return error.response;
    });

  };

  useEffect(() => {
    // dispatch(GetEmployeeContractor());
    // workSchdule();
    allContractors();
  }, []);
  // const s = useSelector(getAllcontractorss);

  // console.log("get from slice",s);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="head">
          <h2>
            <Link to="/dashboard/company">
              <ArrowBackIcon
                style={{
                  color: "#146F62",
                  fontSize: "30px",
                  marginRight: "30px",
                }}
              />
            </Link>
            CREATE Contract
          </h2>
        </div>
        <div className="mt-5 order_data_component">
          <p className="__header">CONTRACT DATA</p>
          <div className="formCard">
            <div className="mt-2 __body">
              <Box
                style={{ width: "390px", marginLeft: "15px" }}
                className="inputField"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    CHOOSE A CONTRACTOR
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="CHOOSE A PROVIDER"
                    value={contractor}
                    onChange={(e) => setContractor(e.target.value)}
                  >
                    {getAllContractor &&
                      getAllContractor.map((item, index) => {
                        console.log("xyz", item?.user?.name);
                        return (
                          <MenuItem value={item?.id} key={index}>
                            {item?.user?.name}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Box>
              <div className="col-md-12 d-flex">
                <Box
                  style={{ width: "100%", marginRight: "68px" }}
                  className="inputField"
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="START CONTRACT"
                        inputFormat="MM/dd/yyyy"
                        value={startContract}
                        onChange={setstartContract}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
                <Box style={{ width: "100%" }} className="inputField">
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                      <DesktopDatePicker
                        label="END CONTRACT"
                        inputFormat="MM/dd/yyyy"
                        value={endContract}
                        onChange={setendContract}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Box>
              </div>
              <div className="col-md-12">
                <TextField
                  className="inputField"
                  fullWidth
                  id="outlined-multiline-static"
                  label="Description"
                  multiline
                  rows={4}
                  placeholder={"Type some description if necessary..."}
                  // defaultValue="Type some description if necessary..."
                  style={{ color: "#707070" }}
                  onChange={(e)=>(setDescription(e.target.value))}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 access_right_component">
          <p className="__header">ACCESS RIGHTS</p>
          <div className="mt-2  __body">
            <div className="__upper d-flex">
              <Box
                style={{ width: "459px", marginLeft: "15px" }}
                className="inputField"
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    SCHEDULE ACCESS
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="CHOOSE A PROVIDER"
                    value={contractor}
                    onChange={(e) => setContractor(e.target.value)}
                  >
                    <MenuItem value={1}>Saturday Shift</MenuItem>
                    <MenuItem value={2}>Sunday Shift</MenuItem>
                    <MenuItem value={3}>Manager Shift</MenuItem>
                    <MenuItem value={4}>General Worker Shift</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <p>
                <Checkbox
                  defaultChecked={false}
                  onChange={() => setCheckboxState(!checkboxState)}
                  style={{ marginLeft: "37px" }}
                />
                OR CUSTOM SCHEDULE
              </p>
            </div>
            {checkboxState && (
              <div className="__accessbody">
                <p className="mt-2 separator">
                  Or Choose <br />
                  Custom Schedule
                </p>
                <AccessRightCard
                  heading1="zones"
                  heading2="days"
                  update
                  isAddemployee={true}
                />
              </div>
            )}
          </div>
          <div className="btnDiv">
            <Button className="createContactBtn">
              CREATE CONTRACT
              <SaveIcon style={{ marginLeft: "10px" }} />
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};
