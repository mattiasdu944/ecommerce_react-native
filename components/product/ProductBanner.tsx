import React from 'react'
import { View, Image } from 'react-native';
import { Image as ImageArray } from "../../interfaces";
import { GLOBALS } from '../../theme';

interface Props{
    image: string;
}


export const ProductBanner = ({ image }: Props) => {   
    
    
    return (
        <View style={ GLOBALS.productImage }>
            <Image
                source={{ uri: `https://store.innovacode.online${ image }` }}
                style={{ width: 300, height: 300 }}
            />
        </View>
    )
}
