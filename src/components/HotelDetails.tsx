import { Hotel } from "@/types/hotel";

// src/components/HotelDetails.tsx
export const HotelDetails = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div className="hotel-details">
      <h1 className="text-3xl font-bold">{hotel.name}</h1>
      <p className="text-gray-600">{hotel.location}</p>
      <div className="rating flex items-center">
        {"★".repeat(hotel.rating)}
        <span className="ml-2 text-gray-500">({hotel.rating}/5)</span>
      </div>
      <p className="mt-4">{hotel.description}</p>
    </div>
  );
};
