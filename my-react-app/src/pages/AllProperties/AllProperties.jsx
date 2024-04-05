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
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  // const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchAllproperties();
  }, [searchString]);

  async function fetchAllproperties() {
    try {
      let response = "";
      if (selectedPrice) {
        response = await propertyApi.get(
          `/properties?name_like=${searchString}&price_lte=${selectedPrice}`
        );
      } else {
        response = await propertyApi.get(
          "/properties?name_like=" + searchString
        );
      }
      setAllProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    if (allProperties) {
      setFilteredProperties(allProperties);
    }
  }, [allProperties]);

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const filterPropertiesBelowPrice = () => {
    if (selectedPrice && allProperties) {
      const filtered = allProperties.filter(
        (property) => parseFloat(property.price) < parseFloat(selectedPrice)
      );
      setFilteredProperties(filtered);
    }
  };

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
      <div className="filterBody">
        <label htmlFor="price">Filter Properties:</label>
        <select name="price" id="price" onChange={handlePriceChange}>
          <option value="">Select Price</option>
          <option value="100">-100€</option>
          <option value="75">-75€</option>
          <option value="50">-50€</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
        <button onClick={filterPropertiesBelowPrice}>Apply Filter</button>
      </div>
      <div className="allProperties">
      <div className="allProps">
        {filteredProperties.map((property) => {
          return (
            <div
              className="cardWrapper"
              key={property.id}
              onMouseEnter={() => setHoveredPropertyId(property.id)}
              onMouseLeave={() => setHoveredPropertyId(null)}
            >
              <Link to={"/properties/" + property.id}>
               <div className="cardsProps"> 
                  <img
                  className={
                    property.id === hoveredPropertyId
                    ? "favImg hovered"
                    : "favImg"
                  }
                  src={property.url}
                  style={{ height: "16rem" }}
                  alt={"image of" + property.name}
                  /></div>
                <h4 className="propertyName">{property.name}</h4>
                <h4 className="propertyName">{property.price}€</h4>
              </Link>
              <button className="favBtn" onClick={() => addFavorites(property)}>
                Add to Favorites
              </button>
            </div>
          );
        })}
      </div>
      </div>
    </>
  );
}

export default AllProperties;
