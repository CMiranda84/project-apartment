import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./HomePage.css";
function HomePage() {
  return (
    <Layout>
      <div className="bodyContainer">
        <div className="bodyy">
          <div className="cardGroup">
            <Link className="smallCard" id="cds2" to="/aboutUs">
              <div>
                <h2 className="content-title">About Us</h2>
              </div>
            </Link>
            <Link className="smallCard" id="cds3" to="/newProperty">
              <div>
                <h2 className="content-title">Our Partners</h2>
              </div>
            </Link>
            <Link className="smallCard" id="cds4" to="/properties">
              <div>
                <h2 className="content-title">Talk to Us</h2>
              </div>
            </Link>
            {/* <div className="littleCard" id="cdl1"></div> */}
          </div>
        </div>
        <div className="quote">
          <h1>Find a place to call Home</h1>
        </div>

        <div className="bodyy">
          <div className="cardGroup">
            <Link className="bigCard" id="cd1" to="/favorites">
              <div>
                <h2 className="content-title">Favorites</h2>
              </div>
            </Link>
            <Link className="bigCard" id="cd2" to="/properties">
              <div>
                <h2 className="content-title">Edit Property</h2>
              </div>
            </Link>
            <Link className="bigCard" id="cd3" to="/newProperty">
              <div>
                <h2 className="content-title">Add Property</h2>
              </div>
            </Link>
            <Link className="bigCard" id="cd4" to="/properties">
              <div>
                <h2 className="content-title">All Properties</h2>
              </div>
            </Link>
            {/* <div className="littleCard" id="cdl1"></div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
