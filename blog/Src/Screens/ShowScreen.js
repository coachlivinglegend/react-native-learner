import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../Context/BlogContext'

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

    const id = navigation.getParam('id')

    return (
        <View>
            <Text>{blogPost.title} - {blogPost.id} </Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({})
