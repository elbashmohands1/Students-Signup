// src/components/RoomTypes.tsx

import { Hotel } from "@/types/hotel";

export const RoomTypes = ({ roomTypes }: { roomTypes: Hotel["roomTypes"] }) => {
  return (
    <div className="room-types">
      <h2 className="text-2xl font-semibold mb-4">Room Types</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {roomTypes.map((room, index) => (
          <div key={index} className="room-card border p-4 rounded">
            <h3 className="text-xl font-medium">{room.name}</h3>
            <p>{room.description}</p>
            <div className="room-info flex justify-between mt-2">
              <span>Max Occupancy: {room.maxOccupancy}</span>
              <span className="font-bold">${room.pricePerNight}/night</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
