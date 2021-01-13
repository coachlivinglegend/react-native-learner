import React, { useContext } from 'react';
import { Button, FlatList, StyleSheet, Text, TouchableOpacityBase, View } from 'react-native'
import { Context } from '../Context/BlogContext';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context)
    return (
        <View>
            <Text>Index Screen - {state.length}</Text>
            <Button title="Add Post" onPress={addBlogPost}/>
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
    }
})
