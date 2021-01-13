import axios from 'axios'

export default axios.create({
    baseUrl: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer oEQ5tt21GHAuYP1xjxwjVnDFobMP1tdP6_DBCQ5hyE8HFFjowzcV7RSgdE40eGx4vtoA2c3n32hUgdm3EskxsfCTIZMxygTZeCw62osCQLdyPEsMJwicTwP_yq_9X3Yx'
    }
})

