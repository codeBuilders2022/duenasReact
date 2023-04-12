import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const App = lazy(() => import("../../../Pages/App/App"));

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
        </Routes>
    );
}

export default HomeRoutes
