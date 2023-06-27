import { useContext, useState } from 'react';
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View, FlatList } from 'react-native';
import { useFetch } from '../../hooks';

import { Drawer } from '../../Drawer';
import { Product } from '../../interfaces';
import { TYPOGRAPHY } from '../../theme';
import { LoadingProgress, ProductBanner, ProductImageCard, CustomButton } from '../../components';
import { CartContext } from '../../context/cart/CartContext';

const ProductScreen = () => {
    const {slug} = useLocalSearchParams();
    const { data: product, isLoading }: { data: Product, isLoading: boolean } = useFetch(`/products/${ slug }`);
    
    const { addProductsToCart } = useContext(CartContext);

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
                <CustomButton onPress={  () => addProductsToCart(product)  } text={'Agregar al carrito'}/>
            </View>

        </ScrollView>
    )
}

export default ProductScreen