import logo from "./logo.svg";
import qlogo from "./qcompany.svg";
import qlogolight from "./qlogolight.svg";
import qicon from "./qlogo.svg";
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import menu_icon from "./menu_icon.svg";
import search_icon from "./search_icon.svg";
import close_icon from "./close_icon.svg";
import users_icon from "./users_icon.svg";
import car_icon from "./car_icon.svg";
import location_icon from "./location_icon.svg";
import fuel_icon from "./fuel_icon.svg";
import addIcon from "./addIcon.svg";
import carIcon from "./carIcon.svg";
import carIconColored from "./carIconColored.svg";
import dashboardIcon from "./dashboardIcon.svg";
import dashboardIconColored from "./dashboardIconColored.svg";
import addIconColored from "./addIconColored.svg";
import listIcon from "./listIcon.svg";
import listIconColored from "./listIconColored.svg";
import cautionIconColored from "./cautionIconColored.svg";
import arrow_icon from "./arrow_icon.svg";
import star_icon from "./star_icon.svg";
import check_icon from "./check_icon.svg";
import tick_icon from "./tick_icon.svg";
import delete_icon from "./delete_icon.svg";
import eye_icon from "./eye_icon.svg";
import eye_close_icon from "./eye_close_icon.svg";
import filter_icon from "./filter_icon.svg";
import edit_icon from "./edit_icon.svg";
import calendar_icon_colored from "./calendar_icon_colored.svg";
import location_icon_colored from "./location_icon_colored.svg";
import testimonial_image_1 from "./testimonial_image_1.png";
import testimonial_image_2 from "./testimonial_image_2.png";
import main_car from "./main_car.png";
import banner_car_image from "./banner_car_image.png";
import user_profile from "./user_profile.png";
import upload_icon from "./upload_icon.svg";
import car_image1 from "./car_image1.png";
import car_image2 from "./car_image2.png";
import car_image3 from "./car_image3.png";
import car_image4 from "./car_image4.png";

// payloads
import type { CarPayload } from "../interfaces/interfaces";
import type { ReviewsPayload } from "../interfaces/interfaces";

export const cityList = ["New York", "Los Angeles", "Houston", "Chicago"];

export const assets = {
  logo,
  qlogo,
  qicon,
  qlogolight,
  gmail_logo,
  facebook_logo,
  instagram_logo,
  twitter_logo,
  menu_icon,
  search_icon,
  close_icon,
  users_icon,
  edit_icon,
  car_icon,
  location_icon,
  fuel_icon,
  addIcon,
  carIcon,
  carIconColored,
  dashboardIcon,
  dashboardIconColored,
  addIconColored,
  listIcon,
  listIconColored,
  cautionIconColored,
  calendar_icon_colored,
  location_icon_colored,
  arrow_icon,
  star_icon,
  check_icon,
  tick_icon,
  delete_icon,
  eye_icon,
  eye_close_icon,
  filter_icon,
  testimonial_image_1,
  testimonial_image_2,
  main_car,
  banner_car_image,
  car_image1,
  upload_icon,
  user_profile,
  car_image2,
  car_image3,
  car_image4,
};

export const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Cars", path: "/cars" },
  { name: "My Bookings", path: "/my-bookings" },
];

export const ownerMenuLinks = [
  {
    name: "Dashboard",
    path: "/owner",
    icon: dashboardIcon,
    coloredIcon: dashboardIconColored,
  },
  {
    name: "Add car",
    path: "/owner/add-car",
    icon: addIcon,
    coloredIcon: addIconColored,
  },
  {
    name: "Manage Cars",
    path: "/owner/manage-cars",
    icon: carIcon,
    coloredIcon: carIconColored,
  },
  {
    name: "Manage Bookings",
    path: "/owner/manage-bookings",
    icon: listIcon,
    coloredIcon: listIconColored,
  },
];

export const dummyUserData = {
  _id: "6847f7cab3d8daecdb517095",
  name: "Nduonofit",
  email: "admin@example.com",
  role: "owner",
  image: user_profile,
  isAdmin: false,
};

