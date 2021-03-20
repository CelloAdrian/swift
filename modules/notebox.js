import React from 'react'
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native'
import theme from './theme'

const Note = ({item, onPress}) => {
    const {title, description} = item
    return (
        <TouchableOpacity onPress = {onPress} style = {styles.container}>
            <Text style = {styles.title} numberOfLines = {2}>{title}</Text>
            <Text numberOfLines = {3}>{description}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.primary,
        width: Dimensions.get('window').width - 40,
        padding: 8,
        borderRadius: 10,
        marginBottom: 15,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: theme.dark
    }
})

export default Note