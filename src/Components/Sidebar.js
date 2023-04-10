// import "../assets/sb-admin-2.min.css";
import { Link } from "react-router-dom";
import myrocketsvg from "../img/undraw_rocket.svg";
import React from "react";

export default function Sidebar() {
  function toggleSidebar() {
    document.querySelector("body").classList.toggle("sidebar-toggled");
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  }

  return (
    // <ul
    //   className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    //   id="accordionSidebar"
    // >
    //   <li className="nav-item">
    //     <a
    //       className="nav-link collapsed"
    //       href="#collapseTwo"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#collapseTwo"
    //       aria-expanded="false"
    //     >
    //       <i className="fas fa-fw fa-cog"></i>
    //       <span>Components</span>
    //     </a>
    //     <div
    //       id="collapseTwo"
    //       className="collapse"
    //       aria-labelledby="headingTwo"
    //       data-parent="#accordionSidebar"
    //     >
    //       <div className="bg-white py-2 collapse-inner rounded">
    //         <h6 className="collapse-header">Custom Components:</h6>
    //         <a className="collapse-item">Buttons</a>
    //         <a className="collapse-item">Cards</a>
    //       </div>
    //     </div>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       className="nav-link collapsed sidebarCollapse"
    //       href="#collapseTwo"
    //       data-bs-toggle="collapse"
    //       // data-toggle="collapse"
    //       data-bs-target="#collapseTwo"
    //       aria-expanded="false"
    //       // onClick={() => sidebarCollapse()}
    //     >
    //       <i className="fas fa-fw fa-cog"></i>
    //       <span>Components</span>
    //     </a>
    //     <div
    //       id="collapseTwo"
    //       className="collapse sidebarShow"
    //       aria-labelledby="headingTwo"
    //       data-parent="#accordionSidebar"
    //     >
    //       <div className="bg-white py-2 collapse-inner rounded">
    //         <h6 className="collapse-header">Custom Components:</h6>
    //         <a className="collapse-item" href="www.google.com">
    //           Buttons
    //         </a>
    //         <a className="collapse-item" href="www.google.com">
    //           Cards
    //         </a>
    //       </div>
    //     </div>
    //   </li>
    //   <p>
    //     <a
    //       class="btn btn-primary"
    //       data-bs-toggle="collapse"
    //       href="#collapseExample"
    //       role="button"
    //       aria-expanded="false"
    //       aria-controls="collapseExample"
    //     >
    //       Link with href
    //     </a>
    //     <button
    //       class="btn btn-primary"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#collapseExample"
    //       aria-expanded="false"
    //       aria-controls="collapseExample"
    //     >
    //       Button with data-bs-target
    //     </button>
    //   </p>
    //   <div class="collapse" id="collapseExample">
    //     <div class="card card-body">
    //       Some placeholder content for the collapse component. This panel is
    //       hidden by default but revealed when the user activates the relevant
    //       trigger.
    //     </div>
    //   </div>
    // </ul>
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex nav-link align-items-center justify-content-center"
          to="/dashboard"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#collapseTwo"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/buttons">
                Buttons
              </Link>
              <Link className="collapse-item" to="/cards">
                Cards
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapseUtilities"
            aria-expanded="false"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/colors">
                Colors
              </Link>
              <Link className="collapse-item" to="/borders">
                Borders
              </Link>
              <Link className="collapse-item" to="/animations">
                Animations
              </Link>
              <Link className="collapse-item" to="/other">
                Other
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#collapsePages"
            data-bs-toggle="collapse"
            data-toggle="collapse"
            data-bs-target="#collapsePages"
            aria-expanded="false"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="/login">
                Login
              </Link>
              <Link className="collapse-item" to="/register">
                Register
              </Link>
              <Link className="collapse-item" to="/forgotpassword">
                Forgot Password
              </Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="/page404">
                404 Page
              </Link>
              <Link className="collapse-item" to="/blank">
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
          <Link className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={() => toggleSidebar()}
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src={myrocketsvg}
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  );
}
