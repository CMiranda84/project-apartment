  import React from "react";
  import { useParams } from "react-router-dom";
  import { useEffect, useState } from "react";
  import propertyApi from "../../api/api";
  import "./PropertyDetailsPage.css";
  import { useNavigate } from "react-router-dom";
  import { Link } from "react-router-dom";

  function PropertyDetailsPage() {
    const navigate = useNavigate();

    const [property, setProperty] = useState(null);
    const { propertyId } = useParams();

    useEffect(() => {
      propertyApi
        .get(`/properties/${propertyId}`)
        .then((response) => {
          setProperty(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
    if (!property) {
      return <p>NO Property TO SHOW</p>;
    }

    const handlePropertyDelete = async (propertyId) => {
      try {
        const response = await propertyApi.delete(`/properties/${propertyId}`);

        //  .then((response) => {
        console.log("property Deleted:", response.data);
        setProperty(null); // Remove a propriedade do estado
        //  })
        navigate("/properties");
      } catch (error) {
        console.error(error);
      }
    };

    return (
      <div className="propertyDetailBody">
        {property && (
          <div key={property.id}>
            <img
              src={property.url}
              style={{ height: "19rem" }}
              alt={"image of" + property.name}
            />
            <p> {property.name}</p>
            <p>
              <strong>Country :</strong> {property.country}{" "}
            </p>
            <p>
              <strong>Price :</strong> {property.price}{" "}
            </p>
            <p>
              {" "}
              <strong>City :</strong> {property.city}
            </p>
            <p>
              {" "}
              <strong>Space :</strong> {property.space}
            </p>
            <p>
              {" "}
              <strong>Description :</strong> {property.description}
            </p>
            <p>
              {" "}
              <strong>Property :</strong> {property.property}
            </p>
            <p>
              {" "}
              <strong>Capacity :</strong> {property.capacity}
            </p>
            <p>
              {" "}
              <strong>Bathrooms :</strong> {property.bathrooms}
            </p>
            <p>
              {" "}
              <strong>Bedrooms :</strong> {property.bedrooms}
            </p>
            <p>
              <strong>Cleaning fee :</strong> {property.cleaning_Fee}
            </p>
            <button
              className="delete"
              onClick={() => handlePropertyDelete(property.id)}
            >
              Delete this property{" "}
            </button>
            <Link to={`/properties/${property.id}/editPage`}>
            <button
              className="editbtn"
              // onClick={() => }
            >
              Edit property{" "}
            </button>
              </Link>
          </div>
        )}
      </div>
    );
  }

  export default PropertyDetailsPage;
