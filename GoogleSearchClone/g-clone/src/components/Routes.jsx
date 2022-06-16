import React from "react";

import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Results from "./Results";
import Search from "./Search";

const Routes = ({ setSearch, search }) => {
  const RoutesArr = ["/search", "/images", "/news", "/videos"];

  const allRoutes = RoutesArr.map((item) => {
    return <Route key={`1${item}`} path={item} element={<Results />} />;
  });

  return (
    <div className="p-4">
      <Switch>
        <Route path="/" element={<Navigate to="/search" />} />
        {allRoutes}
      </Switch>
    </div>
  );
};

export default Routes;
