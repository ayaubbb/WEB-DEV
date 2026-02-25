export interface Category {
    id: number;
    name: string;
}

export interface Product {
    id: number;
    category_id: number;
    name: string;
    description: string;
    price: number;
    rating: number;
    likes: number;
    isLiked? : boolean;
    image: string;
    images: string[];
    link: string;
}