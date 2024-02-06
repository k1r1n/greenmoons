import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./containers/Login";
import { NotFound } from "./containers/errors";
import { routerPath } from "./constants/routerPath";
import { Favorite } from "./containers/Favorite";
import { Finder } from "./containers/Finder";
import "./index.css";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuth = !!sessionStorage.getItem("user");

  return isAuth ? children : <Navigate to={routerPath.login} replace />;
};

export const Router = () => {
  return (
    <React.Fragment>
      <RecoilRoot>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path={routerPath.star} element={<NotFound />} />
            <Route
              path={routerPath.root}
              element={
                <ProtectedRoute>
                  <Finder />
                </ProtectedRoute>
              }
            />
            <Route
              path={routerPath.favorite}
              element={
                <ProtectedRoute>
                  <Favorite />
                </ProtectedRoute>
              }
            />
            <Route path={routerPath.login} element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<Router />);
