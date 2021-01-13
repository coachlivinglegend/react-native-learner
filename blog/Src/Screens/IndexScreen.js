import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacity , View } from 'react-native'
import { Context } from '../Context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, deleteBlogPost } = useContext(Context)

    if (!state.length) {
        return <Text style={{textAlign: 'center', marginTop: 30}}>Add a blogpost xx</Text>
    }
    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={( blogPost ) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}    
            />
        </View>
    )
}

IndexScreen.navigationOptions =({ navigation }) => {
    return {
        headerRight  : () => <TouchableOpacity onPress={() => navigation.navigate('Create')}><Feather style={styles.plus} name="plus" color="black" /></TouchableOpacity>
    }
}

export default IndexScreen

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    plus: {
        marginRight: 20,
        fontSize: 30
    }
})