export const dummyCarData: CarPayload[] = [
  {
    _id: "67ff5bc069c03d4e45f30b77",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "X5",
    image: car_image1,
    year: 2025,
    category: "SUV",
    seating_capacity: 5,
    fuel_type: "Hybrid",
    transmission: "Semi-Automatic",
    pricePerDay: 300,
    location: "New York",
    description: "The 2025 BMW X5 is a luxury mid-size SUV offering advanced plug-in hybrid technology, state-of-the-art driver assistance systems, and refined comfort.",
    isAvailiable: true,
    createdAt: "2025-04-16T07:26:56.215Z",
    features: [
      "xDrive all-wheel drive with intelligent power distribution",
      "Panoramic glass sunroof with electric blinds",
      "Laser headlights with Adaptive LED technology",
      "Advanced Stability Control with dynamic traction management",
    ],
  },
  {
    _id: "67ff6b758f1b3684286a2a65",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "BMW",
    model: "M4 Coupe",
    image: car_image2,
    year: 2020,
    category: "Coupe",
    seating_capacity: 4,
    fuel_type: "Gasoline",
    transmission: "Manual",
    pricePerDay: 130,
    location: "Chicago",
    description:
      "The BMW M4 Coupe (F82) is a high-performance sports coupe with a twin-turbo inline-6 engine, available in multiple trims including standard, Competition, CS, GTS.",
    isAvailiable: true,
    createdAt: "2025-04-16T08:33:57.993Z",
    features: [
      "3.0 L twin-turbocharged inline-6 engine (S55B30)",
      "Rear-wheel drive (electronic limited-slip differential)",
      "Dynamic stability control & traction control",
      "Multi-link independent suspension with adaptive dampers",
    ],
  },
  {
    _id: "67ff6b9f8f1b3684286a2a68",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Tesla",
    model: "Model 3",
    image: car_image3,
    year: 2022,
    category: "Sedan",
    seating_capacity: 5,
    fuel_type: "Electric",
    transmission: "Automatic",
    pricePerDay: 200,
    location: "Los Angeles",
    description:
      "The Tesla Model 3 is a compact all electric sedan offering strong range, tech features and fast acceleration.",
    isAvailiable: true,
    createdAt: "2025-04-16T08:34:39.592Z",
    features: [
      "Electric drivetrain with RWD or AWD dual motor setups",
      "Autopilot with Automatic Emergency Braking & Lane Keep Assist",
      "Large central touchscreen with built-in navigation",
      "Stability Control / Traction Control standard",
    ],
  },
  {
    _id: "68009c93a3f5fc6338ea7e34",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    brand: "Chevrolet",
    model: "Camaro SS",
    image: car_image4,
    year: 2016,
    category: "Coupe",
    seating_capacity: 4,
    fuel_type: "Gasoline",
    transmission: "Manual",
    pricePerDay: 209,
    location: "Houston",
    description:
      "The 2016 Camaro SS is a performance-focused V-8 powered RWD coupe, combining strong acceleration, manual gearbox and sporty handling.",
    isAvailiable: true,
    createdAt: "2025-04-17T06:15:47.318Z",
    features: [
      "6.2 L V-8 engine with 455 hp and 455 lb-ft torque",
      "6-speed manual transmission with limited-slip differential",
      "Stability Control & Traction Control standard",
      "Rearview backup camera",
    ],
  },
];

export const dummyMyBookingsData = [
  {
    _id: "68482bcc98eb9722b7751f70",
    car: dummyCarData[0],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-13T00:00:00.000Z",
    returnDate: "2025-06-14T00:00:00.000Z",
    status: "confirmed",
    price: 440,
    createdAt: "2025-06-10T12:57:48.244Z",
  },
  {
    _id: "68482bb598eb9722b7751f60",
    car: dummyCarData[1],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-12T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 130,
    createdAt: "2025-06-10T12:57:25.613Z",
  },
  {
    _id: "684800fa0fb481c5cfd92e56",
    car: dummyCarData[2],
    user: "6847f7cab3d8daecdb517095",
    owner: "67fe3467ed8a8fe17d0ba6e2",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "pending",
    price: 600,
    createdAt: "2025-06-10T09:55:06.379Z",
  },
  {
    _id: "6847fe790fb481c5cfd92d94",
    car: dummyCarData[3],
    user: "6847f7cab3d8daecdb517095",
    owner: "6847f7cab3d8daecdb517095",
    pickupDate: "2025-06-11T00:00:00.000Z",
    returnDate: "2025-06-12T00:00:00.000Z",
    status: "confirmed",
    price: 440,
    createdAt: "2025-06-10T09:44:25.410Z",
  },
];

export const dummyDashboardData = {
  totalCars: 4,
  totalBookings: 2,
  pendingBookings: 0,
  completedBookings: 2,
  recentBookings: [dummyMyBookingsData[0], dummyMyBookingsData[1]],
  monthlyRevenue: 840,
};

export const dummyReviews: ReviewsPayload[] = [
  {
    name: "Emma Rodriguez",
    country: "Barcelona, Spain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum dignissim massa, eu pretium est scelerisque a. Etiam pretium felis vitae felis finibus, vel eleifend ipsum rhoncus. In feugiat nunc.",
    image: assets.testimonial_image_1,
    rating: 4,
  },
  {
    name: "Emma Rodriguez",
    country: "Barcelona, Spain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum dignissim massa, eu pretium est scelerisque a. Etiam pretium felis vitae felis finibus, vel eleifend ipsum rhoncus. In feugiat nunc.",
    image: assets.testimonial_image_2,
    rating: 3,
  },
  {
    name: "Emma Rodriguez",
    country: "Barcelona, Spain",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum dignissim massa, eu pretium est scelerisque a. Etiam pretium felis vitae felis finibus, vel eleifend ipsum rhoncus. In feugiat nunc.",
    image: assets.testimonial_image_2,
    rating: 5,
  },
];
