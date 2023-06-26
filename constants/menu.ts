import { useLocalSearchParams } from "expo-router";
interface MenuOption {
    name: string;
    title:string;
    icon: string;
    display: 'flex'|'none';
}

export const MENU_OPTIONS: MenuOption[] = [
    {
        icon: 'cart',
        name: 'index',
        title:'Productos',
        display: 'flex'
    },
    {
        icon: 'heart',
        name: 'favorites/index',
        title:'Favoritos',
        display: 'flex'
    },
    {
        icon: 'cart',
        name: 'products/[slug]',
        title:'Producto',
        display: 'none'
    },
    {
        icon: 'cart',
        name: 'search/[search]',
        title:'Producto',
        display: 'none'
    },
] 