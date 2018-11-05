import React, { Fragment } from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import { Spring } from "react-spring";
import Header from "./Header";
import Footer from "./Footer";

import {
  Row,
  Col,
  Card,
  CardTitle,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const HomeNav = () => (
  <Fragment>
    <Header />
    <nav className="navHome">
      <Row>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 50 }}
        >
          {props => (
            <Col
              style={props}
              xs={{ size: "6", offset: "6" }}
              sm={{ size: "4", offset: "8" }}
              md={{ size: "3", offset: "8" }}
            >
              <Link
                style={{ fontSize: "20px" }}
                className="text-light border p-2 rounded"
                to="/Help"
              >
                <i className="fas fa-info-circle" /> How to Play?
              </Link>
            </Col>
          )}
        </Spring>
      </Row>
      <CardDeck className="justify-content-center mx-auto mt-5">
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 50 }}
        >
          {props => (
            <Col style={props} md="5" lg="3" className="mb-5">
              <Link to="/Battle">
                <Card className="startfight">
                  <CardBody className="m-3">
                    <CardTitle className="glitch">Start a Battle</CardTitle>
                    <CardSubtitle>Find a Friend &amp; Win!</CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 100 }}
        >
          {props => (
            <Col style={props} md="5" lg="3" className="mb-5">
              <Link to="/Stats">
                <Card className="history">
                  <CardBody className="m-3">
                    <CardTitle>Stats</CardTitle>
                    <CardSubtitle>History &amp; Rankings</CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          )}
        </Spring>
        <Spring
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 1, transform: "translate3d(0px,0,0)" }}
          config={{ delay: 150 }}
        >
          {props => (
            <Col style={props} md="5" lg="3" className="mb-5">
              <Link to="/HeroesListing">
                <Card className="list">
                  <CardBody className="m-3">
                    <CardTitle>Heroes List</CardTitle>
                    <CardSubtitle>About your Heroes</CardSubtitle>
                  </CardBody>
                </Card>
              </Link>
            </Col>
          )}
        </Spring>
      </CardDeck>
    </nav>
    <Footer />
  </Fragment>
);

export default HomeNav;
