// src/App.tsx
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const PhotoGallery = lazy(() => import("./components/PhotoGallery"));
const ErrorPage = lazy(() => import("./components/ErrorPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/error" exact>
            <ErrorPage />
          </Route>
          <Route
            path="/"
            exact
            render={() =>
              isAuthenticated ? <PhotoGallery /> : <Redirect to="/login" />
            }
          />
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
