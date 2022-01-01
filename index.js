const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema')
const app = express()



//route is http://localhost:3000/graphql
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))



app.listen(3000, () => console.log("Server Started on PORT 3000"))