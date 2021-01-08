import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ComponentScreens = () => {
    const name = 'Daniel'
    return (
        <View>
            <Text style={styles.mainStyle}>Getting started with React Native</Text>
            <Text style={styles.anotherStyle}>My name is {name}</Text>
        </View>
    )
}

export default ComponentScreens

const styles = StyleSheet.create({
    mainStyle: {
        fontSize: 45
    },
    anotherStyle: {
        fontSize: 20
    }
})
