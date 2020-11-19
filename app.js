const { GraphQLServer, PubSub } = require('graphql-yoga');
const posts = require('./data.json');

const typeDefs = `
    type Query {
        hello(name: String!): String!
        allPost: [Post!]!
        post(postId: Int!): Post
    }

    type Mutation {
        addPost(title: String!, body: String): Post!
    }

    type Subscription {
        counter: Int!
    }

    type Post {
        userId: ID
        id: Int
        title: String
        body: String
    }
`;

const resolvers = {
    Query: {
        hello: (_, { name }) => `Hello ${name}`,
        allPost: () => posts,
        post: (_, { postId }) => posts.filter(post => post.id === postId)[0]
    },
    Mutation: {
        addPost: (_, { title, body }) => {
            const newPost = {
                id: 3,
                title,
                body,
                userId: 0,
            };

            posts.push(newPost);

            return newPost;
        }
    },
    Subscription: {
        counter: {
            subscribe: (parent, args, { pubsub }) => {
                let count = 0;

                setInterval(() => pubsub.publish("test", { counter: count++ }), 2000)

                return pubsub.asyncIterator("test");
            }
        }
    }
}

const pubsub = new PubSub();
const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(() => console.log("Server is running on localhost:4000"));