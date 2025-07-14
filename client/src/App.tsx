import { Routes, Route, useLocation } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";

// common
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import CarSearch from "./pages/CarSearch";
import BookingsPage from "./pages/BookingsPage";
import Footer from "./components/Footer";

// admin components

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  const loadingIcon = document.getElementById('loading-icon');
  if(loadingIcon) loadingIcon.remove();

  return (
    <>
      <Toaster />
      {!isAdminRoute && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:carId" element={<CarDetails />}/>
        <Route path="/car-search" element={<CarSearch />}/>
        <Route path="/bookings/userId" element={<BookingsPage />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App;