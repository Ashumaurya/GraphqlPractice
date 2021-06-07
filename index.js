const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const port = 3000;

app.use(
  "/graphqlHTTP",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);
app.listen(port, () =>
  console.log(
    `Example app listening on port port! Running on http://localhost:3000/graphqlHTTP`
  )
);
