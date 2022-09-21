import logo from "./logo.svg";
import "./App.css";
import NavItem from "./Component/NavItem";
import Dropdown from "./Component/DropDown";
import NavLink from "./Component/NavLink";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>

            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <NavLink label="Home" url="/" color="white" />

              <NavLink label="Dashboard" url="/" color="white" />

              {/* Nested Dropdown */}
              <Dropdown label="Orders" color="white">
                <NavItem>
                  <NavLink label="Completd Orders" url="/" />
                </NavItem>
                <NavItem>
                  <Dropdown label="Pending Order" color="primary">
                    <NavItem>
                      <NavLink label="Initited Orders" url="/" color="white" />
                    </NavItem>
                    <NavItem>
                      <NavLink label="Ongoing Orders" url="/" color="white" />
                    </NavItem>
                  </Dropdown>
                </NavItem>
              </Dropdown>

              {/* Dropdown */}
              <Dropdown label="Components" color="white">
                <NavItem>
                  <NavLink label="Label" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Input Form" url="/" />
                </NavItem>
              </Dropdown>

              {/* Dropdown */}
              <Dropdown label="Products" color="white">
                <NavItem>
                  <NavLink label="Product 1" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Product 2" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Product 3" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Product 4" url="/" />{" "}
                </NavItem>
              </Dropdown>

              <NavLink label="Customers" url="/customers" color="white" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
