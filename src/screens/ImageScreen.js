import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../Components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <Text>
                <ImageDetail title={'Lion'}/>
                <ImageDetail title={'SDwe'}/>
                <ImageDetail title={'XSxs'}/>
                <ImageDetail title={'Sds'}/>
                <ImageDetail title={'Zebta'}/>
            </Text>
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
