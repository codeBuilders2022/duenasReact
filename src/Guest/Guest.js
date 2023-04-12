import React, { Suspense } from "react";
import HomeRoutes from "./HomeRoutes/HomeRoutes";
import Layout from "../../components/organisms/Layout/Layout";

const Guest = () => {
    return (
        <Layout>
            <HomeRoutes />
        </Layout>
    );
};

export default Guest;
