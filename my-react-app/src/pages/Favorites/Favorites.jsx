import React from "react";
import { useEffect, useState } from "react";
import propertyApi from "../../api/api";
import axios from "axios";
import "./Favorites.css";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  async function fetchProperty(propertyId) {
    try {
      const { data } = await propertyApi.get("/favorites");

      const promises = data.map((favorite) => {
        return propertyApi.get(`/properties/${favorite.propertyId}?_embed=favorites`);
      });

      const responses = await Promise.all(promises);

      const favoritesData = responses.map((response) => response.data);

      setFavorites(favoritesData);

      // if (favorites.some((apart) => apart.id === propertyId)) {
      //   console.log("This property is already in favorites");
      //   return;
      // }
    } catch (error) {
      // console.error(error);
    }
  }

  useEffect(() => {
    fetchProperty();
  }, []);

  if (!favorites) {
    return (
      <h2 style={{ textAlign: "center" }}>
        {" "}
        ): ---- You have no properties in your favorites list ---- :({" "}
      </h2>
    );
  }

  const handleFavDelete = async (favoriteId) => {
    try {
      console.log(favoriteId)
      const response = await propertyApi.delete(`/favorites/${favoriteId}`);
      if (response.status === 200) {
        console.log("Fav Deleted:", response.data);
        setFavorites(favorites.filter((apart) => apart.id !== favoriteId));
        // setFavorites(null)
      } else {
        console.error(
          "failed to delete favorite property",
          response.statusText
        );
      }
    } catch (error) {
      console.error("An error occurred while deleting favorite property:", error);
    }
  };

  return (
    <>
      <h1> Favorites</h1>
      <div className="favProperty">
        {favorites.map((apart) => {
          console.log(apart)
          return ( 
            <div className="cardWraper">
              <Link to={"/properties/" + apart.id}>
              <div
                className="card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                <img
                  className={`favImg ${isHovered ? "hovered" : ""}`}
                  src={apart.url}
                  alt=""
                  />
              </div>

              <ul className="propertyDetails">
                <li key={apart.id}>
                  <p>{apart.name}</p>
                  <p>{apart.price}€ </p>{" "}
                </li>
              </ul>
                    </Link>
                  <button
                    className="delete"
                    onClick={() => handleFavDelete(apart.favorites[0].id)}
                    >
                    remove from fav{" "}
                  </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Favorites;
