import { Routes, Route, useLocation } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";

// common
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import CarSearch from "./pages/CarSearch";
import BookingsPage from "./pages/BookingsPage";
import Footer from "./components/Footer";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/adminxowner/Dashboard";
import AddCar from "./pages/adminxowner/AddCar";
import ManageCars from "./pages/adminxowner/ManageCars";
import { useEffect } from "react";
import { useTheme } from "./hooks/useTheme";
import ManageBookings from "./pages/adminxowner/ManageBookings";
// import MobileSearchBar from "./components/MobileSearchBar";

// admin components

const App = () => {
  const isOwnerRoute = useLocation().pathname.startsWith('/owner');
  const loadingIcon = document.getElementById('loading-icon');
  if(loadingIcon) loadingIcon.remove();
  const {entryTheme, theme} = useTheme();

  useEffect(() => {
    entryTheme();
    
  }, []);

  return (
    <>
      <Toaster />
      <NavBar />
      {/* {!isAdminRoute && <MobileSearchBar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:carId" element={<CarDetails />}/>
        <Route path="/car-search" element={<CarSearch />}/>
        <Route path="/bookings/:userId" element={<BookingsPage />} />

        <Route path="/owner/*" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
      {!isOwnerRoute && <Footer />}
    </>
  )
}

export default App;