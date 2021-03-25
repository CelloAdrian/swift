import React from 'react'
import { View, StyleSheet } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import theme from './theme'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        zIndex: -1
    }
})

const NotFound = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <AntDesign name="frowno" size={90} color={theme.light}/>
            <Text style={{marginTop: 20, fontSize: 20}}>Result Not Found</Text>
        </View>
    )
}

export default NotFound;