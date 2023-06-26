import { Text, ScrollView } from 'react-native';

import { TYPOGRAPHY } from '../theme/index';
import { SearchInput, ProductList, CategoryList } from "../components";

export default function Page() {


    return (
        <ScrollView style={{ flex:1 }} showsVerticalScrollIndicator={ false }>
            <SearchInput/>
            <Text style={{...TYPOGRAPHY.title1, marginBottom:10 }}>Categorias</Text>
            <CategoryList/>

            <Text style={{...TYPOGRAPHY.title1, marginBottom:10 }}>Todos los productos</Text>
            <ProductList/>


        </ScrollView>
    );
}
