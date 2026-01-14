export const SUPPLIERS = {
  urban: { 
    name: "Urban Artisans GYE", 
    bio: "Maestros del cuero y textiles técnicos con sede en el centro de Guayaquil." 
  },
  minimal: { 
    name: "Minimal Co.", 
    bio: "Diseño puro y fibras orgánicas para el día a día moderno." 
  },
  extreme: { 
    name: "Extreme Wear", 
    bio: "Especialistas en ropa de alto rendimiento y durabilidad urbana." 
  }
};

export const PRODUCTS = [
  {
    id: 1,
    name: "Chaqueta de Cuero Urbana",
    price: 120.00,
    category: "Más Vendidos",
    description: "Corte moderno, ideal para un look rebelde y sofisticado. Fabricada con cuero de grano superior.",
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?q=80&w=800&auto=format&fit=crop",
    rating: 5.0,
    salesCount: 150,
    createdAt: "2023-10-01",
    supplier: SUPPLIERS.urban,
    reviews: [
      { user: "Edwin Ismael García García", rating: 5, comment: "Excelente calidad, el corte es perfecto y se siente muy premium." },
      { user: "Jordy Alvarado", rating: 5, comment: "La mejor inversión que he hecho este año. El cuero es real y huele increíble." }
    ]
  },
  {
    id: 2,
    name: "Camisa Minimalista Blanca",
    price: 45.00,
    category: "Novedades",
    description: "Algodón premium con costuras invisibles. El básico perfecto para cualquier outfit.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=800&auto=format&fit=crop",
    rating: 4.5,
    salesCount: 85,
    createdAt: "2023-11-15",
    supplier: SUPPLIERS.minimal,
    reviews: [
      { user: "William Isaac Castro Alvarado", rating: 5, comment: "Tela muy fresca y el entalle es justo como lo buscaba." }
    ]
  },
  {
    id: 3,
    name: "Pantalón Cargo Negro",
    price: 65.00,
    category: "Ofertas",
    description: "Resistente y funcional para el explorador moderno. Múltiples bolsillos tácticos.",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop",
    discount: 20,
    rating: 4.2,
    salesCount: 210,
    createdAt: "2023-09-20",
    supplier: SUPPLIERS.extreme,
    reviews: [
      { user: "Eliceo Daniel Gusniay Patajalo", rating: 4, comment: "Muy cómodos para el diario, los bolsillos son super funcionales." }
    ]
  },
  {
    id: 4,
    name: "Sudadera Oversize Hoodie",
    price: 55.00,
    category: "Novedades",
    description: "Máximo confort con un estilo streetwear indiscutible. Algodón pesado de alta durabilidad.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    rating: 4.7,
    salesCount: 120,
    createdAt: "2023-12-01",
    supplier: SUPPLIERS.extreme,
    reviews: [
      { user: "Milena Castro", rating: 5, comment: "El estilo oversize es perfecto, súper calientita y con mucho flow." }
    ]
  },
  {
    id: 5,
    name: "Gorra Técnica SewWild",
    price: 25.00,
    category: "Más Vendidos",
    description: "Material repelente al agua y ajuste micrométrico. Diseñada para resistir el sol de Guayaquil.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=800&auto=format&fit=crop",
    rating: 4.9,
    salesCount: 300,
    createdAt: "2023-08-15",
    supplier: SUPPLIERS.urban,
    reviews: [
      { user: "Anthony Cevallos", rating: 5, comment: "La uso para todo, el material técnico se nota de calidad superior." }
    ]
  },
  {
    id: 6,
    name: "Zapatillas Street Stealth",
    price: 85.00,
    category: "Ofertas",
    description: "Suela de alta tracción y diseño minimalista para el asfalto urbano.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop",
    discount: 15,
    rating: 4.6,
    salesCount: 180,
    createdAt: "2023-11-20",
    supplier: SUPPLIERS.extreme,
    reviews: [
      { user: "Bryan Solórzano", rating: 4, comment: "Diseño agresivo pero discreto, combinan con todo mi estilo." }
    ]
  }
];