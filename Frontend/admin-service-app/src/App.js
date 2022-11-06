import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "@fontsource/roboto";
import Admin from "./pages/Admin/Admin";
import AdminServices from "./pages/Admin-ServiceProviders/AdminServices";
import BannedServices from "./pages/BannedServices/BannedServices";
import ActiveServices from "./pages/ActiveServices/ActiveServices";
import AdminClients from "./pages/Admin-clients/AdminClients";
import ActiveClients from "./pages/ActiveClients/ActiveClients";
import BannedClients from "./pages/BannedClients/BannedClients";
import Statistics from "./pages/Statistics/Statistics";
import Service from "./pages/Service/Service";
import ServiceFollowers from "./pages/ServiceFollowers/ServiceFollowers";
import ServiceNotifications from "./pages/ServiceNotifications/ServiceNotifications";
import Profile from "./pages/Profile/Profile";
import ProfilePicture from "./pages/ProfilePicture/ProfilePicture";
import About from "./pages/About/About";
import ServicePictures from "./pages/ServicePictures/ServicePictures";
import Chats from "./pages/Chats/Chats";
import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

export const queryClient = new QueryClient();


function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen/>
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
            <Route path="" element={
              <ActiveServices/>
            }>
          </Route>
          <Route path="banned" element={
              <BannedServices/>
            }>
          </Route>
          </Route>
          <Route path="clients" element={
            <AdminClients/>
          }>
            <Route path="" element={
              <ActiveClients/>
            }>
            </Route>
            <Route path="banned" element={
              <BannedClients/>
            }>
            </Route>
          </Route>
          <Route path="stats" element={
            <Statistics/>
          }>

          </Route>

        </Route>
        <Route path="/service" element={
          <Service/>
        }>
          <Route path="followers" element={
            <ServiceFollowers/>
          }>

          </Route>
          <Route path="notifications" element={
            <ServiceNotifications/>
          }>

          </Route>
          <Route path="profile" element={
            <Profile/>
            }>
              <Route path="" element={
              <ProfilePicture/>
              }>

            </Route>
            <Route path="about" element={
              <About/>
              }>

            </Route>
            <Route path="pictures" element={
              <ServicePictures/>
              }>

            </Route>

          </Route>
          <Route path="chats" element={
            <Chats/>
          }>

          </Route>

        </Route>
      </Routes>
   </BrowserRouter>
   </QueryClientProvider>

  );
}

export default App;
