import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Modal, StatusBar, TextInput, TouchableWithoutFeedback, Keyboard} from 'react-native'
import theme from './theme'
import IconButton from './iconbutton'

const NoteInput = ({visible, onClose, onSubmit, note, isEdit}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleBoxClose = () => {
        Keyboard.dismiss()
    }

    useEffect(() => {
        if(isEdit) {
            setTitle(note.title)
            setDescription(note.description)
        }
    },[isEdit])

    const handleOnChangeText = (text, valueFor) => {
        if (valueFor === 'title') setTitle(text)
        if (valueFor === 'description') setDescription(text)
    }

    const handleSubmit = () => {
        if (!title.trim() && !description.trim()) return onClose()

        if (isEdit) {
            onSubmit(title, description, Date.now())
        } else {
            onSubmit(title, description)
            setTitle('')
            setDescription('')
        }
        onClose()
    }

    const closeBox = () => {
        if (!isEdit) {
            setTitle('')
            setDescription('')
        }
        onClose()
    }

    return (
        <>
        <StatusBar hidden />
        <Modal visible = {visible} animationType = 'slide'>
            <View style = {styles.container}>
                <TextInput
                    placeholder = 'Title'
                    value = {title} 
                    style = {[styles.input, styles.title]}
                    onChangeText = {(text) => handleOnChangeText(text, 'title')}  
                    />
                <TextInput
                    placeholder = 'Note'
                    value = {description} 
                    multiline 
                    style = {[styles.input, styles.description]}
                    onChangeText = {(text) => handleOnChangeText(text, 'description')}
                    />
                <View style = {styles.buttonContainer}>
                    <IconButton size = {15} antIconName = 'check' onPress = {handleSubmit}/>
                    {title.trim() || description.trim() ? <IconButton size = {15} style = {{marginLeft: 15}} antIconName = 'close' onPress = {closeBox}/> : null}
                </View>
            </View>
            <TouchableWithoutFeedback onPress = {handleBoxClose}>
                <View style = {[StyleSheet.absoluteFillObject ,styles.boxbg]}/>
            </TouchableWithoutFeedback>
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 15,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: theme.primary,
        fontSize: 20,
        color: theme.dark
    },
    title: {
        height: 40,
        marginBottom: 15,
        fontWeight: 'bold'
    },
    description: {
        height: 100,
    },
    boxbg: {
        flex: 1,
        zIndex: -1,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 15,
    }
})

export default NoteInput