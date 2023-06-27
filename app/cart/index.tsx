import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { CartContext } from '../../context/cart/CartContext';
import { CartItem } from '../../components/cart/CartItem';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CartScreen() {
    
    const { cart } = useContext(CartContext);


    return (
        <View>
            {
                cart.length === 0
                ? <Text>No hay productos</Text>
                : (
                    cart.map(item => (
                        <CartItem 
                            key={ item.product.id } 
                            product={ item.product } 
                            ammount={ item.ammount }
                        />
                    ))
                )
            }
        </View>
    )
}
