import React from 'react'
import { ActivityIndicator, View } from 'react-native';
import { COLORS } from '../../theme';

export const LoadingProgress = () => {
    return (
        <View style={{ flex:1, justifyContent:'center', marginVertical:30 }}>
            <ActivityIndicator size={50} color={COLORS.primary}/>
        </View>
    )
}
