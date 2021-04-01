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

function PersonCard(props) {
    return(
        <Card className={"card-profile shadow " + props.cardStyle}>
        <div className="px-4">
            <div className="card-profile-image">
                <a href={props.href} onClick={e => e.preventDefault()}>
                <img
                    alt="..."
                    className="rounded-circle"
                    style={{position:"relative", marginBottom:"-80px"}}
                    src={props.src}
                />
                </a>
            </div>
          <div className="text-center mt-5">
            <h3>
              {props.name}{" "}
              <span className="font-weight-light">, 21</span>
            </h3>
            <div className="h6 font-weight-300">
              <i className="ni location_pin mr-2" />
              {props.location}
            </div>
            <div className="h6 mt-4">
              <i className="ni business_briefcase-24 mr-2" />
              {props.role}
            </div>
            <div>
              <i className="ni education_hat mr-2" />
              {props.education}
            </div>
          </div>
          <div className="mt-5 py-5 border-top text-center">
            <Row className="justify-content-center">
              <Col lg="9">
                <p>
                  {props.quote}
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Card>

    );
}

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
                <PersonCard 
                href="https://github.com/rstanuwijaya" 
                src="https://avatars.githubusercontent.com/u/55012032?v=4"
                name="Randy Stefan Tanuwijaya"
                age="21"
                location="Hong Kong"
                role="Creative Designer, Fullstack Web Developer"
                education="B.Sc in Physics IRE and Computer Science, HKUST"
                quote="
                    Curious student who loves to seek challanges and solve them,
                    a passionate physicist, and a hobbyist developer.
                    Loves cooking and watching movies.
                    Think like a scientist, work like an engineer.
                "
                cardStyle="mt--300"
            />
            </Container>
          </section>

          <section className="section">
          <Container>
            <PersonCard 
                href="https://github.com/JosefNatanael" 
                src="https://avatars.githubusercontent.com/u/5724049?v=4"
                name="Josef Natanael"
                age="21"
                location="Hong Kong"
                role="Tech Lead, Mobile App Developer"
                education="B.Sc in Computer Science and Data Science and Technology, HKUST"
                quote="
                    An artist of considerable range, Ryan — the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy —
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                "
                cardStyle="mt-1"
            />
            </Container>
          </section>

          <section className="section">
          <Container>
            <PersonCard 
                href="https://github.com/steinist" 
                src="https://avatars.githubusercontent.com/u/53177084?v=4"
                name="Steven Indrayana Istimur"
                age="20"
                location="Hong Kong"
                role="Mobile App Developer, Marketing"
                education="BSc. Data Science and Technology, HKUST"
                quote="
                    An artist of considerable range, Ryan — the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy —
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                "
                cardStyle="mt-1"
            />
            </Container>
          </section>

          <section className="section">
          <Container>
            <PersonCard 
                href="https://github.com/samueledward1" 
                src="https://avatars.githubusercontent.com/u/43741823?v=4"
                name="Samuel Edward Djunarwanto"
                age="20"
                location="Hong Kong"
                role="Cheerleader, Mobile App Developer (as a millionaire)"
                education="BEng in Computer Science with minor in Big Data, HKUST"
                quote="
                    An artist of considerable range, Ryan — the name taken
                    by Melbourne-raised, Brooklyn-based Nick Murphy —
                    writes, performs and records all of his own music,
                    giving it a warm, intimate feel with a solid groove
                    structure. An artist of considerable range.
                "
                cardStyle="mt-1"
            />
            </Container>
          </section>
          
          <section className="section">
          <Container>
            <PersonCard 
                    href="https://github.com/schwarz11" 
                    src="https://avatars.githubusercontent.com/u/49577069?v=4"
                    name="Ferris Prima Nugraha"
                    age="21"
                    location="Hong Kong"
                    role="DevOps, Backend Engineer"
                    education="BEng in Computer Engineering with minor in Physics, HKUST"
                    quote="
                        An artist of considerable range, Ryan — the name taken
                        by Melbourne-raised, Brooklyn-based Nick Murphy —
                        writes, performs and records all of his own music,
                        giving it a warm, intimate feel with a solid groove
                        structure. An artist of considerable range.
                    "
                    cardStyle="mt-1"
            />
            </Container>
          </section>

        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Profile;
