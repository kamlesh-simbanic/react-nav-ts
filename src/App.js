import logo from "./logo.svg";
import "./App.css";
import NavItem from "./Component/NavItem";
import Dropdown from "./Component/DropDown";
import NavLink from "./Component/NavLink";

const App = () => {
  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div class="d-flex flex-column align-items-center align-items-sm-start min-vh-100">
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>

            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <NavLink label="Home" url="/" color="white" />

              <Dropdown label="Dashboard" color="white">
                <NavItem>
                  <NavLink label="Item 1" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Item 2" url="/" />
                </NavItem>
              </Dropdown>

              <NavLink label="Orders" url="/" color="white" />

              <Dropdown label="Bootstrap" color="white">
                <NavItem>
                  <NavLink label="Item 1" url="/" />
                </NavItem>
                <NavItem>
                  <NavLink label="Item 2" url="/" />
                </NavItem>
              </Dropdown>

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
