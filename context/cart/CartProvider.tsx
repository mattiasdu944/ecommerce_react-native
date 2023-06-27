import { FC, useState, useEffect } from 'react';
import { CartContext } from './CartContext';
import { Cart, Product } from '../../interfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface PropsProvider{
    children : JSX.Element | JSX.Element[]
}

export const CartProvider:FC<PropsProvider> = ({ children }) => {
    const [cart, setCart] = useState([] as Cart[]);


    const getLocalCart = async () => {
        const localCart = await AsyncStorage.getItem('cart');
        // await AsyncStorage.removeItem('cart')
        console.log(localCart);
        if( !localCart ){
            return;
        }
        setCart( JSON.parse( localCart ) );
    }

    useEffect(() => {
      getLocalCart()

    }, [])
    

    const addProductsToCart = async (product: Product) => {
        const cartValidate = cart.findIndex(item => item.product.id === product.id )

        if( cartValidate != -1 ){
            alert('El producto ya se encuentra en el carrito')
            return;
        }
        alert(`${ product.name } se agrego al carrito`)
        setCart([...cart, {product, ammount:1 }])


        const cartJson = JSON.stringify( [...cart, {product, ammount:1 }] );
        
        await AsyncStorage.setItem('cart', cartJson);
            
    }

    return (
        <CartContext.Provider value={{
            cart,

            addProductsToCart
        }}>
            { children }
        </CartContext.Provider>
    )
}