import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./HomePage.css";
function HomePage() {
  return (
    <Layout>
      {/* <div className="bodyy">

<div className="bigCard">
        </div>
<div className="bigCard">
        </div>
<div className="bigCard">
        </div>
<div className="bigCard">
        </div>
<div className="littleCard">
        </div>
<div className="littleCard">
        </div>
<div className="littleCard">
        </div>
<div className="littleCard">
        </div>
      </div> */}


      <div className="homePage">
        
        <Link className="navLink" to="/properties">
          <div className="firstContent">
            <div className="contentBody">
              <h3 className="content-title">All Properties</h3>
            </div>
          </div>
        </Link>
        <Link className="navLink" to="/newProperty">
          <div className="secondContent">
            <div className="contentBody">
              <h3 className="content-title">Add Property</h3>
            </div>
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default HomePage;
