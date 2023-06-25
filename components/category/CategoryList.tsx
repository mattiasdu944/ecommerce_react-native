import React from 'react'
import { View } from 'react-native';

import { Category } from '../../interfaces';
import { useFetch } from '../../hooks';
import { LoadingProgress } from '../ui';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard } from './';

export const CategoryList = () => {

    const  { data: categories, isLoading }: { data: Category[], isLoading: boolean } = useFetch('/categories');
    
    if( isLoading ){
        return (
            <LoadingProgress/>
        )
    }

    return (
        <FlatList
            data={ categories }
            renderItem={({ item }) => (
                <CategoryCard category={ item }/>
            )}
            // keyExtractor={(_ , index) => index}
            contentContainerStyle={{ columnGap: 15, marginBottom:25 }}
            horizontal
            showsHorizontalScrollIndicator={false}
            
        />
    )
}
