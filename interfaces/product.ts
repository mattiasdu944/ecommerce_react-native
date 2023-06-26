import { Category } from "./";

export interface Product {
    id:          string;
    name:        string;
    slug:        string;
    stock:       string;
    price:       string;
    description: string;
    category:    Category;
    images:      Image[];
}



export interface Image {
    id:  string;
    url: string;
}
