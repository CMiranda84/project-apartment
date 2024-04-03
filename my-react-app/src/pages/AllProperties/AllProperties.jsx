import React from "react";
import propertyApi from "../../api/api";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AllProperties.css";
// import Favorites from "../Favorites/Favorites";
import SearchPage from "./SearchPage";
import axios from "axios";
const url = "https://ctmapp.adaptable.app/properties?q=";

function AllProperties() {
  const [hoveredPropertyId, setHoveredPropertyId] = useState(null);
  const [allProperties, setAllProperties] = useState(null);
  // const [favorites, setFavorites] = useState([]);
  const [searchString, setSearchString] = useState("");
  // const [searchResults, setSearchResults] = useState([]);


  async function fetchAllproperties() {
    try {
      const response = await propertyApi.get("/properties?name_like=" + searchString);
      setAllProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllproperties();
  }, [searchString]);

  // const [favorites, setFavorites] = useState([]);
  const addFavorites = (property) => {
    propertyApi.post("/favorites", { propertyId: property.id });
    // setFavorites([...favorites, property]);
  };

  if (!allProperties) {
    return <p>no property</p>;
  }

  return (
    <>
      <SearchPage setSearchString={setSearchString} />
      <div className="allProps">
        {allProperties.map((property) => {
          return (
            <div className="allProperties" key={property.id}
            onMouseEnter={() => setHoveredPropertyId(property.id)}
              onMouseLeave={() => setHoveredPropertyId(null)}>
              <Link to={"/properties/" + property.id}>
                <img className= {property.id === hoveredPropertyId ? "favImg hovered" : "favImg"}
                  src={property.url}
                  style={{ height: "16rem" }}
                  alt={"image of" + property.name}
                />
                <h4 className="propertyName">{property.name}</h4>
              </Link>
              <button className="favBtn" onClick={() => addFavorites(property)}>
                Add to Favorites
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default AllProperties;
