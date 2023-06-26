import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';


interface Props{
    setImageUrl: React.Dispatch<React.SetStateAction<string>>;
    url: string,
}

export const ProductImageCard = ({ url, setImageUrl }: Props) => {

    useEffect(() => {
        setImageUrl( url )
    }, [])
    

    return (
        <TouchableOpacity
            onPress={() => setImageUrl( url )}
        >
            <Image
                source={{ uri: `https://store.innovacode.online${ url }` }}
                style={{
                    width:75,
                    height:75,
                    borderWidth:1,
                    borderColor:'rgba(0,0,0,.1)',
                    borderRadius: 10,
                    padding:10,
                    justifyContent:'center',
                    alignItems:'center'
                }}
            />
        </TouchableOpacity>
    )
}
