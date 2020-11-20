const { GraphQLServer, PubSub } = require('graphql-yoga');
const mongoose = require('mongoose');

const resolvers = require('./graphql/resolver');
const typeDefs = require('./graphql/schema');
const posts = require('./data.json');

mongoose.connect("");
const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => console.log("Server is running on localhost:4000"));