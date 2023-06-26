import { View } from 'react-native';
import { useFetch } from '../../hooks';
import { Product } from '../../interfaces';

import { GLOBALS } from '../../theme';
import { ProductCard } from './ProductCard';
import { LoadingProgress } from '../ui';

export const ProductList = () => {
    const  { data: products, isLoading }: { data: Product[], isLoading: boolean } = useFetch('/products');

    if( isLoading ){
        return (
            <LoadingProgress/>
        )
    }

    return (
        <View style={ GLOBALS.productContainer }>

            {
                products?.map(product => (
                    <ProductCard  key={ product.id } product={ product }/>
                ))
            }

        </View>
    )
}
