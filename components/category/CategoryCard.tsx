import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native';
import { Category } from '../../interfaces'
import { GLOBALS } from '../../theme';

interface Props{
    category: Category
}

export const CategoryCard = ({ category }: Props) => {
    return (
        <TouchableOpacity style={ GLOBALS.categoryCard }>
            <Text style={ GLOBALS.categoryCardTitle }>
                { category.name }
            </Text>
            <Image
                source={{ uri: `https://store.innovacode.online${ category.image }` }}
                style={{ width:'50%', height:150 }}
            />
        </TouchableOpacity>
    )
}
