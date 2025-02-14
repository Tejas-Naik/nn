export interface Product {
    id: number;
    name: string;
    price: number;
    category: 'shirts' | 'shorts';
    image: string;
    description: string;
    sizes: string[];
}

export const products: Product[] = [
    {
        id: 1,
        name: "Classic Oxford Button-Down Shirt",
        price: 79.99,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
        description: "Premium cotton Oxford shirt perfect for any occasion. Features a comfortable fit and durable construction.",
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        name: "Slim Fit Dress Shirt",
        price: 89.99,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
        description: "Modern slim fit dress shirt made from wrinkle-resistant fabric. Perfect for business or formal events.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Casual Linen Shirt",
        price: 69.99,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=500",
        description: "Breathable linen shirt ideal for summer. Features a relaxed fit and natural fabric.",
        sizes: ["M", "L", "XL", "XXL"]
    },
    {
        id: 4,
        name: "Chino Shorts",
        price: 59.99,
        category: "shorts",
        image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500",
        description: "Classic chino shorts perfect for casual wear. Made from durable cotton twill.",
        sizes: ["30", "32", "34", "36", "38"]
    },
    {
        id: 5,
        name: "Athletic Performance Shorts",
        price: 49.99,
        category: "shorts",
        image: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03d?w=500",
        description: "Lightweight, moisture-wicking shorts ideal for workouts and active lifestyles.",
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: "Cargo Shorts",
        price: 64.99,
        category: "shorts",
        image: "https://images.unsplash.com/photo-1584865288642-42078afe6942?w=500",
        description: "Versatile cargo shorts with multiple pockets. Perfect for outdoor activities.",
        sizes: ["30", "32", "34", "36"]
    }
];
