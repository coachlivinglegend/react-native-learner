import React, { useReducer } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

// const reducer =(state, action) => {
//     switch (action.type) {
//         case 'INCREASE_COUNTER':
//             return {...state, counter: state.counter + action.payload}
//         case 'DECREASE_COUNTER':
//             return {...state, counter: state.counter - action.payload}
//         default:
//             return state;
//     }
// }

const reducer =(state, action) => {
    switch (action.type) {
        case 'CHANGE_COUNTER':
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}
const CounterScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const { counter } = state
    return (
        <View>
            {/* <Button
                title='Increase'
                onPress={() => {
                    dispatch({ type: 'INCREASE_COUNTER', payload: 5})
                }}
            />
            <Button 
                title='Decrease'
                onPress={() => {
                    dispatch({ type: 'DECREASE_COUNTER', payload: 5})
                }}    
            /> */}
            <Button
                title='Increase'
                onPress={() => {
                    dispatch({ type: 'CHANGE_COUNTER', payload: 5})
                }}
            />
            <Button 
                title='Decrease'
                onPress={() => {
                    dispatch({ type: 'CHANGE_COUNTER', payload: -5})
                }}    
            />
            <Text>Current count: {counter}</Text>

        </View>
    )
}

export default CounterScreenWithReducer

const styles = StyleSheet.create({})
