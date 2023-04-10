import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login/Login";
import Error from "./pages/Error/Error";
import Dashboard from "./pages/Dashboard/Dashboard";
import { PrivateRoutes, PublicRoutes } from "./models/routes";
import AuthGuard from "./guards/auth.guard";

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<Error />} />
          <Route path={PublicRoutes.LOGIN} element={<Login />} />
          <Route element={<AuthGuard />}>
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
