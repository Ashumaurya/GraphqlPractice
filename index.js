const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const port = 3000;

app.use(
  "/graphqlHTTP",
  graphqlHTTP({
    graphiql: true,
  })
);
app.listen(port, () => console.log(`Example app listening on port port!`));
