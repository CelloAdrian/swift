import React from 'react'
import {View, StyleSheet, TextInput} from 'react-native'
import theme from './theme'

const SearchBar = ({containerStyle}) => {
    return (
        <View style = {[styles.container, {...containerStyle}]}>
            <TextInput style = {styles.searchBar} placeholder = 'Find something...'/>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBar: {
        borderWidth: 0.5,
        borderColor: theme.primary,
        height: 40,
        borderRadius: 40,
        paddingLeft: 15,
        fontSize: 20,
    },
    container: {
        paddingHorizontal: 20,
    }
})

export default SearchBar