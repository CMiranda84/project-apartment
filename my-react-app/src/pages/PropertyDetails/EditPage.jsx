import React from "react";
import { useState, useEffect } from "react";
import propertyApi from "../../api/api";
import { useParams } from "react-router-dom";


function EditPage() {
  const {propertyId} = useParams()
  const [editData, setEditData] = useState({
    name: "",
    country: "",
    city: "",
    space: "",
    description: "",
    property_type: "",
    accommodates: 0,
    bathrooms: 0,
    bedrooms: 0,
    beds: 0,
    price: 0,
    review_scores_rating: 0,
    url: "",
  });

  useEffect(() => {
    propertyApi
      .get(`/properties/${propertyId}`)
      .then((response) => {
        setEditData({
          name: response.data.name,
          country: response.data.country,
          city: response.data.city,
          space: response.data.space,
          description: response.data.description,
          property_type: response.data.property_type,
          accommodates:response.data.accommodates,
          bathrooms:response.data.bathrooms,
          bedrooms:response.data.bedrooms,
          beds:response.data.response,
          price:response.data.price,
          review_scores_rating:response.data.review_scores_rating,
          url: response.data.url
        });
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };
  const handleEditProperty = async () => {
    try {
      const response = await propertyApi.put(
        `/properties/${propertyId}`,
        editData
      );
      console.log("Property updated:", response.data);
      setProperty(response.data); // Atualiza o estado da propriedade com os novos dados
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>EditPage</h1>
      <form className="creationBody" onSubmit={handleEditProperty}>
      <label>Name</label>
        <input
          className="createInput"
          type="text"
          name="name"
          placeholder="Name of the property"
          value={editData.name}
          onChange={handleChange}
        />
        <label>Country</label>
        <input
          className="createInput"
          type="text"
          name="country"
          placeholder="Country of the property"
          value={editData.country}
          onChange={handleChange}
        />
        <label>City</label>
        <input
          className="createInput"
          type="text"
          name="city"
          placeholder="City of the property"
          value={editData.city}
          onChange={handleChange}
        />
        <label>Space</label>
        <input
          className="createInput"
          type="text"
          name="space"
          placeholder="details of the property's space"
          value={editData.space}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          className="createInput"
          type="text"
          name="description"
          placeholder="description of the property "
          rows="3"
          value={editData.description}
          onChange={handleChange}
        />
        <label>Type</label>
        <input
          className="createInput"
          type="text"
          name="property_type"
          placeholder="property type"
          value={editData.property_type}
          onChange={handleChange}
        />
        <label>Accommodates</label>
        <input
          className="createInput"
          type="number"
          name="accommodates"
          placeholder="max number of accommodates"
          value={editData.accommodates}
          onChange={handleChange}
          min={1}
        />
        <label>Bathrooms</label>
        <input
          className="createInput"
          type="number"
          name="bathrooms"
          placeholder="number of bathrooms"
          value={editData.bathrooms}
          onChange={handleChange}
          min={0}
        />
        <label>Bedrooms</label>
        <input
          className="createInput"
          type="number"
          name="bedrooms"
          placeholder="number of bedrooms"
          value={editData.bedrooms}
          onChange={handleChange}
          min={0}
        />
        <label>Beds</label>
        <input
          className="createInput"
          type="number"
          name="beds"
          placeholder="number of beds"
          value={editData.beds}
          onChange={handleChange}
          min={0}
        />
        <label>Price</label>
        <input
          className="createInput"
          type="number"
          name="price"
          placeholder="price of the rent per day in €"
          value={editData.price}
          onChange={handleChange}
          min={0}
        />
        <label>Rating</label>
        <input
          className="createInput"
          type="number"
          name="review_scores_rating"
          placeholder="scores rating"
          value={editData.review_scores_rating}
          onChange={handleChange}
          min={0}
        />
        <label>Image</label>
        <input
          className="createInput"
          type="text"
          name="url"
          placeholder="property Image"
          value={editData.url}
          onChange={handleChange}
        />

        <button type="button" onClick={handleEditProperty}>
          Save changes
        </button>
      </form>
    </div>
  );
}

export default EditPage;
