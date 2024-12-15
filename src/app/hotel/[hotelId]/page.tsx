"use client";
import React, { useState, useEffect } from "react";
import FurnitureGrid from "@/components/FurnitureGrid";
import { Product } from "@/types/product";
const FurniturePage: React.FC = () => {
  // const [products, setProducts] = useState<Product[]>([]);
  const products = [
    {
      id: 1,
      name: "Modern living room",
      category: "Living Room",
      image: "/img/living-room.jpg",
      price: 300,
      rating: 4.5,
      numReviews: 300,
    },
    {
      id: 2,
      name: "Modern living room",
      category: "bedroom",
      image: "/img/hotel-room1.png",
      price: 300,
      rating: 4.5,
      numReviews: 300,
    },
    {
      id: 3,
      name: "Modern living room",
      category: "Living Room",
      image: "/img/hotel-beach.png",
      price: 300,
      rating: 4.5,
      numReviews: 300,
    },
    {
      id: 4,
      name: "Modern bedroom",
      category: "Bedroom",
      image: "/img/hotel-beach.png",
      price: 400,
      rating: 4.7,
      numReviews: 250,
    },
    {
      id: 5,
      name: "Dining table set",
      category: "Dining Room",
      image: "/img/hotel-room1.png",
      price: 600,
      rating: 4.3,
      numReviews: 180,
    },
    {
      id: 6,
      name: "Office desk",
      category: "Office",
      image: "/img/hotel-beach.png",
      price: 250,
      rating: 4.1,
      numReviews: 120,
    },
    {
      id: 7,
      name: "Pendant light",
      category: "Lighting & Accessories",
      image: "/img/hotel-room1.png",
      price: 80,
      rating: 4.2,
      numReviews: 90,
    },
  ];
  // useEffect(() => {
  //   // Fetch product data from an API or database
  //   const fetchProducts = async () => {
  //     const response = await fetch("/api/");
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  return (
    <div className="container mx-auto py-8">
      <FurnitureGrid products={products} />
    </div>
  );
};

export default FurniturePage;
