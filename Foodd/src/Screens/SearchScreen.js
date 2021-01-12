import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../Components/SearchBar'
import yelp from '../Api/Yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        searchApi('pasta')
    }, [ ])

    const searchApi = (searchTerm) => {
        const params = new URLSearchParams({
            limit: 50,
            term: searchTerm,
            location: 'san jose'
        })

        fetch(`https://api.yelp.com/v3/businesses/search?${params.toString()}`, {
            headers: {
                'Authorization': "Bearer oEQ5tt21GHAuYP1xjxwjVnDFobMP1tdP6_DBCQ5hyE8HFFjowzcV7RSgdE40eGx4vtoA2c3n32hUgdm3EskxsfCTIZMxygTZeCw62osCQLdyPEsMJwicTwP_yq_9X3Yx"
            }
        })
        .then(res => res.json())
        .then(res => setResults(res.businesses))
        .catch(err => setErrorMessage('something went wrong'))


        // const response  = yelp.get('/search', {
        //     params: {
        //         limit: 50,
        //         term,
        //         location: 'san jose'
        //     }
        // })
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // console.log(response)

        // setResults((response.data.businesses))
    }


    return (
        <View style={styles.background }>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)} 
                onTermSubmit={(doneTerm) => searchApi(doneTerm)}
            />
            { errorMessage ? <Text>errorMessage</Text> : null}
            <Text>We have found {results.length} results. </Text>
        </View>
    )
}

export default SearchScreen

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white',
        height: 100
    }
})
