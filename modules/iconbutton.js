import React from 'react'
import {View, StyleSheet} from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import theme from './theme'

const IconButton = ({antIconName, size, color}) => {
    return (
        <AntDesign
        name = {antIconName}
        size = {size || 24}
        theme = {color || theme.light}
        />
    )
}

const styles = StyleSheet.create({
    container:{}
})

export default IconButton