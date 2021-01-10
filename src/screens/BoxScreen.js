import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            {/* <Text style={styles.textOneStyle}>Box Screen1</Text>
            <Text style={styles.textTwoStyle}>Box Screen2</Text>
            <Text style={styles.textThreeStyle}>Box Screen3</Text> */}
            <View style={styles.boxOneStyle}></View>
            <View style={styles.boxTwoStyle}></View>
            <View style={styles.boxThreeStyle}></View>
        </View>
    )
}

export default BoxScreen

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        height: 150,
        borderColor: 'black',
        // alignItems: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    textOneStyle: {
        borderWidth: 4,
        borderColor: 'red',
        alignSelf: 'flex-end',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // left: 0,
        // bottom:0,
        // ...StyleSheet.absoluteFillObject
        // flex: 1,
        // marginVertical: 20,
        // marginHorizontal: 20,
        // padding: 15
    },
    textTwoStyle: {
        borderWidth: 4,
        borderColor: 'red',
        alignSelf: 'flex-start'
        // flex: 0
        // marginVertical: 20,
        // marginHorizontal: 20,
        // padding: 15
    },
    textThreeStyle: {
        borderWidth: 4,
        borderColor: 'red',
        // marginVertical: 20,
        // marginHorizontal: 20,
        // padding: 15,
        alignSelf: 'stretch'
    },
    boxOneStyle: {
        height: 75,
        width: 75,
        backgroundColor: 'red'
    },
    boxTwoStyle: {
        height: 75,
        width: 75,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
    },
    boxThreeStyle: {
        height: 75,
        width: 75,
        backgroundColor: 'purple'
    }
})
