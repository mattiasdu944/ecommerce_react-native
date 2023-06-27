import React from 'react'
import { View, Text, Image } from 'react-native';
import { Product } from '../../interfaces/product';
import { GLOBALS } from '../../theme';
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    product: Product;
    ammount: number;
}

export const CartItem = ({ ammount, product }: Props) => {
    return (
        <View style={ GLOBALS.cartItem }>
            <Image
                source={{ uri: `https://store.innovacode.online${ product.images[0].url }` }}
                style={{ width: 100, height: 100 }}
            />
            <View>
                <Text numberOfLines={1} style={{ maxWidth:250 }}>{ product.name }</Text>
                <Text>{ product.price }$</Text>
                <Text>Cantidad: { ammount }</Text>
                <View style={ GLOBALS.cartButtons }>
                    <Ionicons style={ GLOBALS.cartButton } name='remove-outline'/>
                    <Ionicons style={ GLOBALS.cartButton } name='add-outline'/>
                </View>
            </View>
        </View>
    )
}
