import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebar.css";

function SideBar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-auto min-vh-100 bg-dark">
          <ul>
            <li>
              <a className="nav-link px-2">
                <i className="bi-house" />{" "}
                <span className="ms-1-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link px-2">
                <i className="bi-speedometer" />{" "}
                <span className="ms-1-none d-sm-inline">Speedometer</span>
              </a>
            </li>
            <li>
              <a className="nav-link px-2">
                <i className="bi-table" />{" "}
                <span className="ms-1-none d-sm-inline">Table</span>
              </a>
            </li>
            <li>
              <a className="nav-link px-2">
                <i className="bi-heart" />{" "}
                <span className="ms-1-none d-sm-inline">Heart</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
