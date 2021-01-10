import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 'Age 20'},
        { name: 'Friend #2', age: 'Age 21'},
        { name: 'Friend #3', age: 'Age 22'},
        { name: 'Friend #4', age: 'Age 23'},
        { name: 'Friend #5', age: 'Age 24'},
        { name: 'Friend #6', age: 'Age 25'},
        { name: 'Friend #7', age: 'Age 26'},
        { name: 'Friend #8', age: 'Age 27'},
        { name: 'Friend #9', age: 'Age 28'},
        { name: 'Friend #10', age: 'Age 29'},
    ]
    return (
        <View>
            <FlatList
                // showsHorizontalScrollIndicator={false}
                keyExtractor={friend => friend.name} data={friends} renderItem={(element) => {
                return <Text style={styles.aStyle}>{element.item.name} - {element.item.age}</Text>
            }}/>
        </View>
    )
}

export default ListScreen

const styles = StyleSheet.create({
    aStyle: {
        color: 'red',
        marginVertical: 30,
        textAlign: 'center'
    }
})
