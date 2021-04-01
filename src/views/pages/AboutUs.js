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

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Navbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-primary alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
          <Container>
            <Card className="card-profile shadow mt--300">
                <div className="px-4">
                    <div className="card-profile-image">
                        <a href="https://github.com/rstanuwijaya" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            style={{position:"relative", marginBottom:"-80px"}}
                            src="https://avatars.githubusercontent.com/u/55012032?v=4"
                        />
                        </a>
                    </div>
                  <div className="text-center mt-5">
                    <h3>
                      Randy Stefan Tanuwijaya{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hong Kong
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Creative Designer, Fullstack Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      B.Sc in Physics IRE and Computer Science, HKUST
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>

          <section className="section">
          <Container>
            <Card className="card-profile shadow mt-1">
                <div className="px-4">
                    <div className="card-profile-image">
                        <a href="https://github.com/JosefNatanael" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            style={{position:"relative", marginBottom:"-80px"}}
                            src="https://avatars.githubusercontent.com/u/5724049?v=4"
                        />
                        </a>
                    </div>
                  <div className="text-center mt-5">
                    <h3>
                      Josef Natanael{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hong Kong
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Mobile App Developer, Fullstack Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      B.Sc in Computer Science and Data Science and Technology, HKUST
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>

          <section className="section">
          <Container>
            <Card className="card-profile shadow mt-1">
                <div className="px-4">
                    <div className="card-profile-image">
                        <a href="https://github.com/steinist" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            style={{position:"relative", marginBottom:"-80px"}}
                            src="https://avatars.githubusercontent.com/u/53177084?v=4"
                        />
                        </a>
                    </div>
                  <div className="text-center mt-5">
                    <h3>
                    Steven Indrayana Istimur{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hong Kong
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Mobile App Developer, Marketing
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      BSc. Data Science and Technology, HKUST
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>

          <section className="section">
          <Container>
            <Card className="card-profile shadow mt-1">
                <div className="px-4">
                    <div className="card-profile-image">
                        <a href="https://github.com/samueledward1" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            style={{position:"relative", marginBottom:"-80px"}}
                            src="https://avatars.githubusercontent.com/u/43741823?v=4"
                        />
                        </a>
                    </div>
                  <div className="text-center mt-5">
                    <h3>
                    Samuel Edward Djunarwanto{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hong Kong
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Mobile App Developer, Fullstack Web Developer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      BEng in Computer Science with minor in Big Data, HKUST
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section">
          <Container>
            <Card className="card-profile shadow mt-1">
                <div className="px-4">
                    <div className="card-profile-image">
                        <a href="https://github.com/fpnugraha" onClick={e => e.preventDefault()}>
                        <img
                            alt="..."
                            className="rounded-circle"
                            style={{position:"relative", marginBottom:"-80px"}}
                            src="https://avatars.githubusercontent.com/u/43260872?v=4"
                        />
                        </a>
                    </div>
                  <div className="text-center mt-5">
                    <h3>
                    Ferris Prima Nugraha{" "}
                      <span className="font-weight-light">, 21</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Hong Kong
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      DevOps, Backend Engineer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      BEng in Computer Engineering, HKUST
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          An artist of considerable range, Ryan — the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy —
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
