import { createContext } from 'react'
import { Cart, Product } from '../../interfaces';

interface ContextProps {
    cart: Cart[];

    addProductsToCart: (product: Product) => void;
}

export const CartContext = createContext( {} as ContextProps );