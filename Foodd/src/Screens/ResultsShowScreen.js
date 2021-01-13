import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id')

    const getResult = (id) => {
        fetch(`https://api.yelp.com/v3/businesses/${id}`, {
            headers: {
                'Authorization': "Bearer oEQ5tt21GHAuYP1xjxwjVnDFobMP1tdP6_DBCQ5hyE8HFFjowzcV7RSgdE40eGx4vtoA2c3n32hUgdm3EskxsfCTIZMxygTZeCw62osCQLdyPEsMJwicTwP_yq_9X3Yx"
            }
        })
        .then(res => res.json())
        .then(res => setResult(res))
        .catch(err => {console.log(err.message)})
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>Name - {result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }}/>}
            />
        </View>
    )
}

export default ResultsShowScreen

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200
    }
})
