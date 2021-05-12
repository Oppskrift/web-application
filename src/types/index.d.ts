export interface Quantity {
    value: number;
    unit: string;
}

export interface Image {
    path: string;
    alternativeText: string;
}

export interface Ingredient {
    name: string;
    quantity: Quantity;
    image?: Image;
}

interface Tag {
    label: string;
    color?: string;
    path: string;
}

interface Author {
    name: string;
    avatar?: string;
}

export interface RecipeCard {
    name: string;
    tags: Tag[];
    author: Author;
    liked: boolean;
    cover?: string;
}
