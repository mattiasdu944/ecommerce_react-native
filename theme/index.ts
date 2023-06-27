import { StyleSheet } from 'react-native';

export const COLORS = {
    primary: '#4338ca',
    text: {
        light: '#rgba(0,0,0,.5)'
    }
}

export const TYPOGRAPHY = StyleSheet.create({
    title1:{
        fontSize: 20,
        fontWeight: "900",
    },
    subtitle1:{
        fontSize: 16,
        fontWeight: "700",
        color: COLORS.text.light,

    },
    text: {
        fontSize: 14,
        color: COLORS.text.light,
        textAlign:'justify'
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
        maxWidth:175,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        padding: 20,
        borderRadius:20,

    },

    productCardImage:{
        width:'100%',
        height: 125,
    },

    productTitle: {
        fontWeight:'bold',
        marginBottom:5,
        fontSize:16
    },

    productSubTutle: {
        fontWeight:'bold',
        color:'rgba(0,0,0,0.5)',
        marginBottom:10
    },

    categoryCard: {
        flexDirection:'row',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.1)',
        overflow:'hidden',
        columnGap: 30,
        padding:20,
        width:350,
        alignItems:'center',
    },
    categoryCardTitle: {
        fontSize:20,
        fontWeight:'900',
        maxWidth:'50%'
    },

    productImage: {
        width: '100%',
        height: 350,
        borderWidth:1,
        borderColor:'rgba(0,0,0,.1)',
        borderRadius: 30,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 20,
    },

    button: {
        paddingVertical: 15,
        backgroundColor: COLORS.primary,
        borderRadius: 20,
    },

    buttonText: {
        textAlign:'center',
        color:'white'
    },

    cartItem: {
        flexDirection: 'row',
        marginBottom: 40,
        gap:20,
        overflow: 'hidden',
        borderWidth:1,
        borderRadius: 10,
        borderColor:'rgba(0,0,0,.1)',
        paddingVertical:20
    },
    cartButtons: {
        flexDirection: 'row',
        columnGap: 20
    },
    cartButton: {
        backgroundColor: COLORS.primary,
        color:'#fff',
        fontSize: 15,
        borderRadius: 10,
        padding:5
    }
})