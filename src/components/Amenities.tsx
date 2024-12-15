// src/components/Amenities.tsx
export const Amenities = ({ amenities }: { amenities: string[] }) => {
  return (
    <div className="amenities">
      <h2 className="text-2xl font-semibold mb-4">Hotel Amenities</h2>
      <div className="grid grid-cols-3 gap-2">
        {amenities.map((amenity, index) => (
          <div key={index} className="amenity-item flex items-center">
            <span>✓</span>
            <span className="ml-2">{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
