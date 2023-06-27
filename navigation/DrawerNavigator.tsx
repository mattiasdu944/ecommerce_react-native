import { Text } from 'react-native';

import { COLORS } from "../theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from '../Drawer';



export const DrawerNavigation = () => {
    return (
        <Drawer
            screenOptions={{
                drawerStyle: {
                    paddingTop: 20,
                    paddingHorizontal: 10,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                },
                drawerItemStyle: {
                    borderRadius: 10,
                    marginHorizontal: 15,
                    paddingHorizontal: 5
                },
                headerTitleAlign: 'center',
                sceneContainerStyle: {
                    backgroundColor: '#fff',
                    marginHorizontal: 15,
                },

            }}
        >
            <Drawer.Screen
                name='index' // This is the name of the page and must match the url from root
                options={{
                    drawerItemStyle: {
                        display: 'flex',
                        paddingHorizontal: 10,
                        borderRadius: 10
                    },
                    title: "Productos",
                    drawerLabel: ({ focused }) => <Text style={{ color: focused ? 'white' : COLORS.text.light }}>Productos</Text>,
                    drawerIcon: ({ focused }) => <Ionicons color={focused ? 'white' : COLORS.text.light} size={20} name={focused ? 'home' : `home-outline` as any} />,
                    drawerActiveBackgroundColor: COLORS.primary,
                }}
            />
            <Drawer.Screen
                name='cart/index' // This is the name of the page and must match the url from root
                options={{
                    drawerItemStyle: {
                        display: 'flex',
                        paddingHorizontal: 10,
                        borderRadius: 10
                    },
                    title: "Carrito",
                    drawerLabel: ({ focused }) => <Text style={{ color: focused ? 'white' : COLORS.text.light }}>Carrito</Text>,
                    drawerIcon: ({ focused }) => <Ionicons color={focused ? 'white' : COLORS.text.light} size={20} name={focused ? 'cart' : `cart-outline` as any} />,
                    drawerActiveBackgroundColor: COLORS.primary,
                }}
            />
            <Drawer.Screen
                name='products/[slug]' // This is the name of the page and must match the url from root
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    },
                    title: "Productos",
                    drawerLabel: ({ focused }) => <Text style={{ color: focused ? 'white' : COLORS.text.light }}>Productos</Text>,
                    drawerIcon: ({ focused }) => <Ionicons color={focused ? 'white' : COLORS.text.light} size={20} name={focused ? 'home' : `home-outline` as any} />,
                    drawerActiveBackgroundColor: COLORS.primary,
                }}
            />
            <Drawer.Screen
                name='search/[search]' // This is the name of the page and must match the url from root
                options={{
                    drawerItemStyle: {
                        display: 'none',
                    },
                    title: "Productos",
                    drawerLabel: ({ focused }) => <Text style={{ color: focused ? 'white' : COLORS.text.light }}>Productos</Text>,
                    drawerIcon: ({ focused }) => <Ionicons color={focused ? 'white' : COLORS.text.light} size={20} name={focused ? 'home' : `home-outline` as any} />,
                    drawerActiveBackgroundColor: COLORS.primary,
                }}
            />
        </Drawer>
    )
}