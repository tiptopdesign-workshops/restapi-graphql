module.exports = `
    type Query {
        hello(name: String!): String!
        allPost: [Post!]!
        post(postId: Int!): Post
        news: [News]
    }

    type Mutation {
        addPost(title: String!, body: String): Post!
    }

    type Subscription {
        counter: Int!
    }

    type News {
        id: String
        title: String
        url: String
        imageUrl: String
        newsSite: String
        summary: String
        quote: String
    }

    type Post {
        userId: ID
        id: Int
        title: String
        body: String
    }
`;