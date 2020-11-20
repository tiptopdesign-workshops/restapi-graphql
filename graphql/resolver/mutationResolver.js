module.exports = {
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
    }
}