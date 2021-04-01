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
// nodejs library that concatenates classes
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Container,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  UncontrolledCarousel,
  Row,
  Col,
  Label
} from "reactstrap";

class Hero extends React.Component {
    state = {};
    toggleModal = state => {
        this.setState({
        [state]: !this.state[state]
        });
    };
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-primary">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="8">
                    <img
                      alt="..."
                      className="img-fluid"
                      src={require("assets/img/brand/applogo-transparent-circle.png")}
                      style={{ width: "300px", backgroundColor:"white", padding:"30px", borderRadius:"50px" }}
                    />
                    <p className="heading-title text-white mt-4">
                      Innovating with simplicity
                    </p>
                    <p className="lead text-white mt-1">
                      Powered by AWS EC2 - made with React, React Native, and some love
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        onClick={() => this.toggleModal("formModal")}
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-desktop" />
                        </span>
                        <span className="btn-inner--text">Go to Dashboard</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">Find us</span>
                          on Github
                        </span>
                      </Button>
                    </div>
                    <div className="mt-5">
                      <a href="https://www.ec.ust.hk/hackathon/2021/home/" >
                        <img height="60" alt="" src={require("assets/img/brand/Group_1.png")}></img>
                      </a>
                    </div>
                    <div className="mt-2">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *proudly hacked by NullBrainException
                      </small>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>

            <Container className="py-md">
                <Row className="justify-content-between align-items-center">
                <Col className="mb-5 mb-lg-0" lg="5">
                    <h1 className="text-white font-weight-light">
                    Redefining Queue
                    </h1>
                    <p className="lead text-white mt-4">
                    Translate your queue to a digital queue seamlessly. 
                    Start and check your queue remotely from your mobile phone.
                    Top up your missed queue without worry.
                    </p>
                    <Button
                    className="btn-white mt-4"
                    color="default"
                    href="https://www.ec.ust.hk/hackathon/2021/home/"
                    >
                    Explore More
                    </Button>
                </Col>
                <Col className="mb-lg-auto" lg="6">
                    <div className="rounded shadow-lg overflow-hidden transform-perspective-right">
                    <UncontrolledCarousel items={items} />
                    </div>
                </Col>
                </Row>
            </Container>
            <div className="separator separator-bottom separator-skew">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
                >
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
            </div>

          </section>
        </div>

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

class Modals extends React.Component {
    state = {};
    toggleModal = state => {
      this.setState({
        [state]: !this.state[state]
      });
    };
    render() {
      return (
        <>
          <h2 className="mt-lg mb-5">
            <span>Javascript Components</span>
          </h2>
          <h3 className="h4 text-success font-weight-bold mb-4">Modals</h3>
          <Row>
            <Col md="4">
              <Button
                block
                className="mb-3"
                color="primary"
                type="button"
                onClick={() => this.toggleModal("defaultModal")}
              >
                Default
              </Button>
              <Modal
                className="modal-dialog-centered"
                isOpen={this.state.defaultModal}
                toggle={() => this.toggleModal("defaultModal")}
              >
                <div className="modal-header">
                  <h6 className="modal-title" id="modal-title-default">
                    Type your modal title
                  </h6>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal("defaultModal")}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                  <p>
                    A small river named Duden flows by their place and supplies it
                    with the necessary regelialia. It is a paradisematic country,
                    in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
                <div className="modal-footer">
                  <Button color="primary" type="button">
                    Save changes
                  </Button>
                  <Button
                    className="ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal("defaultModal")}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="4">
              <Button
                block
                className="mb-3"
                color="warning"
                type="button"
                onClick={() => this.toggleModal("notificationModal")}
              >
                Notification
              </Button>
              <Modal
                className="modal-dialog-centered modal-danger"
                contentClassName="bg-gradient-danger"
                isOpen={this.state.notificationModal}
                toggle={() => this.toggleModal("notificationModal")}
              >
                <div className="modal-header">
                  <h6 className="modal-title" id="modal-title-notification">
                    Your attention is required
                  </h6>
                  <button
                    aria-label="Close"
                    className="close"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal("notificationModal")}
                  >
                    <span aria-hidden={true}>×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="py-3 text-center">
                    <i className="ni ni-bell-55 ni-3x" />
                    <h4 className="heading mt-4">You should read this!</h4>
                    <p>
                      A small river named Duden flows by their place and supplies
                      it with the necessary regelialia.
                    </p>
                  </div>
                </div>
                <div className="modal-footer">
                  <Button className="btn-white" color="default" type="button">
                    Ok, Got it
                  </Button>
                  <Button
                    className="text-white ml-auto"
                    color="link"
                    data-dismiss="modal"
                    type="button"
                    onClick={() => this.toggleModal("notificationModal")}
                  >
                    Close
                  </Button>
                </div>
              </Modal>
            </Col>
            <Col md="4">
              <Button
                block
                color="default"
                type="button"
                onClick={() => this.toggleModal("formModal")}
              >
                Form
              </Button>
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
            </Col>
          </Row>
        </>
      );
    }  
}

class Inputs extends React.Component {
    state = {};
    render() {
      return (
        <>
          <section className="section pb-0 section-components">
            <Container className="mb-5">
              {/* Inputs */}
              <h3 className="h4 text-success font-weight-bold mb-4">Leave Us A Message!</h3>
              <div className="mb-3">
                <small className="text-uppercase font-weight-bold">
                  We will respond back to you shortly!
                </small>
              </div>
              <Row>
                <Col lg="8" sm="6">
                  <FormGroup>
                    <Input placeholder="Email" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Input type="textarea" name="text" id="exampleText" placeholder="Message" style={{height:"100px"}}/>
                  </FormGroup>
                  <Button>Submit</Button>
                </Col>
                </Row>
              </Container>
          </section>
        </>
      );
    }
}  

const items = [
{
    src: require("assets/img/theme/img-1-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
},
{
    src: require("assets/img/theme/img-2-1200x1000.jpg"),
    altText: "",
    caption: "",
    header: ""
}
];

  
class Home extends React.Component{
    render() {
        return(
            <div>
                <Hero />
                <section className="section section-components">
                    <Container>
                        <Inputs />
                    </Container>
                </section>
            </div>
        );
    }
}

export default Home;
