import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Services from "../../../Pages/App/Services/Services";
const App = lazy(() => import("../../../Pages/App/App"));

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";     
import Admin from "../../../Pages/Admin/admin";
const HomeRoutes = () => {
    return (
        <Routes> 
            <Route
                path="/"
                element={
                    <Suspense fallback={<></>}>
                        < App/>
                    </Suspense>
                }
            />
            <Route
                path="/services"
                element={
                    <Suspense fallback={<></>}>
                        <Services/>
                    </Suspense>
                }
            />
             <Route
                path="/admin"
                element={
                    <Suspense fallback={<></>}>
                        <Admin/>
                    </Suspense>
                }
            />

        </Routes>
    );
}

export default HomeRoutes
