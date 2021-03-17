import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import theme from './theme'

const IconButton = ({antIconName, size, color, style, onPress}) => {
    return (
        <AntDesign
        name = {antIconName}
        size = {size || 24}
        color = {color || theme.light}
        style = {[styles.icon, {...style}]}
        onPress = {onPress}
        />
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: theme.primary,
        padding: 15,
        borderRadius: 50,
        elevation: 5, // might need to use other shadow properties as this might not work properly on iOS
    }
})

export default IconButton