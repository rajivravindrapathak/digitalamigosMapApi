import React from "react";
import HeaderCom from "../components/Header";
import { Route, Routes } from "react-router-dom";
import MapPage from "../pages/MapPage";
import MapData from "../pages/MapData";

const AllRoutes = () => {

    return ( 
        <>
            <HeaderCom />
            <Routes>
                <Route path="/" element={ <MapPage /> } />
                <Route path="/mapdata" element={ <MapData /> } />
            </Routes>
        </>
    );
}

export default AllRoutes;