export interface Hotel {
  id: number;
  name: string;
  location: string;
  description: string;
  rating: number;
  images: string[];
  amenities: string[];
  roomTypes: {
    name: string;
    description: string;
    pricePerNight: number;
    maxOccupancy: number;
  }[];
}
