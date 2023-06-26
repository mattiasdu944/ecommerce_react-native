import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { GLOBALS } from '../../theme';

interface Props {
    text: string;
}

export const CustomButton = ({ text }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={ GLOBALS.button }
        >
            <Text style={ GLOBALS.buttonText }>
                { text }
            </Text>
        </TouchableOpacity>
    )
}
