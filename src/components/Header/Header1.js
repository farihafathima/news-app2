import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavLink,Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,InputGroup, Input, Button,UncontrolledDropdown} from 'reactstrap';

const Header1 = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const[inputvalue,setInputValue]=useState('')
  const[totalInput,setTotalInput]=useState('')
  let Heading='Top-Headings'

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setTotalInput(inputvalue);
    props.searchHandler(totalInput);
    console.log(totalInput);
  };
  
 
  const clickHandler = (e) => {
    e.preventDefault();
    props.categoreyHandler(e.target.value);
  };
  const inputHandler=e=>{
    setInputValue(e.target.value)
  }
  const topHeadingsHandler=(e)=>{
    e.preventDefault()
    props.topHandler()

  }
  const readLinesHandler=(e)=>{
    e.preventDefault()
    props.readLinesHandler()
  }
  return (
    <>
    <Navbar className="navbar-dark bg-dark text-light" light expand="md">
      <NavbarBrand href="/">News</NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
          <InputGroup className='d-flex justify-content-evenly'>
          <Input
              type="text"
              placeholder="Enter Text Here"
              className="w-50"
              value={inputvalue} // Set the value to category.categoryName
              onChange={inputHandler}// Update the categoryName state
            />

                <Button color="primary d-inline" onClick={submitHandler}>Search</Button>
            </InputGroup>
          </NavItem>
          <NavItem>
            <NavLink href="/topHeadings" className="text-light" onClick={topHeadingsHandler}>Top Headings</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/readList" className="text-light" onClick={readLinesHandler}>ReadList</NavLink>
          </NavItem>
          <NavItem>
          <UncontrolledDropdown nav inNavbar  >
              <DropdownToggle nav caret>
                Categories
                </DropdownToggle>
              <DropdownMenu right >
                <DropdownItem onClick={clickHandler} value="business">
                  Business
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="entertainment">
                  Entertainment
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="general">
                  General
                  </DropdownItem>
                  <DropdownItem onClick={clickHandler} value="health">
                  Health
                  </DropdownItem>
                <DropdownItem onClick={clickHandler} value="sports">
                  Sports
                  </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
   
    </>
  );
};

export default Header1;
