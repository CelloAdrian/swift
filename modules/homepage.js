import React, {useState} from 'react'
import {View, StyleSheet, Text, StatusBar} from 'react-native'
import SearchBar from './searchbar'
import theme from './theme'
import IconButton from './iconbutton'
import NoteInput from './noteinput'

const Homepage = () => {
    const [modalVisible, setModalVisible] = useState(false)

    const handleOnSubmit = (title, description) => {
        //TODO : this shit
    }

    return (
        <>
        <StatusBar barStyle='dark-content' backgroundColor = {theme.light}/>
        <View style = {styles.container}>
            <Text style = {styles.header}>Notes</Text>
            <SearchBar containerStyle = {{marginVertical: 15}}/>
            <View style = {[StyleSheet.absoluteFillObject ,styles.emptyHeaderContainer]}> 
                <Text style = {styles.emptyHeader}>Add Notes</Text>
                <IconButton onPress = {() => setModalVisible(true)} antIconName = 'plus' style = {styles.addButton}/>
            </View>
        </View>
        <NoteInput visible = {modalVisible} onClose = {() => setModalVisible(false)} onSubmit = {handleOnSubmit}/>
        </>
    )
}

// TODO: dynamic font sizes, by pixel ratio or phone dimensions
const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    emptyHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1,
    },
    emptyHeader: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        opacity: 0.2,
    },
    addButton: {
        position: 'absolute',
        right: 15,
        bottom: 50,
    }
})

export default Homepage