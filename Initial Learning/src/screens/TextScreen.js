import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [text, setText] = useState('')
    const [isPass, setIsPass] = useState(true)
    return (
        <View>
            <Text>Enter Your password</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={text}
                onChangeText={(e) => {setText(e);
                    if (e.length < 6) setIsPass(true); else setIsPass(false)} }
            />
            <Text>{text.length > 5 ? '' : 'Your password no long reach'}</Text>
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 3,
        height: 100,
        padding: 15,
        fontSize: 30
    }
})
