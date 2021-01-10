import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(128)
    const [blue, setBlue] = useState(128)
    const [green, setGreen] = useState(128)

    const isPastUp = (color) => {
        if (color >= 255) return false
        else return true
    }
    const isPastDown = (color) => {
        if (color <= 0) return false
        else return true
    } 
    return (
        <View>
            <ColorCounter 
                onIncrease={() => {
                    if(isPastUp(red)) {
                        setRed((red) => red + 8)} 
                    }
                }
                onDecrease={() => {
                    if (isPastDown(red)) {
                        setRed((red) => red - 8)}
                    }
                }
                color='red' mark={red}
            />
            <ColorCounter 
                onIncrease={() => {
                    if(isPastUp(blue)) {
                        setBlue((blue) => blue + 8)} 
                    }
                }
                onDecrease={() => {
                    if (isPastDown(blue)) {
                        setBlue((blue) => blue - 8)}
                    }
                }
                color='blue' mark={blue}
            />
            <ColorCounter 
                onIncrease={() => {
                    if(isPastUp(blue)) {
                        setGreen((green) => green + 8)} 
                    }
                }
                onDecrease={() => {
                    if (isPastDown(green)) {
                        setGreen((green) => green - 8)}
                    }
                }
            color='green' mark={green}/>
            <View style={{height: 150, width: 150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})
