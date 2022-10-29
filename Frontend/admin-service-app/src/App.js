import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "@fontsource/roboto";
import Admin from "./pages/Admin/Admin";
import AdminServices from "./pages/Admin-ServiceProviders/AdminServices";
import BannedServices from "./pages/BannedServices/BannedServices";
import ActiveServices from "./pages/ActiveServices/ActiveServices";

function App() {
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={
          <Landing/>
        }>
        </Route>
        <Route path="/admin" element={
          <Admin/>
        }>
          <Route path="services" element={
            <AdminServices/>
          }>
            <Route path="active" element={
              <ActiveServices/>
            }>
          </Route>
          <Route path="banned" element={
              <BannedServices/>
            }>
          </Route>


        </Route>
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
