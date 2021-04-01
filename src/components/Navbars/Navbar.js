/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  UncontrolledCarousel,
} from "reactstrap";

class DemoNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out"
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: ""
    });
  };

  state = {};
  toggleModal = state => {
      this.setState({
      [state]: !this.state[state]
      });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  src={require("assets/img/brand/brand-logo.png")}
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img
                          alt="..."
                          src={require("assets/img/brand/brand-logo.png")}
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Solutions</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="https://play.google.com"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <img alt="..." src={require("assets/img/brand/applogo_icon.png")} width="50"/>
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Online Queue
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Revolutuionizing the queueing system
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">About Us</span>
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem to="/about-us" tag={Link}>
                        NullBrainException (NBX)
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.facebook.com/"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Like us on Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.instagram.com/"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Follow us on Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/creativetimofficial/argon-design-system-react"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      Star us on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="d-none d-lg-block ml-lg-4">
                  <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="https://play.google.com"
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-download mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Download
                      </span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      onClick={() => this.toggleModal("formModal")}
                      target="_blank"
                    >
                      <span className="btn-inner--icon">
                        <i className="fa fa-desktop mr-2" />
                      </span>
                      <span className="nav-link-inner--text ml-1">
                        Dashboard
                      </span>
                    </Button>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>

        <Modal
            className="modal-dialog-centered"
            size="sm"
            isOpen={this.state.formModal}
            toggle={() => this.toggleModal("formModal")}
            >
            <div className="modal-body p-0">
                <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                    <small>Sign in with</small>
                    </div>
                    <div className="btn-wrapper text-center">
                    <Button
                        className="btn-icon mt-2 mb-2"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <span className="btn-inner--icon mr-1">
                        <img
                            alt="..."
                            src={require("assets/img/icons/common/github.svg")}
                        />
                        </span>
                        <span className="btn-inner--text">Github</span>
                    </Button>
                    <Button
                        className="btn-icon mt-2 mb-2 ml-1"
                        color="neutral"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <span className="btn-inner--icon mr-1">
                        <img
                            alt="..."
                            src={require("assets/img/icons/common/google.svg")}
                        />
                        </span>
                        <span className="btn-inner--text">Google</span>
                    </Button>
                    </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-5">
                    <div className="text-center text-muted mb-4">
                    <small>Or sign in with credentials</small>
                    </div>
                    <Form role="form">
                    <FormGroup
                        className={classnames("mb-3", {
                        focused: this.state.emailFocused
                        })}
                    >
                        <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-email-83" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Email"
                            type="email"
                            onFocus={e => this.setState({ emailFocused: true })}
                            onBlur={e => this.setState({ emailFocused: false })}
                        />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup
                        className={classnames({
                        focused: this.state.passwordFocused
                        })}
                    >
                        <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                            <i className="ni ni-lock-circle-open" />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            onFocus={e =>
                            this.setState({ passwordFocused: true })
                            }
                            onBlur={e =>
                            this.setState({ passwordFocused: false })
                            }
                        />
                        </InputGroup>
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                        className="custom-control-input"
                        id=" customCheckLogin"
                        type="checkbox"
                        />
                        <label
                        className="custom-control-label"
                        htmlFor=" customCheckLogin"
                        >
                        <span className="text-muted">Remember me</span>
                        </label>
                    </div>
                    <div className="text-center">
                        <Button className="my-4" color="primary" type="button">
                        Sign in
                        </Button>
                    </div>
                    </Form>
                </CardBody>
                </Card>
            </div>
        </Modal>

      </>
    );
  }
}

export default DemoNavbar;
