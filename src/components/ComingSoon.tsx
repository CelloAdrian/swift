import React from "react"
import {View, Text, StyleSheet, Dimensions} from "react-native"
import EmptyIcon from "../../assets/icons/EmptyIcon"

export default function ComingSoon() {
    const width = Dimensions.get('window').width;
    return (
        <View style={styles.container}>
            <EmptyIcon height={width} width={width}/>
            <Text style={styles.title}>Coming Soon!</Text>
            <Text style={styles.description}>or maybe not lol im way too lazy</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24,
        paddingBottom: 30,
    },
    description: {
        fontSize: 16,
    }
})