import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text>Result - {results.length}</Text>
            <FlatList 
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}><ResultsDetail item={item} /></TouchableOpacity> }
            />
        </View>
    )
}

export default withNavigation(ResultsList)

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
})
