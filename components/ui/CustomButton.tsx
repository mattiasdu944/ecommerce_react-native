import React from 'react'
import { TouchableOpacity, Text } from 'react-native';
import { GLOBALS } from '../../theme';

interface Props {
    text: string;
    onPress: () => void;
}

export const CustomButton = ({ text, onPress }: Props) => {

    const dispatchFunction = () => {
        onPress();
    }

    return (
        <TouchableOpacity
            activeOpacity={0.95}
            style={ GLOBALS.button }
            onPress={ dispatchFunction }
        >
            <Text style={ GLOBALS.buttonText }>
                { text }
            </Text>
        </TouchableOpacity>
    )
}
