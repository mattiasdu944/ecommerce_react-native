import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../../interfaces';
import { GLOBALS } from '../../theme';


interface Props{
    product: Product;
}

export const ProductCard = ({ product }: Props) => {
    return (
        <TouchableOpacity style={ GLOBALS.productCard }>
            <Image
                source={{ uri: `https://store.innovacode.online${ product.images[0].url }` }}
                style={ GLOBALS.productCardImage }
            />
            <Text numberOfLines={2}>{ product.name }</Text>
        </TouchableOpacity>
    )
}
