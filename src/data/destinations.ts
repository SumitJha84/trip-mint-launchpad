import baliImg from "@/assets/destinations/bali.jpg";
import santoriniImg from "@/assets/destinations/santorini.jpg";
import maldivesImg from "@/assets/destinations/maldives.jpg";
import swissAlpsImg from "@/assets/destinations/swiss-alps.jpg";

export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export const destinations: Destination[] = [
  {
    id: "bali",
    name: "Bali",
    location: "Indonesia",
    description: "Tropical paradise with stunning beaches",
    duration: "7 Days",
    price: 899,
    image: baliImg,
  },
  {
    id: "santorini",
    name: "Santorini",
    location: "Greece",
    description: "Iconic white-washed villages and sunsets",
    duration: "6 Days",
    price: 1299,
    image: santoriniImg,
  },
  {
    id: "maldives",
    name: "Maldives",
    location: "",
    description: "Luxury overwater bungalows and crystal waters",
    duration: "5 Days",
    price: 1899,
    image: maldivesImg,
  },
  {
    id: "swiss-alps",
    name: "Swiss Alps",
    location: "",
    description: "Majestic mountains and alpine adventures",
    duration: "8 Days",
    price: 2199,
    image: swissAlpsImg,
  },
];

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: "flights",
    icon: "Plane",
    title: "Flight Bookings",
    description: "Search and compare fares from hundreds of airlines to find the best deals for your journey.",
  },
  {
    id: "cruises",
    icon: "Ship",
    title: "Cruise Packages",
    description: "Explore the seas with our curated cruise packages to exotic destinations worldwide.",
  },
  {
    id: "hotels",
    icon: "Hotel",
    title: "Hotel Reservations",
    description: "From budget stays to luxury resorts, find the perfect accommodation for your trip.",
  },
  {
    id: "packages",
    icon: "Palmtree",
    title: "Holiday Packages",
    description: "Complete vacation packages with flights, hotels, and activities all bundled together.",
  },
];
