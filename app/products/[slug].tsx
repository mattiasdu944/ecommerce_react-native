import React from 'react'
import { ScrollView, Text, View } from 'react-native';
import { useLocalSearchParams } from "expo-router";
import { Drawer } from '../../Drawer';
import { Product } from '../../interfaces/product';
import { LoadingProgress, ProductBanner, ProductImageCard } from '../../components';
import { useFetch } from '../../hooks';
import { FlatList } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';
import { GLOBALS, TYPOGRAPHY } from '../../theme';
import { CustomButton } from '../../components/ui/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';

const ProductScreen = () => {
    const {slug} = useLocalSearchParams();
    const { data: product, isLoading }: { data: Product, isLoading: boolean } = useFetch(`/products/${ slug }`);
    
    const [imageUrl, setImageUrl] = useState('')

    if( isLoading ){
        return <LoadingProgress/>
    }


    return (
        <ScrollView showsVerticalScrollIndicator={ false }>
            <Drawer.Screen
                options={{
                    headerTitle: product?.name   
                }}
            />
            <ProductBanner image={ imageUrl }/>
            <FlatList
                data={ product?.images }
                renderItem={({ item }) => (
                    <ProductImageCard setImageUrl={ setImageUrl } url={item.url}/>
                )}
                keyExtractor={( item ) => item.id}
                contentContainerStyle={{ columnGap: 15, marginBottom:25 }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />

            <Text style={ TYPOGRAPHY.title1 } >{ product?.name }</Text>
            <Text style={{...TYPOGRAPHY.subtitle1, marginBottom: 20 }} >{ product?.category.name }</Text>

            <Text style={ TYPOGRAPHY.title1 }>Descripcion:</Text>
            <Text style={{...TYPOGRAPHY.text, marginBottom: 20 }}>{ product?.description }</Text>

            <View style={{ marginBottom:20 }}>
                <CustomButton text={'Agregar al carrito'}/>
            </View>

        </ScrollView>
    )
}

export default ProductScreen