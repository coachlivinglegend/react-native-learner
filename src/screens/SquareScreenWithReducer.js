import React from 'react'
import { useReducer } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../Components/ColorCounter'

const reducer = (state, action) => {
    //state = { red: number, green: number, blue: number }
    //action = {type: "red" || 'green' || "blue", payload: 15 || -15}

    switch (action.type) {
        case 'red':
            return state.red + action.payload > 225 || state.red + action.payload < 0
                ? state
                : {...state, red: state.red + action.payload }
        case 'green':
            if (state.green + action.payload > 225 || state.green + action.payload < 0) {
                return state
            } else return {...state, green: state.green + action.payload }
        case 'blue':
            if (state.blue + action.payload > 225 || state.blue + action.payload < 0) {
                return state
            } else return {...state, blue: state.blue + action.payload }
        default:
            return state
    }
}

const SquareScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})
    const { red, green, blue } = state;
    const COLOR_INCREMENT = 8
    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ type: 'red', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', payload: -1 * COLOR_INCREMENT })}
                color="Red"
                mark={red}
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'blue', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT })}
                color="Blue"
                mark={blue}
            />
            <ColorCounter
                onIncrease={() => dispatch({ type: 'green', payload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', payload: -1 * COLOR_INCREMENT })}
                color="Green"
                mark={green}
            />
            <View style={{height: 150, width: 150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

export default SquareScreenWithReducer

const styles = StyleSheet.create({})
