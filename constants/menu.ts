interface MenuOption {
    name: string;
    title:string;
    icon: string;
}
export const MENU_OPTIONS: MenuOption[] = [
    {
        icon: 'cart',
        name: 'index',
        title:'Productos'
    },
    {
        icon: 'heart',
        name: 'favorites/index',
        title:'Favoritos'
    },
] 