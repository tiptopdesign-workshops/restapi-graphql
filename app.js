const { GraphQLServer, PubSub } = require('graphql-yoga');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolver');
const typeDefs = require('./graphql/schema');
const posts = require('./data.json');

mongoose.connect('mongodb+srv://developer:developer@hihenry-searchable-api.tljxf.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => console.log("Server is running on localhost:4000"));