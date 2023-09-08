import { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import {Routes, Route, Link} from "react-router-dom";
import Products from "./Pages/Products";
import Users from "./Pages/Users";
import ProductDetail from "./Pages/Products/Detail";


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar color="light" dark={false} expand="md">
        <NavbarBrand href="/">Ejercicio Router</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="users">Usuarios</Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="products">
                Productos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className="container">
        <div className="row">
        <Routes>
            <Route path="/users" element={<Users/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/detail/:productId" element={<ProductDetail/>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
