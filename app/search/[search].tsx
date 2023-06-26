import { View, Text } from 'react-native';
import { useSearchParams } from 'expo-router';
import { Product } from '../../interfaces';

import { useFetch } from '../../hooks';
import { GLOBALS, TYPOGRAPHY } from '../../theme';
import { LoadingProgress, ProductCard, SearchInput } from '../../components';
import { Drawer } from '../../Drawer';


const SearchScreen = () => {
    const { search } = useSearchParams();
    const  { data: products, isLoading }: { data: Product[], isLoading: boolean } = useFetch(`/products?search=${ search }`);
    

    return (
        <>  
            <Drawer.Screen
                options={{
                    headerTitle: 'Busca productos'
                }}
            />
            <SearchInput/>
            <Text style={ TYPOGRAPHY.title1 }>
                {
                    products?.length == 0
                    ? <Text style={ TYPOGRAPHY.title1 }>No se econtraron resultados de: { search }</Text>
                    : <Text style={ TYPOGRAPHY.title1 }>Resultados de: { search }</Text>
                }
            </Text>

            <View style={ GLOBALS.productContainer }>
                {
                    isLoading
                    ?  <LoadingProgress/>
                    : (
                        products?.map(product => (
                            <ProductCard  key={ product.id } product={ product }/>
                        ))
                    )   
                }
            </View>
        </>
    )
}

export default SearchScreen