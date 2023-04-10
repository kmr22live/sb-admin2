import mysvg from "../img/undraw_profile.svg";
import profilesvg1 from "../img/undraw_profile_1.svg";
import profilesvg2 from "../img/undraw_profile_2.svg";
import profilesvg3 from "../img/undraw_profile_3.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "bootstrap";

export default function Nav() {
  const [showButton, setShowButton] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  function toggleSidebarsmall() {
    document.querySelector("body").classList.toggle("sidebar-toggled");
    document.getElementById("accordionSidebar").classList.toggle("toggled");
  }

  function removeShowClass(a) {
    a !== "messagesDropdownid" &&
      document
        .querySelectorAll(".messagesDropdownid")
        .forEach((d) => d.classList.remove("show"));
    a !== "searchDropdownid" &&
      document
        .querySelectorAll(".searchDropdownid")
        .forEach((d) => d.classList.remove("show"));
    a !== "alertsDropdownid" &&
      document
        .querySelectorAll(".alertsDropdownid")
        .forEach((d) => d.classList.remove("show"));
    a !== "userDropdownid" &&
      document
        .querySelectorAll(".userDropdownid")
        .forEach((d) => d.classList.remove("show"));
  }
  function alertsDropdown() {
    removeShowClass("alertsDropdownid");
    document
      .querySelectorAll(".alertsDropdownid")
      .forEach((d) => d.classList.toggle("show"));
  }
  function messagesDropdown() {
    removeShowClass("messagesDropdownid");
    document
      .querySelectorAll(".messagesDropdownid")
      .forEach((d) => d.classList.toggle("show"));
  }
  function searchDropdown() {
    removeShowClass("searchDropdownid");
    document
      .querySelectorAll(".searchDropdownid")
      .forEach((d) => d.classList.toggle("show"));
  }
  function userDropdown() {
    removeShowClass("userDropdownid");
    document
      .querySelectorAll(".userDropdownid")
      .forEach((d) => d.classList.toggle("show"));
  }
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
          onClick={() => toggleSidebarsmall()}
        >
          <i className="fa fa-bars"></i>
        </button>

        {/* <!-- Topbar Search --> */}
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          <li
            className="nav-item dropdown no-arrow d-sm-none searchDropdownid"
            id="searchDropdownid"
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              onClick={() => searchDropdown()}
              id="searchDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i className="fas fa-search fa-fw"></i>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in searchDropdownid"
              aria-labelledby="searchDropdown"
            >
              <form className="form-inline mr-auto w-100 navbar-search">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control bg-light border-0 small"
                    placeholder="Search for..."
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button">
                      <i className="fas fa-search fa-sm"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* <!-- Nav Item - Alerts --> */}
          <li
            className="nav-item dropdown no-arrow mx-1 alertsDropdownid"
            id="alertsDropdown"
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              onClick={() => alertsDropdown()}
              id="alertsDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i className="fas fa-bell fa-fw"></i>
              {/* <!-- Counter - Alerts --> */}
              <span className="badge badge-danger badge-counter">3+</span>
            </a>
            {/* <!-- Dropdown - Alerts --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in alertsDropdownid"
              aria-labelledby="alertsDropdown"
            >
              <h6 className="dropdown-header">Alerts Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-primary">
                    <i className="fas fa-file-alt text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 12, 2019</div>
                  <span className="font-weight-bold">
                    A new monthly report is ready to download!
                  </span>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-success">
                    <i className="fas fa-donate text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 7, 2019</div>
                  $290.29 has been deposited into your account!
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="mr-3">
                  <div className="icon-circle bg-warning">
                    <i className="fas fa-exclamation-triangle text-white"></i>
                  </div>
                </div>
                <div>
                  <div className="small text-gray-500">December 2, 2019</div>
                  Spending Alert: We've noticed unusually high spending for your
                  account.
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Show All Alerts
              </a>
            </div>
          </li>

          {/* <!-- Nav Item - Messages --> */}
          <li
            className="nav-item dropdown no-arrow mx-1 messagesDropdownid"
            id="messagesDropdownid"
          >
            <a
              className="nav-link dropdown-toggle"
              href="#"
              onClick={() => messagesDropdown()}
              id="messagesDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <i className="fas fa-envelope fa-fw"></i>
              {/* <!-- Counter - Messages --> */}
              <span className="badge badge-danger badge-counter">7</span>
            </a>
            {/* <!-- Dropdown - Messages --> */}
            <div
              className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in messagesDropdownid"
              aria-labelledby="messagesDropdown"
            >
              <h6 className="dropdown-header">Message Center</h6>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={profilesvg1} alt="..." />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">
                    Hi there! I am wondering if you can help me with a problem
                    I've been having.
                  </div>
                  <div className="small text-gray-500">Emily Fowler · 58m</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={profilesvg2} alt="..." />
                  <div className="status-indicator"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    I have the photos that you ordered last month, how would you
                    like them sent to you?
                  </div>
                  <div className="small text-gray-500">Jae Chun · 1d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={profilesvg3} alt="..." />
                  <div className="status-indicator bg-warning"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Last month's report looks great, I am very happy with the
                    progress so far, keep up the good work!
                  </div>
                  <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                </div>
              </a>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <div className="dropdown-list-image mr-3">
                  <img
                    className="rounded-circle"
                    src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                    alt="..."
                  />
                  <div className="status-indicator bg-success"></div>
                </div>
                <div>
                  <div className="text-truncate">
                    Am I a good boy? The reason I ask is because someone told me
                    that people say this to all dogs, even if they aren't
                    good...
                  </div>
                  <div className="small text-gray-500">
                    Chicken the Dog · 2w
                  </div>
                </div>
              </a>
              <a
                className="dropdown-item text-center small text-gray-500"
                href="#"
              >
                Read More Messages
              </a>
            </div>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <a
              className="nav-link dropdown-toggle userDropdownid"
              href="#"
              onClick={() => userDropdown()}
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="true"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Mohan
              </span>
              <img className="img-profile rounded-circle" src={mysvg} />
            </a>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in userDropdownid"
              aria-labelledby="userDropdown"
            >
              <a className="dropdown-item" href="#">
                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                Profile
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                Settings
              </a>
              <a className="dropdown-item" href="#">
                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                Activity Log
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </nav>
      {showButton && (
        <a
          className="scroll-to-top rounded d-block z-index-20"
          style={{
            zIndex: "3",
          }}
          onClick={scrollToTop}
          href="#page-top"
        >
          <i className="fas fa-angle-up"></i>
        </a>
      )}

      <div
        className="modal fade"
        id="logoutModal"
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <Link to="/login">
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-dismiss="modal"
                >
                  Logout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
