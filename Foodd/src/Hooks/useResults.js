import {useEffect, useState } from 'react'

export default () => {
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
    }
    return [searchApi, results, errorMessage]
}