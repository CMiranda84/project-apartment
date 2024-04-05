import React, { useState } from "react";
import axios from "axios";
import propertyApi from "../../api/api";
import { useNavigate } from "react-router-dom";
import "./CreateProperty.css"
const addBg = "../../../public/image/addhouse.jpg"

function CreateProperty() {
  const navigate = useNavigate();
  /////////////// variables to store values of the apart description input /////////////

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [space, setSpace] = useState("");
  const [description, setDescription] = useState("");
  const [property_type, setProperty_type] = useState("");
  const [accommodates, setAccommodates] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [beds, setBeds] = useState("");
  const [price, setPrice] = useState("");
  const [review_scores_rating, setReview_scores_rating] = useState("");
  const [url, setUrl] = useState("");

  /////////////// functions handling the inputs ///////////////////////////
  const handleName = (e) => setName(e.target.value);
  const handleCountry = (e) => setCountry(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleSpace = (e) => setSpace(e.target.value);
  const handleDescription = (e) => setDescription(e.target.value);
  const handleProperty_type = (e) => setProperty_type(e.target.value);
  const handleAccommodates = (e) => setAccommodates(e.target.value);
  const handleBathrooms = (e) => setBathrooms(e.target.value);
  const handleBedrooms = (e) => setBedrooms(e.target.value);
  const handleBeds = (e) => setBeds(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  const handleReview_scores_rating = (e) =>
    setReview_scores_rating(e.target.value);
  const handleUrl = (e) => setUrl(e.target.value);
  /////////////////////////// function///////////////////////////////
  const handleCreate = async (event) => {
    event.preventDefault()
    try {
        
    const newProperty = {
        name,
        country,
        city,
        space,
        description,
        property_type,
        accommodates,
        bathrooms,
        bedrooms,
        beds,
        price,
        review_scores_rating,
        url,
      };
      const response = await propertyApi.post("/properties", newProperty);
    //   console.log(response);
      navigate("/properties");
    } catch (error) {
      console.log(error);
    }
  };
//   handleCreate();

  return (
    <>
      
      <div className="addBody">
    <div className="AddImg">
      <h1>Add your Property</h1> 
        <img className="addBg" src={addBg} alt="" />
    </div>
    <div className="creation">

        <form className="creationBody" onSubmit={handleCreate}>
          <label>Name</label>
          <input
            className="createInput"
            type="text"
            name="name"
            placeholder="property name"
            value={name}
            onChange={handleName}
            />
          <label>Country</label>
          <input
            className="createInput"
            type="text"
            name="country"
            placeholder="country of the property"
            value={country}
            onChange={handleCountry}
          />
          <label>City</label>
          <input
            className="createInput"
            type="text"
            name="city"
            placeholder="City of the property"
            value={city}
            onChange={handleCity}
            />
          <label>Space</label>
          <input
            className="createInput"
            type="text"
            name="space"
            placeholder="details of the property's space"
            value={space}
            onChange={handleSpace}
            />
          <label>Description</label>
          <textarea 
            className="createInput"
            type="text"
            name="description"
            placeholder="description of the property "
            rows="3"
            value={description}
            onChange={handleDescription}
            />
          <label>Type</label>
          <input
            className="createInput"
            type="text"
            name="property_type"
            placeholder="property type"
            value={property_type}
            onChange={handleProperty_type}
          />
          <label>Accommodates</label>
          <input
            className="createInput"
            type="number"
            name="accommodates"
            placeholder="max number of accommodates"
            value={accommodates}
            onChange={handleAccommodates}
            min={1}
          />
          <label>Bathrooms</label>
          <input
            className="createInput"
            type="number"
            name="bathrooms"
            placeholder="number of bathrooms"
            value={bathrooms}
            onChange={handleBathrooms}
            min={0}
          />
          <label>Bedrooms</label>
          <input
            className="createInput"
            type="number"
            name="bedrooms"
            placeholder="number of bedrooms"
            value={bedrooms}
            onChange={handleBedrooms}
            min={0}
            />
          <label>Beds</label>
          <input
            className="createInput"
            type="number"
            name="beds"
            placeholder="number of beds"
            value={beds}
            onChange={handleBeds}
            min={0}
          />
          <label>Price</label>
          <input
            className="createInput"
            type="number"
            name="price"
            placeholder="price of the rent per day in €"
            value={price}
            onChange={handlePrice}
            min={0}
            />
          <label>Rating</label>
          <input
            className="createInput"
            type="number"
            name="review_scores_rating"
            placeholder="scores rating"
            value={review_scores_rating}
            onChange={handleReview_scores_rating}
            min={0}
            />
          <label>Image</label>
          <input
            className="createInput"
            type="text"
            name="url"
            placeholder="property Image"
            value={url}
            onChange={handleUrl}
          /> 
          <button className="addPropertyBtn" >Add Property</button>
        </form>
            </div>
      </div>
    </>
  );
}

export default CreateProperty;
