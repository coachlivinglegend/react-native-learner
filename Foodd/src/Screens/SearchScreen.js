import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ResultsList from '../Components/ResultsList'
import SearchBar from '../Components/SearchBar'
import useResults from '../Hooks/useResults'

const SearchScreen = ( ) => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults();

    const filterResultByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (
        <View style={styles.background }>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={(doneTerm) => searchApi(doneTerm)}
            />
            { errorMessage ? <Text>something went wrong</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultByPrice('$')} title="Cost Effective"/>
                <ResultsList results={filterResultByPrice('$$')} title="Bit Pricier"/>
                <ResultsList results={filterResultByPrice('$$$')} title="Big Spender"/>
                <ResultsList results={filterResultByPrice('$$$$')} title="Exclusive"/>
            </ScrollView>
        </View>
    )
}

export default SearchScreen 

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        flex: 1
    }
})
