module.exports = `
    type Query {
        hello(name: String!): String!
        allPost: [Post!]!
        post(postId: Int!): Post
        getNews: [News]
        news(title: String!): [News]
    }

    type Mutation {
        addPost(title: String!, body: String): Post!
        addNews(title: String!, summary: String): News
    }

    type Subscription {
        counter: Int!
        news: News
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