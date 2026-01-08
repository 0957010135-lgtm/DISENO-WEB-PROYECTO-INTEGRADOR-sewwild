
export const SUPPLIERS = {
  urban: { name: "Urban Artisans GYE", bio: "Maestros del cuero y textiles técnicos." },
  minimal: { name: "Minimal Co.", bio: "Diseño puro y fibras orgánicas." },
  extreme: { name: "Extreme Wear", bio: "Especialistas en alto rendimiento." }
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Chaqueta de Cuero Urbana",
    price: 120.00,
    category: "Más Vendidos",
    description: "Corte moderno, ideal para un look rebelde.",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    salesCount: 150,
    createdAt: "2023-10-01",
    supplier: SUPPLIERS.urban,
    reviews: []
  },
  {
    id: 2,
    name: "Camisa Minimalista Blanca",
    price: 45.00,
    category: "Novedades",
    description: "Algodón premium con costuras invisibles.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    salesCount: 85,
    createdAt: "2023-11-15",
    supplier: SUPPLIERS.minimal,
    reviews: []
  },
  {
    id: 3,
    name: "Pantalón Cargo Negro",
    price: 65.00,
    category: "Ofertas",
    description: "Resistente y funcional.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    discount: 20,
    rating: 4.2,
    salesCount: 210,
    createdAt: "2023-09-20",
    supplier: SUPPLIERS.extreme,
    reviews: []
  }
];
