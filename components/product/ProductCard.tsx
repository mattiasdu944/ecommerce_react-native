import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Product } from '../../interfaces';
import { GLOBALS } from '../../theme';
import { useRouter } from 'expo-router';


interface Props{
    product: Product;
}

export const ProductCard = ({ product }: Props) => {

    const router = useRouter();
    
    const handleNavigate = () => {
        router.push({ 
            pathname: `/products/${product.slug}`, 
        })
    }


    return (
        <TouchableOpacity 
            style={ GLOBALS.productCard }
            onPress={handleNavigate}    
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: `https://store.innovacode.online${ product.images[0].url }` }}
                style={ GLOBALS.productCardImage }
            />
            <Text style={ GLOBALS.productTitle } numberOfLines={2}>{ product.name }</Text>
            <Text style={ GLOBALS.productSubTutle } numberOfLines={2}>{ product.category.name }</Text>
            <Text style={ GLOBALS.productTitle } numberOfLines={2}>{ product.price }$</Text>
        </TouchableOpacity>
    )
}
