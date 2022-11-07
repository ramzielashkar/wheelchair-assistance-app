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
import { Provider } from 'react-redux';
import { persistor, store } from "./Redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import Protected from "./protectedRoute/protected";
import configureMutations from './query/Mutations';
export const queryClient = new QueryClient();
configureMutations(queryClient)

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

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
          <Protected>
            <Admin/>
          </Protected>
        }>
          <Route path="services" element={
            <Protected>
              <AdminServices/>
            </Protected>
          }>
            <Route path="" element={
              <Protected>
                <ActiveServices/>
              </Protected>
            }>
          </Route>
          <Route path="banned" element={
            <Protected>
              <BannedServices/>
            </Protected>
            }>
          </Route>
          </Route>
          <Route path="clients" element={
            <Protected>
              <AdminClients/>
            </Protected>
          }>
            <Route path="" element={
              <Protected>
                <ActiveClients/>
              </Protected>
            }>
            </Route>
            <Route path="banned" element={
              <Protected>
                <BannedClients/>
              </Protected>
            }>
            </Route>
          </Route>
          <Route path="stats" element={
            <Protected>
             <Statistics/>
            </Protected>
          }>

          </Route>

        </Route>
        <Route path="/service" element={
          <Protected>
          <Service/>
          </Protected>
        }>
          <Route path="followers" element={
            <Protected>
              <ServiceFollowers/>
            </Protected>
          }>

          </Route>
          <Route path="notifications" element={
            <Protected>
              <ServiceNotifications/>
            </Protected>
          }>

          </Route>
          <Route path="profile" element={
            <Protected>
              <Profile/>
            </Protected>
            }>
              <Route path="" element={
                <Protected>
                  <ProfilePicture/>
                </Protected>
              }>

            </Route>
            <Route path="about" element={
              <Protected>
                <About/>
              </Protected>
              }>

            </Route>
            <Route path="pictures" element={
              <Protected>
                <ServicePictures/>
              </Protected>
              }>

            </Route>

          </Route>
          <Route path="chats" element={
            <Protected>
              <Chats/>
            </Protected>
          }>

          </Route>

        </Route>
      </Routes>
   </BrowserRouter>
   </QueryClientProvider>
   </PersistGate>
</Provider>
  );
}

export default App;
