// src/components/HotelGallery.tsx
"use client";
import Image from "next/image";
import { useState } from "react";

export const HotelGallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="hotel-gallery flex space-x-4">
      <div className="main-image w-3/4">
        <Image
          src={mainImage}
          alt="Hotel Main Image"
          width={800}
          height={500}
          className="w-full object-cover"
        />
      </div>
      <div className="thumbnail-gallery w-1/4 grid grid-cols-2 gap-2">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            width={150}
            height={100}
            onClick={() => setMainImage(img)}
            className="cursor-pointer hover:opacity-75"
          />
        ))}
      </div>
    </div>
  );
};
