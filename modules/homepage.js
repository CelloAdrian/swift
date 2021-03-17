import React from 'react'
import {View, StyleSheet, Text, StatusBar} from 'react-native'
import theme from './theme'

const Homepage = () => {
    return (
        <>
        <StatusBar barStyle='dark-content' backgroundColor = {theme.light}/>
        <View style = {styles.container}>
            <Text style = {styles.header}>Note Screen</Text>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 40, // TODO: dynamic font sizes, by pixel ratio or phone dimensions
        fontWeight: 'bold',
    }
})

export default Homepage