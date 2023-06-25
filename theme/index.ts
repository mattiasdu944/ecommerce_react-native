import { StyleProps } from "react-native-reanimated"
import { StyleSheet } from 'react-native';

export const COLORS = {
    primary: '#4338ca',
    text: {
        light: '#rgba(0,0,0,.5)'
    }
}

export const TYPOGRAPHY = StyleSheet.create({
    title1:{
        fontSize: 18,
        fontWeight: "700",
    }
})

export const GLOBALS = StyleSheet.create({
    productContainer:{
        width:'100%',
        flexDirection: 'row',
        flexWrap:'wrap',
        justifyContent:'center',
        gap:10
    },

    productCard:{
        width:'100%',
        maxWidth:165,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        paddingHorizontal: 30,
        paddingVertical: 20,
        borderRadius:20,
        alignItems:'center'

    },

    productCardImage:{
        width:'100%',
        height: 100,
    },

    categoryCard: {
        flexDirection:'row',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        overflow:'hidden',
        columnGap: 30,
        padding:20,
        maxWidth:300,
        alignItems:'center',
    },
    categoryCardTitle: {
        fontSize:20,
        fontWeight:'900',
        maxWidth:'50%'
    },
})