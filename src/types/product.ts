export interface Product {
  id: number;
  image: string;
  name: string;
  rating: number;
  reviewCount: number;
  price: number;
  category: string;
}

interface FurnitureGridProps {
  products: Product[];
}
