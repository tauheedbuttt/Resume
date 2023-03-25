import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { publicRoutes, protectedRoutes } from "./config/routes";
import NoPage from "./components/NoPage";
import './App.css'

const Redirect = ({ element }) => {
  const auth = useSelector((state) => state.auth);
  return auth?.token ? <Navigate to={"/login"} /> : element;
};

console.log(publicRoutes)

function App() {
  return (
    <Routes>
      {publicRoutes?.map((route, index) => (
        <Route key={index} {...route} />
      ))}
      {protectedRoutes?.map((route, index) => (
        <Route
          key={index}
          {...route}
          element={<Redirect {...route} />}
        />
      ))}

      <Route
        path="/"
        element={<Redirect element={<Navigate to={"/resume"} />} />}
      />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
