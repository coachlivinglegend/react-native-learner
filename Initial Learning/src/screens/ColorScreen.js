import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { set } from 'react-native-reanimated'

const ColorScreen = () => {
    const [color, setColor] = useState('rgb(0, 255, 0)')
    const [moreColors, setMoreColors] = useState([])
    const randomRgb = () => {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random() * 256)
        const blue = Math.floor(Math.random() * 256)

        return `rgb(${red}, ${green}, ${blue})`
    }

    return (
        <View>
            <Button 
                title='Change the color of the box below'
                onPress={() => {
                    setColor(randomRgb())
                }}
            />
            <View
                style={{ height: 100, width: 100, backgroundColor: `${color}`}}
            />
            <View>
            <Button 
                title='Add a color'
                onPress={() => {
                    setMoreColors([...moreColors, randomRgb()])
                }}
            />
            </View>
            <FlatList
                keyExtractor={(item) => item}
                data={moreColors}
                renderItem ={ ( { item } ) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: `${item}`}}/>
            }}
            />
        </View>
    )
}

export default ColorScreen

const styles = StyleSheet.create({})
