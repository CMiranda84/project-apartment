import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./pages/NavBar/NavBar";
import AllProperties from "./pages/AllProperties/AllProperties";
import PropertyDetailsPage from "./pages/PropertyDetails/PropertyDetailsPage";
import Favorites from "./pages/Favorites/Favorites";
import Layout from "./pages/Layout/Layout";
import CreateProperty from "./pages/CreateProperty/CreateProperty";
import EditPage from "./pages/PropertyDetails/EditPage";
import AboutUs from "./pages/AllProperties/AboutUs";
// import { useState } from "react";
// import propertyApi from "./api/api";
// import SideBar from "./pages/SideBar/SideBar";


function App() {

  
 

  return (
    <Layout>
      <NavBar />
      {/* <SideBar /> */}

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
            />
          }
        />
        <Route path="/properties" element={<AllProperties />} />
        <Route
          path="/properties/:propertyId"
          element={<PropertyDetailsPage />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/newProperty" element={<CreateProperty />} />
        <Route path="/properties/:propertyId/:editPage" element={<EditPage />} />
        <Route path="/aboutUs" element={<AboutUs/>} />

      </Routes>
    </Layout>
  );
}

export default App;
