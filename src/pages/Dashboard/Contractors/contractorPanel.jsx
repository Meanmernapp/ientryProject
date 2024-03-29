import { useState } from "react";
import search from "../../../assets/images/search.svg";
import filter from "../../../assets/images/filter.svg";
import plus from "../../../assets/images/plus.svg";
import file from "../../../assets/images/file.svg";
import { Link } from "react-router-dom";
import CustomDropDown from "../../../components/CustomDropDown";
import ProviderDropDown from "../Providers/SubComponents/providerDropDown";
import MUIDataTable from "mui-datatables";
import ProvidersFilterModal from "../Providers/ProviderModels/providersFilterModal";
import IncomingModel from "../Events/IncomingModel";

const ContractorPanel = () => {
  const [show, setShow] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  const [dropDownProps, setDropDownProps] = useState({
    panel: "contractor",
    firstItem: "ALLOW EVENT",
    secondItem: "VIEW DETAILS",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showIncome, setShowIncome] = useState(false);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const columns = [
    {
      name: "COMPANY",
      label: "COMPANY NAME",
      options: {
        filter: true,
      },
    },
    {
      name: "MANAGER",
      label: "MANAGER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "STATUS",
      label: "STATUS",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "EMAIL",
      label: "EMAIL",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "NUMBER",
      label: "NUMBER",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "OPTION",
      label: "OPTION",
      options: {
        filter: true,
        sort: false,
      },
    },
  ];

  const data = [
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps} />,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps} />,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps} />,
    },
    {
      COMPANY: "Joe James",
      MANAGER: "Test Corp",
      STATUS: "for approving documents",
      EMAIL: "NY",
      NUMBER: "NY",
      OPTION: <ProviderDropDown dropDownProps={dropDownProps} />,
    },
  ];
  const options = {
    filterType: "checkbox",
  };
  return (
    <div className="providersPanel contractors">
      <div className="head">
        <div className="headLeft">
          <h2>CONTRACTORS PANEL</h2>
        </div>
      </div>
      {/* portfolio-grid */}
      <div className="container">
        <div className="row steps-row mb-3" id="pills-tab" role="tablist">
          <div className="col-6 tab" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 1 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(1)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>CONTRACTS</span>
            </a>
          </div>
          <div className="col-6 tab tab-right" role="presentation">
            <a
              className={`steps btn ${
                toggleState === 2 ? "active-border" : "disable-border"
              }`}
              onClick={() => toggleTab(2)}
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              <span>CONTRACTORS</span>
            </a>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div
            className={`${
              toggleState === 1 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="orders">
              <div className="head d-flex justify-content-end">
                <Link to={"create-order"}>
                  <button className="me-2" onClick={() => setShow(true)}>
                    CREATE CONTRACT
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </button>
                </Link>
                <div className="d-flex">
                  {toggleState === 1 && (
                    <i
                      class="fa fa-filter filterPopup"
                      aria-hidden="true"
                      onClick={() => setShowIncome(true)}
                    ></i>
                  )}
                </div>
                {showIncome && <IncomingModel setShowIncome={setShowIncome} />}

              </div>
              <div className="row">
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text-blue">Finished</div>
                    <div className="status-indicator-blue"></div>
                  </div>
                  <div className="contract-no">Contract #104</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo <br /> Arreola
                  </div>
                  <div className="card-headings ibl">
                    <span>IBL |</span>
                  </div>
                  <div className="delivery-info">
                    <div className="delivery-info-row">
                      <div className="faded-headings">ETA</div>
                      <div className="card-headings">26/08/2023 11:30</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Item </div>
                      <div className="card-headings">5 boxes of Soap</div>
                    </div>
                    <div className="description delivery-info-row">
                      <div className="faded-headings">Description</div>
                      <div className="card-headings">ítems fragile</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                  </div>

                  <Link to={"contractor-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text">Active</div>
                    <div className="status-indicator"></div>
                  </div>
                  <div className="contract-no">Contract #104</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo <br /> Arreola
                  </div>
                  <div className="card-headings ibl">
                    <span>IBL |</span>
                  </div>
                  <div className="delivery-info">
                    <div className="delivery-info-row">
                      <div className="faded-headings">ETA</div>
                      <div className="card-headings">26/08/2023 11:30</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Item </div>
                      <div className="card-headings">5 boxes of Soap</div>
                    </div>
                    <div className="description delivery-info-row">
                      <div className="faded-headings">Description</div>
                      <div className="card-headings">ítems fragile</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                  </div>

                  <Link to={"contractor-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
                <div className="col-3 orderCard">
                  <div className="status">
                    <div className="status-text">Active</div>
                    <div className="status-indicator"></div>
                  </div>
                  <div className="contract-no">Contract #104</div>
                  <div className="employee-name">
                    Luis Enrique Cornejo <br /> Arreola
                  </div>
                  <div className="card-headings ibl">
                    <span>IBL |</span>
                  </div>
                  <div className="delivery-info">
                    <div className="delivery-info-row">
                      <div className="faded-headings">ETA</div>
                      <div className="card-headings">26/08/2023 11:30</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Item </div>
                      <div className="card-headings">5 boxes of Soap</div>
                    </div>
                    <div className="description delivery-info-row">
                      <div className="faded-headings">Description</div>
                      <div className="card-headings">ítems fragile</div>
                    </div>
                    <div className="delivery-info-row">
                      <div className="faded-headings">Corporate</div>
                      <div className="card-headings">IBL Corporate</div>
                    </div>
                  </div>

                  <Link to={"contractor-details"}>
                    <div className="view-details">
                      <a href="">VIEW DETAILS</a>
                      <i className="fa fa-angle-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              toggleState === 2 ? "tab-pane fade show active " : "tab-pane fade"
            }`}
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="providers">
              <div className="row top-buttons">
                <div className="col-3 upload-document">
                  <span>UPLOAD DOCUMENT</span>
                  <Link to={"upload-contractor"}>
                    <img src={file} alt="file" />
                  </Link>
                </div>
                <div className="col-3 add-provider">
                  <span>ADD NEW CONTRACTOR</span>
                  <Link to="add-contractor">
                    <img src={file} alt="file" />
                  </Link>
                </div>
                {/* <div className="col-3 add-provider">
                                    <Link to={'new-providers'}>
                                        <span>ADD NEW PROVIDER</span>
                                        <img src={file} alt="file" />
                                    </Link>
                                </div> */}
              </div>
              <div className="row">
                <div className="col-12">
                  <MUIDataTable
                    title={"type the name to filter"}
                    data={data}
                    columns={columns}
                    options={{
                      selectableRows: false, // <===== will turn off checkboxes in rows
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact-form */}
    </div>
  );
};
export default ContractorPanel;
