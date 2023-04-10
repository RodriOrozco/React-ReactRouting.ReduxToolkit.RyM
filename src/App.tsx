import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import { Private } from "./pages/Dashboard/Private";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import AuthGuard from "./guards/auth.guard";
import { RoutesWithNotFound } from "./utilities";
import { Suspense } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";

function App(): JSX.Element {
  return (
    <div className="App">
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
            <RoutesWithNotFound>
              <Route
                path="/"
                element={<Navigate to={PrivateRoutes.PRIVATE} />}
              />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard />}>
                <Route
                  path={`${PrivateRoutes.PRIVATE}/*`}
                  element={<Private />}
                />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </div>
  );
}

export default App;
