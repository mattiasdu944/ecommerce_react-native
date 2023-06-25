import { useState } from 'react'
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

export const SearchInput = () => {

    const [search, setSearch] = useState('')

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
            <Ionicons name='search-outline' size={22}/>
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