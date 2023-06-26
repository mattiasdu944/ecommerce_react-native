import { useState } from 'react'
import { useRouter } from 'expo-router';
import { View, StyleSheet, TextInput } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

export const SearchInput = () => {

    const [search, setSearch] = useState('')
    const router = useRouter();

    const hanleSearch = () => {
        router.push({ pathname:`/search/${ search }` })
    }

    return (
        <View
            style={ styles.container }
        >
            <TextInput
                placeholder='Busca un producto'
                style={ styles.textInput }
                value={ search }
                onChangeText={setSearch}
            />
            <Ionicons name='search-outline' size={22} onPress={hanleSearch}/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: '#eef2ff',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius: 20,
        marginBottom:25
    },
    textInput: {
        width: '90%'
    }
})