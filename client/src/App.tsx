import { Routes, Route, useLocation } from "react-router-dom";

import { Toaster } from "react-hot-toast";

import NavBar from "./components/NavBar";

// common
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import CarSearch from "./pages/CarSearch";
import BookingsPage from "./pages/BookingsPage";
import Footer from "./components/Footer";
// import MobileSearchBar from "./components/MobileSearchBar";

// admin components

const App = () => {
  const isOwnerRoute = useLocation().pathname.startsWith('/owner');
  const loadingIcon = document.getElementById('loading-icon');
  if(loadingIcon) loadingIcon.remove();

  return (
    <>
      <Toaster />
      {!isOwnerRoute && <NavBar />}
      {/* {!isAdminRoute && <MobileSearchBar />} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:carId" element={<CarDetails />}/>
        <Route path="/car-search" element={<CarSearch />}/>
        <Route path="/bookings/userId" element={<BookingsPage />} />
      </Routes>
      {!isOwnerRoute && <Footer />}
    </>
  )
}

export default App;