import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather style={styles.iconStyle} name="search" color="black" />
            <TextInput
                style={styles.inputStyle}
                placeholder='Search' 
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={(e) => onTermSubmit(e)}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        marginBottom: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }

})
